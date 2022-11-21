import React from 'react'
import { motion } from 'framer-motion'



type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
        {/* I hid the word about until I can figure out how to hide it in mobile view */}
        {/* <h3 className='absolute top-24 mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>About
        </h3> */}
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
        //come back here to adjust about picture. 
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB08]/50 '>little</span> background
                </h4>
                <p className='text-base'>
                    Doggo ipsum much ruin diet the neighborhood pupper long doggo yapper sub woofer yapper, fat boi blep thicc. Dat tungg tho long doggo bork length boy, puggorino. You are doin me a concern blep long water shoob such treat, blop big ol pupper. Super chub waggy wags dat tungg tho you are doing me a frighten borkf tungg thicc fluffer, porgo what a nice floof heckin good boys and girls doggo borkdrive. Borking doggo you are doin me a concern floofs ur givin me a spook such treat dat tungg tho, adorable doggo wrinkler long doggo. 
</p>
        </div>
    </motion.div>
  )
}

export default About