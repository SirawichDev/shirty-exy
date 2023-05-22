/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

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
