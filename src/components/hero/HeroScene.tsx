import { Component, lazy, Suspense, type ReactNode } from "react";
import { useCanRender3D } from "@/hooks/useCanRender3D";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function HeroScene() {
  const canRender = useCanRender3D();
  if (!canRender) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <SceneBoundary>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </SceneBoundary>
      <p className="sr-only">
        A three-dimensional gaming desktop. It stays on screen and shifts, scales, and turns as the page scrolls.
      </p>
    </div>
  );
}
