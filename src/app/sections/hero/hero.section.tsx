import Camera from '@/app/components/camera.component'
import Picker from '@/app/components/hero/picker.component'
import Intro from '@/app/components/hero/intro.component'
import { HOME_MODE } from '@/app/constant'
import { useRoot } from '@/app/store/root.context'
import { State } from '@/app/store/root.reducer'
import React from 'react'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Center, Environment, OrbitControls, Stage } from '@react-three/drei'
import Shirt from '@/app/components/shirt.component'
import ShirtBackdrop from '@/app/components/backdrop.component'

const HeroSection = () => {
  const { mode } = useRoot()
  const position: Vector3 = [-1, 0, 2.5]

  const fov = 25
  return (
    <section className="w-full h-full relative">
      <main className="relative h-full">
        {mode === HOME_MODE ? <Intro /> : <Picker />}
        <div className={'absolute w-full h-full'}>
          <Canvas shadows camera={{ position, fov }} eventPrefix="client">
            <ambientLight intensity={0.4} />
            <Environment preset={'apartment'} />
            <Camera>
              <Center>
                <Shirt />
                <ShirtBackdrop />
              </Center>
            </Camera>
            <OrbitControls />
          </Canvas>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
