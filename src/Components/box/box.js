export default function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
