import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3, type Group } from "three";

useGLTF.preload("/desktop_pc/scene.gltf");

type Pose = {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  scale: number;
};

const poses: Array<Pose & { t: number }> = [
  { t: 0, x: 2.65, y: 0.85, z: 0, rx: 0, ry: 0, scale: 1 },
  { t: 0.25, x: 3.05, y: 1.15, z: 0, rx: 0.04, ry: 0.48, scale: 0.86 },
  { t: 0.5, x: 2.15, y: 0.6, z: 0, rx: -0.03, ry: -0.25, scale: 1.08 },
  { t: 0.75, x: 2.95, y: 1.1, z: 0, rx: 0.04, ry: 0.58, scale: 0.84 },
  { t: 1, x: 2.4, y: 0.75, z: 0, rx: 0, ry: 0.1, scale: 0.94 },
];

function mix(progress: number): Pose {
  const t = Math.min(Math.max(progress, 0), 1);
  let index = 0;
  while (index < poses.length - 2 && poses[index + 1].t < t) index += 1;
  const from = poses[index];
  const to = poses[index + 1];
  const span = to.t - from.t || 1;
  const amount = (t - from.t) / span;
  const lerp = (start: number, end: number) => start + (end - start) * amount;
  return {
    x: lerp(from.x, to.x),
    y: lerp(from.y, to.y),
    z: lerp(from.z, to.z),
    rx: lerp(from.rx, to.rx),
    ry: lerp(from.ry, to.ry),
    scale: lerp(from.scale, to.scale),
  };
}

const screenRight = new Vector3();
const screenUp = new Vector3();

function Desktop() {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const group = useRef<Group>(null);
  const scroll = useRef(0);
  const mouse = useRef(0);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouse.current = ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 0.28;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const rig = group.current;
    if (!rig) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const target = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    scroll.current += (target - scroll.current) * 0.08;
    const pose = mix(scroll.current);

    screenRight.setFromMatrixColumn(state.camera.matrixWorld, 0);
    screenUp.setFromMatrixColumn(state.camera.matrixWorld, 1);
    const nextX = screenRight.x * pose.x + screenUp.x * pose.y;
    const nextY = screenRight.y * pose.x + screenUp.y * pose.y;
    const nextZ = screenRight.z * pose.x + screenUp.z * pose.y;

    rig.position.x += (nextX - rig.position.x) * 0.14;
    rig.position.y += (nextY - rig.position.y) * 0.14;
    rig.position.z += (nextZ - rig.position.z) * 0.14;
    rig.rotation.x += (pose.rx - rig.rotation.x) * 0.14;
    rig.rotation.y += (pose.ry + mouse.current - rig.rotation.y) * 0.14;
    rig.scale.x += (pose.scale - rig.scale.x) * 0.14;
    rig.scale.y = rig.scale.x;
    rig.scale.z = rig.scale.x;
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.62} position={[0, -2.35, -1]} rotation={[-0.01, -0.2, -0.05]} />
    </group>
  );
}

function FitCanvas() {
  const gl = useThree((state) => state.gl);
  const setSize = useThree((state) => state.setSize);

  useEffect(() => {
    const element = gl.domElement.parentElement;
    if (!element) return;

    const apply = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width < 2 || height < 2) return;
      setSize(width, height, true);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(element);
    return () => observer.disconnect();
  }, [gl, setSize]);

  return null;
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [22, 2.4, 6.2], fov: 32 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <FitCanvas />
      <hemisphereLight intensity={0.55} groundColor="#1a1028" />
      <spotLight position={[-20, 50, 10]} angle={0.18} penumbra={1} intensity={2.2} />
      <directionalLight position={[6, 8, 8]} intensity={1.8} />
      <pointLight position={[4, 3, 6]} intensity={6} color="#c4b5fd" />
      <Desktop />
    </Canvas>
  );
}
