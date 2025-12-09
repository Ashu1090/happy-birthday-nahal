import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

type SceneProps = {
  /** increments when the Gift button is clicked */
  giftTrigger: number
}

export function ThreeFlowerScene({ giftTrigger }: SceneProps) {
  return (
    <div className="hero-3d-canvas w-100 h-100">
      <Canvas camera={{ position: [0, 0.7, 3], fov: 45 }}>
        <color attach="background" args={['#1b1230']} />
        <fog attach="fog" args={['#1b1230', 4, 12]} />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.7}
          color="#ffd6ff"
        />
        <spotLight
          position={[-3, 5, -1]}
          intensity={1.3}
          angle={0.7}
          color="#8be9fd"
          penumbra={0.7}
        />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <circleGeometry args={[3.2, 64]} />
          <meshStandardMaterial
            color="#28163f"
            metalness={0.4}
            roughness={0.7}
          />
        </mesh>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

