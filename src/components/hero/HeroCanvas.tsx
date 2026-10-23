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

const sections = ["home", "about", "skills", "projects", "experience", "architecture", "education", "contact"] as const;

const poses: Pose[] = [
  { x: 4.75, y: -0.15, z: 0, rx: 0.02, ry: -0.1, scale: 1 },
  { x: 5.25, y: 0.2, z: 0, rx: 0.08, ry: 0.48, scale: 1 },
  { x: 5.2, y: -0.35, z: 0, rx: -0.06, ry: -0.52, scale: 1 },
  { x: 5.3, y: 0.25, z: 0, rx: 0.04, ry: 0.62, scale: 1 },
  { x: 5.05, y: -0.2, z: 0, rx: 0.1, ry: -0.28, scale: 1 },
  { x: 5.2, y: 0.1, z: 0, rx: -0.04, ry: 0.36, scale: 1 },
  { x: 5.15, y: -0.3, z: 0, rx: 0.06, ry: -0.46, scale: 1 },
  { x: 4.9, y: -0.15, z: 0, rx: 0.02, ry: 0.08, scale: 1 },
];

const marks = poses.map((_, index) => index / (poses.length - 1));

function updateMarks() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return;
  sections.forEach((id, index) => {
    const element = document.getElementById(id);
    const top = element ? element.getBoundingClientRect().top + window.scrollY : 0;
    marks[index] = Math.min(Math.max(top / maxScroll, 0), 1);
  });
  for (let index = 1; index < marks.length; index += 1) {
    if (marks[index] < marks[index - 1]) marks[index] = marks[index - 1];
  }
}

function mix(progress: number): Pose {
  const t = Math.min(Math.max(progress, 0), 1);
  let index = 0;
  while (index < marks.length - 2 && marks[index + 1] <= t) index += 1;
  const span = marks[index + 1] - marks[index] || 1;
  const amount = Math.min(Math.max((t - marks[index]) / span, 0), 1);
  const from = poses[index];
  const to = poses[index + 1];
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
const screenDepth = new Vector3();

function Desktop() {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const group = useRef<Group>(null);
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
    updateMarks();
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    const pose = mix(progress);

    screenRight.setFromMatrixColumn(state.camera.matrixWorld, 0);
    screenUp.setFromMatrixColumn(state.camera.matrixWorld, 1);
    const depth = screenDepth.crossVectors(screenRight, screenUp);
    rig.position.set(
      screenRight.x * pose.x + screenUp.x * pose.y + depth.x * pose.z,
      screenRight.y * pose.x + screenUp.y * pose.y + depth.y * pose.z,
      screenRight.z * pose.x + screenUp.z * pose.y + depth.z * pose.z,
    );
    rig.rotation.x = pose.rx;
    rig.rotation.y = pose.ry + mouse.current;
    rig.scale.set(pose.scale, pose.scale, pose.scale);
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.58} position={[0, -1.02, -0.48]} rotation={[-0.02, -0.16, -0.03]} />
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
      camera={{ position: [18, 2.15, 5.1], fov: 30 }}
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
