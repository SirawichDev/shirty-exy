import { useRoot } from '@/app/store/root.context'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { FC } from 'react'
type ShirtProps = {
  [key: string]: unknown
}
const Shirt: FC<ShirtProps> = (props) => {
  const { selectedColor, selectedImage } = useRoot()
  const texture = useTexture(selectedImage)
  // eslint-disable-next-line no-undef
  const { nodes, materials } = useGLTF('/shirty.glb') as unknown as GLTFResult

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, selectedColor, 0.4, delta)
  })
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
