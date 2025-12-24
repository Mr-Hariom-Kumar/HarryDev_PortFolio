import React from 'react'
import sky from '../assets/sky.jpg'
import mountain3 from '../assets/mountain-3.png'
import planet from '../assets/planets.png'
import mountain2 from '../assets/mountain-2.png'
import mountain1 from '../assets/mountain-1.png'
import { useScroll,motion,useTransform,useSpring } from 'motion/react'
const Parallax = () => {
    const {scrollYProgress} =useScroll()
    const x=useSpring(scrollYProgress,{damping:50})
    const mountain3Y=useTransform(x,[0,0.5],["0%","70%"]);
    const planetX=useTransform(x,[0,0.5],["0%","-20%"]);
    const mountain2Y=useTransform(x,[0,0.5],["0%","30%"])
    const mountain1Y=useTransform(x,[0,0.5],["0%","0%"])

  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative overflow-y-hidden h-screen'>
        {/* bg */}
        <div className='absolute inset-0 w-full h-screen -z-50'
        style={{
            backgroundImage:`url(${sky})`,
            backgroundPosition:"bottom",
            backgroundSize:'cover'
        }}
        />
        {/* mnt3 */}
        <motion.div className='absolute inset-0 -z-40'
        style={{
            backgroundImage:`url(${mountain3})`,
            backgroundPosition:"bottom",
            backgroundSize:'cover',
            y:mountain3Y,
        }}
        />

        {/* plnt */}
       <motion.div className='absolute inset-0 -z-40'
        style={{
            backgroundImage:`url(${planet})`,
            backgroundPosition:"bottom",
            backgroundSize:'cover',
            x:planetX,
        }}
        />
        {/* mnt2 */}
        <motion.div 
        className='absolute inset-0 -z-40'
        style={{
            backgroundImage:`url(${mountain2})`,
            backgroundPosition:"bottom",
            backgroundSize:'cover',
            Y:mountain2Y,
        }}
        />
        {/* mnt1 */}
        <motion.div
         className='absolute inset-0 -z-40'
        style={{
            backgroundImage:`url(${mountain1})`,
            backgroundPosition:"bottom",
            backgroundSize:'cover',
            y:mountain1Y,
        }}
        />
      </div>
    </section>
  )
}

export default Parallax
