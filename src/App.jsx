import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { Loader } from "@react-three/drei";


function App() {
  return (
    <>
      <Loader />
      <Leva hidden/>
      <Canvas shadows camera={{ position: [7, 0, 0], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
