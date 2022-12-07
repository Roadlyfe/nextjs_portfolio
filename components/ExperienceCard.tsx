import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='h-screen flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/39141753_840240299514801_144373019257602048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=84a396&_nc_ohc=8qgcrg2Pd5gAX8wWTXl&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDlwmT5GTdL5LsqE8VF9NlTUJNPzBKPxC9ckPnJkYB_0Q&oe=63A34E2E" alt="a picture of me by a lake" />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Job Title</h4>
                <p className='font-bold text-2xl mt-1'>Company</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
                    {/* Tech Stack */}
                    {/* Tech Stack */}
                    {/* Tech Stack */}

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... - Ended</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary  points Summary  points Summary  points Summary  </li>
                    <li>Summary  points Summary  points Summary  points Summary  </li>
                    <li>Summary  points Summary  points Summary  points Summary  </li>
                    <li>Summary  points Summary  points Summary  points Summary  </li>
                    

                </ul>
            </div>
        </article>
    )
}

//  experience card may become a testimonials section until I get some Experience