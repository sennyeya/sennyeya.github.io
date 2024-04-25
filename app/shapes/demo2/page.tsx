'use client'

import { Suspense } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

export default function Demo({}) {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh position={new THREE.Vector3(0, 0.7, 0)}>
            <boxGeometry args={[0.3, 1.5, 1]}></boxGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#484848'}></meshPhongMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(0, -0.7, 0)}>
            <boxGeometry args={[0.3, 1.5, 1]}></boxGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#484848'}></meshPhongMaterial>
          </mesh>
          <mesh>
            <boxGeometry args={[3, 0.3, 1]}></boxGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#484848'}></meshPhongMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common />
    </View>
  )
}
