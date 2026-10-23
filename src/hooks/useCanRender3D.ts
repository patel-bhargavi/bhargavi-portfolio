import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean };

export function useCanRender3D() {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const reducedMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const cores = navigator.hardwareConcurrency ?? 8;
      const ok =
        !reducedMedia.matches &&
        !connection?.saveData &&
        (memory === undefined || memory >= 2) &&
        cores >= 2;

      setEnabled(ok);
    };

    update();
    reducedMedia.addEventListener("change", update);
    return () => reducedMedia.removeEventListener("change", update);
  }, []);

  return enabled;
}
