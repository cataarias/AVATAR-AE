import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [7, 0, 0], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />

    </Canvas>
  );
}

export default App;
