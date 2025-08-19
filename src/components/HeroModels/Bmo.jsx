import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Bmo(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/bmo.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // Verifica si hay animaciones
  console.log('Animaciones disponibles:', animations)
  console.log('Acciones detectadas:', actions)

  React.useEffect(() => {
    if (actions) {
      const firstAction = Object.values(actions)[0]
      firstAction?.reset().play()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, -10, -20]} rotation={[Math.PI / 2, 0, 0.6]} scale={0.4}>
          <group name="fbx_mergefbx" rotation={[-Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BMO-Root" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_7" />
                    <group name="BMO-Model" rotation={[-Math.PI / 2, 0, 0]} />
                    <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} skeleton={nodes.Object_8.skeleton} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['BMO-Faces']} skeleton={nodes.Object_9.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/bmo.glb')
