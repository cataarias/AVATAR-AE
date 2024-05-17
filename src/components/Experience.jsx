import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { OfficeScene } from "./officeScene";


export const Experience = () => {

  const avatarRotation = [0, Math.PI / 2, 0];

  

  return (
    <>
      <OrbitControls />
      <Avatar position={[4, -1.5, 0]} scale={1.1} rotation={avatarRotation}/>
      <Environment preset="sunset" /> 
      <OfficeScene />
      
    </>
  );
};
