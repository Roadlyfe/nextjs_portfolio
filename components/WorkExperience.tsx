import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
import experience from '../sanity/schemas/experience'

type Props = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-1 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}

      </div>
    </motion.div>
  )
}

export default WorkExperience

