'use client'

import { View, Common } from '../helpers'
import * as THREE from 'three'
import { Suspense, useMemo, useRef } from 'react'

export default function Demo({}) {
  const mesh = useRef(null)
  const mat = useMemo(() => new THREE.MeshPhongMaterial({ color: '#484848', side: THREE.DoubleSide }), [])

  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense fallback={null}>
        <group ref={mesh}>
          <mesh position={new THREE.Vector3(2, 0, 0)} material={mat}>
            <boxGeometry args={[1.5, 8, 1.5]}></boxGeometry>
          </mesh>
          <mesh position={new THREE.Vector3(-2, 0, 0)} material={mat}>
            <boxGeometry args={[1.5, 8, 1.5]}></boxGeometry>
          </mesh>
          <mesh material={mat}>
            <boxGeometry args={[2.5, 1.5, 1.5]}></boxGeometry>
          </mesh>
        </group>
      </Suspense>
      <Common />
    </View>
  )
}
