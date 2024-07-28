'use client'

import { DoubleSide } from 'three'
import { View, Common } from '../helpers'
import { Suspense } from 'react'

export default function Demo({}) {
  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh>
            <dodecahedronGeometry args={[2, 0]}></dodecahedronGeometry>
            <meshPhongMaterial color={'#f0f0f0'} side={DoubleSide}></meshPhongMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common position={[0, 3, 10]} />
    </View>
  )
}
