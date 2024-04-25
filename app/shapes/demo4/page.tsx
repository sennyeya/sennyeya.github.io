'use client'

import { Suspense } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

export default function Demo() {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh>
            <sphereGeometry args={[4.2 / 2, 16, 8]}></sphereGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#ffffff'}></meshPhongMaterial>
          </mesh>
          <mesh>
            <cylinderGeometry args={[0.5 / 2, 5 / 2, 6, 16]}></cylinderGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#808080'}></meshPhongMaterial>
            <meshBasicMaterial color={'#ffffff'} side={THREE.DoubleSide} transparent opacity={0}></meshBasicMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common />
    </View>
  )
}
