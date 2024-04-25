'use client'

import { forwardRef, HTMLAttributes, PropsWithChildren, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import * as THREE from 'three'

export const Common = ({ color }: { color?: string }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <PerspectiveCamera makeDefault fov={50} position={[0, 3, 15]} near={1} far={1000}>
      <pointLight position={[0, 3, 10]} intensity={3} decay={0} />
      <pointLight position={[-10, -10, -10]} color='blue' decay={0} />
    </PerspectiveCamera>
  </Suspense>
)

const View = forwardRef<HTMLDivElement, PropsWithChildren<{ orbit?: boolean } & HTMLAttributes<HTMLDivElement>>>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef(null)
    useImperativeHandle(ref, () => localRef.current)

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    )
  },
)
View.displayName = 'View'

export { View }
