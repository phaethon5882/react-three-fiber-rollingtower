import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { Html, OrbitControls } from '@react-three/drei'
import Box from './components/geometry/Box'
import { stackNewBox } from './utils/meshUtils'
import { CAMERA_PROPS } from './consts/frustum'

export default function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <Canvas
      onClick={() => stackNewBox(boxes, setBoxes)}
      camera={CAMERA_PROPS}
      onCreated={({ gl }) => gl.setClearColor('lightpink')}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[150, 150, 150]} intensity={0.55} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {boxes.map((props, idx) => (
        <Box key={idx} {...props} />
      ))}
      <Box position={[0, -3.5, 0]} scale={[3, 0.5, 3]} color='hotpink' />
      <Html scaleFactor={15} className='main'>
        <div className='content'>{`점수: ${boxes.length}`}</div>
      </Html>
      <OrbitControls />
    </Canvas>
  )
}
