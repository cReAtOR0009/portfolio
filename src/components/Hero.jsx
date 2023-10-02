import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import {illustration, illustration1, illustration2} from '../assets'
const Hero = () => {
  return (
    <section className='relative w-full mx-auto' >
      <div className='flex flex-col justify-between'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40  violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff] decoration-[underline]'>Creator</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          a skilled and experienced Graphics designer and web developer,<br className='sm:block hidden' />
          with a passion for creating innovative and dynamic websites and web Applications

          </p>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40  violet-gradient'/>
        </div>
      </div>
      <div className=" md:block mt-[364px] flex flex-col justify-center items-center m-auto">
    {/* <ComputersCanvas /> */} 
    <img src={illustration1} alt="creator" />
   </div>
   
      </div>
     
  
   <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href="#about">
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className="h-0 w-0 border-x-8 border-x-transparent border-t-[30px] border-t-violet-600"
          />
        </div>
      </a>
   </div>
    </section>
  )
}

export default Hero