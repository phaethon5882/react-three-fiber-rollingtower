import React, { useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Box(props) {
  const mesh = useRef()

  const [active, setActive] = useState(false)

  let direction = 0.01
  useFrame(() => {
    if (mesh.current.position.x > 1) {
      direction = -0.01
    } else if (mesh.current.position.x < -1) {
      direction = 0.01
    }
    if (props.move) {
      mesh.current.rotation.y = mesh.current.rotation.y += 0.01
      mesh.current.position.x = mesh.current.position.x + direction
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={props.scale || [2, 0.5, 2]}
      onClick={(e) => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} metalness={0.2} />
    </mesh>
  )
}

export default Box
