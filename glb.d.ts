import * as THREE from 'three/src/Three'
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