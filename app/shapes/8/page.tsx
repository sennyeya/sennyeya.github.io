'use client'

import { Suspense } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

export default function Demo({}) {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh>
            <tetrahedronGeometry args={[2, 0]}></tetrahedronGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#696969'}></meshPhongMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common position={[0, 3, 5]} />
    </View>
  )
}
