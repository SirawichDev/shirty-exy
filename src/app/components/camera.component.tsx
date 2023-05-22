import { RootState, useFrame } from '@react-three/fiber'
import React, { FC, MutableRefObject, Ref, useRef } from 'react'
import { easing } from 'maath'
import { Euler, Group } from 'three'

type CameraProps = {
  children: React.ReactNode
}
const Camera: FC<CameraProps> = ({ children }) => {
  const camRef = useRef<Group | null>(null)

  useFrame((state: RootState, delta: number) => {
    // console.log('🚀 ~ file: camera.component.tsx:11 ~ useFrame ~ state:', state)
    easing.dampE(
      (camRef as any).current?.rotation, // what we want to control,
      [state.pointer.y / 6, -state.pointer.x / 6, 0], // mouse position (x, y, z);
      0.3, // smooth time response
      delta // frame render
    )
  })
  return <group ref={camRef}>{children}</group>
}

export default Camera
