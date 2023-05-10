'use client'
import Image from 'next/image'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import Shirt from '@/app/components/shirt.component'
import ShirtBackdrop from '@/app/components/backdrop.component'
import Camera from './components/camera.component'

export default function Home() {
  const position: Vector3 = [-1, 0, 2.5]
  const fov = 25
  return (
    <main className="h-[100vh]">
      <span className="text-black absolute">Test</span>
      <Canvas shadows camera={{ position, fov }} eventPrefix="client">
        <ambientLight intensity={0.2} />
        <Environment preset="sunset" />
        <Camera>
          <Center>
            <Shirt />
            <ShirtBackdrop />
          </Center>
        </Camera>
        <OrbitControls />
      </Canvas>
    </main>
  )
}
