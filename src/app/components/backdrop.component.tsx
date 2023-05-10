import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React from 'react'

const ShirtBackdrop = () => {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]} // -> rotate to into background coner
      position={[0, 0, -0.14]}
      alphaTest={0.85}
    >
      <RandomizedLight
        ambient={0.25}
        amount={4}
        radius={9} // make shadow more smoother
        intensity={0.55}
        position={[1, 5, -10]}
      />
    </AccumulativeShadows>
  )
}

export default ShirtBackdrop
