import { useRoot } from '@/app/store/root.context'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import * as THREE from 'three/src/Three'
import React, { FC, useEffect } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

declare global {
  export type GLTFResult = GLTF & {
    nodes: {
      T_Shirt_male: THREE.Mesh
    }
    materials: {
      ['lambert1']: THREE.MeshStandardMaterial
    }
  }
}
type ShirtProps = {
  [key: string]: unknown
}

const Shirt: FC<ShirtProps> = (props) => {
  const { selectedColor, selectedImage } = useRoot()
  const texture = useTexture(selectedImage)
  const { nodes, materials } = useGLTF('/shirty.glb') as GLTFResult

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, selectedColor, 0.4, delta)
  })
  console.log('🚀 ~ file: shirt.component.tsx:10 ~ materials:', materials)
  console.log('🚀 ~ file: shirt.component.tsx:10 ~ nodes:', nodes)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        dispose={null}
        {...props}
      >
        <Decal position={[0, 0.04, 0.15]} scale={0.25} map={texture} />
      </mesh>
    </group>
  )
}

export default Shirt
