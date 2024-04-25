'use client'

import { Suspense } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

export default function Demo({}) {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh position={new THREE.Vector3(0, -2.2, 0)}>
            <boxGeometry args={[1.5, 3, 1.5]}></boxGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#303030'}></meshPhongMaterial>
          </mesh>
          <mesh>
            <boxGeometry args={[4, 1.5, 1.5]}></boxGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#303030'}></meshPhongMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common />
    </View>
  )
}
