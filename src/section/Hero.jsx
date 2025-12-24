import React from 'react'
import HeroText from '../components/HeroText'
import Parallax from '../components/Parallax'
import { Bird } from '../components/Bird.jsx'
import { Canvas } from '@react-three/fiber'
import { Batman } from '../components/Batman.jsx'
import { OrbitControls } from '@react-three/drei'
import { Astronout } from '../components/Astronout.jsx'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const isMobile=useMediaQuery({maxWidth:853})
  return (
    <section className='flex items-start  md:items-start justify-center
     md:justify-start min-h-screen overflow-hidden c-space
     '>
      <HeroText/>
      <Parallax/>
      <figure className='absolute inset-0' style={{width:"100vw",height:"100vh"}}>
        <Canvas camera={{position:[0,1,3]}}>
          {/* <Batman/> */}
          <Astronout scale={isMobile && 0.23} position={ isMobile && [0,-1.5,0]} />
          <OrbitControls/>
        </Canvas>
      </figure>
    </section>
  )
}

export default Hero
