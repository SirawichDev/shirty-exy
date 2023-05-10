'use client'
import Image from 'next/image'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import { Inter } from 'next/font/google'
import Shirt from './components/shirt.component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const position: Vector3 = [-1, 0, 2.5]
  const fov = 25
  return (
    <main className="h-[100vh]">
      <span className="text-black">Test</span>
      <Canvas camera={{ position, fov }} eventPrefix="client">
        <Center>
          <Shirt />
        </Center>
        <OrbitControls />
      </Canvas>
    </main>
  )
}
