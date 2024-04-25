'use client'

import { Suspense, useMemo, useRef } from 'react'
import { View, Common } from '../helpers'
import * as THREE from 'three'

export default function Demo({}) {
  const geometry = useRef()
  const shape = useMemo(() => {
    const arcShape = new THREE.Shape()
    arcShape.absarc(0, 0, 1, 0, Math.PI * 2, false)

    var holePath = new THREE.Path()
    holePath.absarc(0, 0, 0.2, 0, Math.PI * 2, true)
    arcShape.holes.push(holePath)
    return arcShape
  }, [])

  return (
    <View orbit className='relative h-full sm:w-full'>
      <Suspense>
        <group>
          <mesh>
            <extrudeGeometry
              ref={geometry}
              args={[
                shape,
                {
                  steps: 1,
                  bevelEnabled: false,
                  curveSegments: 8,
                },
              ]}
            ></extrudeGeometry>
          </mesh>
          <mesh>
            <torusGeometry args={[8, 7.5, 16, 100]}></torusGeometry>
            <meshPhongMaterial side={THREE.DoubleSide} color={'#808080'}></meshPhongMaterial>
          </mesh>
        </group>
      </Suspense>
      <Common />
    </View>
  )
}
