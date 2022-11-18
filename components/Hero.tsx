import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';


type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Adam Smith.",
            "I-love-taking-photos-and-spending-time-outdoors.tsx",
            "<ButILoveToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/313404003_10226027043076466_3466041015093952994_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KzY5Ukvf6ikAX89PUgA&_nc_ht=scontent-sjc3-1.xx&oh=00_AfA7PBIkC07TocmW6bOabuOS7k6V9vkdmZRBurTuJXHCNw&oe=637B3AFC" alt='a picute of me from facebook' />
            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer
                    </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
            </div>
        </div>
    )
}

export default Hero