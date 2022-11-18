import React from 'react'
import { motion } from 'framer-motion'



type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-14 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
        </h3>
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}  
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/30072846_10214156273634649_6995639784459986368_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=A-kV7kUVqsoAX_vLMOP&tn=LndM5tPVKDfZJ3-n&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBTDNi_Rv0lQE4tDmhRMbLz11CquCmxdedCKmq5qyrHDg&oe=639F805E'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover'
        />
    </div>
  )
}

export default About