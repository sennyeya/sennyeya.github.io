'use client'

import { Suspense } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

new THREE.Mesh()

const coneGeometry = new THREE.CylinderGeometry(0.5 / 2, 5 / 2, 6, 16)
const coneMaterials = [
  new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0x808080 }),
  new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0 }),
  new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0x808080 }),
]

export default function Demo() {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh>
            <sphereGeometry args={[4.2 / 2, 16, 8]}></sphereGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#ffffff'}></meshPhongMaterial>
          </mesh>
          <mesh position={[0, 7 / 2, 0]} geometry={coneGeometry} material={coneMaterials}></mesh>
        </group>
      </Suspense>
      <Common position={[3, 3, 15]} />
    </View>
  )
}
