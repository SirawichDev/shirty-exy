import { useGLTF } from '@react-three/drei'
import React, { FC } from 'react'

type ShirtProps = {
  [key: string]: unknown
}

const Shirt: FC<ShirtProps> = (props) => {
  const { nodes, materials } = useGLTF('/shirty.glb') as GLTFResult
  console.log('🚀 ~ file: shirt.component.tsx:10 ~ materials:', materials)
  console.log('🚀 ~ file: shirt.component.tsx:10 ~ nodes:', nodes)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      ></mesh>
    </group>
  )
}

export default Shirt
