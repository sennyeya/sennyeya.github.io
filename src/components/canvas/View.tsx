'use client'

import {
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  Suspense,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { useThree, Vector3 } from '@react-three/fiber'
import { SpotLight } from 'three'

const spotlight = new SpotLight()

export const Common = ({ position }: { position?: Vector3 }) => {
  const state = useThree()
  state.gl.useLegacyLights = true
  const cameraPosition = position ?? [0, 3, 15]
  return (
    <Suspense fallback={null}>
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={cameraPosition}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={1000}
      >
        <pointLight color={0xffffff} intensity={1} decay={0} power={400} />
      </PerspectiveCamera>
    </Suspense>
  )
}

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
            <ambientLight color={0xffffff} intensity={0.2} />
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    )
  },
)
View.displayName = 'View'

export { View }
