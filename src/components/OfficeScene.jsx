/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/textures/officeAE.glb -o src/components/OfficeScene.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OfficeScene(props) {
  const { nodes, materials } = useGLTF('/textures/officeAE.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.305}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={720}>
            <mesh geometry={nodes.Window_Backdrop_0.geometry} material={materials.Backdrop} />
            <mesh geometry={nodes.Window_Carpet_0.geometry} material={materials.Carpet} />
            <mesh geometry={nodes.Window_Lights_0.geometry} material={materials.Lights} />
            <mesh geometry={nodes.Window_Painting_0.geometry} material={materials.Painting} />
            <mesh geometry={nodes.Window_Plant_0.geometry} material={materials.Plant} />
            <mesh geometry={nodes.Window_Structure_0.geometry} material={materials.Structure} />
            <mesh geometry={nodes.Window_Window_0.geometry} material={materials.Window} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/textures/officeAE.glb')
