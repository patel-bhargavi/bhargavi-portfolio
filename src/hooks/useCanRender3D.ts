import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean };

export function useCanRender3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarseMedia = window.matchMedia("(pointer: coarse)");
    const narrowMedia = window.matchMedia("(max-width: 767px)");

    const update = () => {
      const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const cores = navigator.hardwareConcurrency ?? 8;
      const ok =
        !reducedMedia.matches &&
        !coarseMedia.matches &&
        !narrowMedia.matches &&
        !connection?.saveData &&
        (memory === undefined || memory >= 4) &&
        cores >= 4;

      setEnabled(ok);
    };

    update();
    reducedMedia.addEventListener("change", update);
    coarseMedia.addEventListener("change", update);
    narrowMedia.addEventListener("change", update);
    return () => {
      reducedMedia.removeEventListener("change", update);
      coarseMedia.removeEventListener("change", update);
      narrowMedia.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
