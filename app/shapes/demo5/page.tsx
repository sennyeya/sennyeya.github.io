'use client'

import { Suspense } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

export default function Demo({}) {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh position={new THREE.Vector3(undefined, -6)}>
            <sphereGeometry args={[9, 32, 32]}></sphereGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} flatShading color={'#ffffff'}></meshPhongMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(undefined, 6)}>
            <sphereGeometry args={[4, 32, 32]}></sphereGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} flatShading color={'#ffffff'}></meshPhongMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common />
    </View>
  )
}
