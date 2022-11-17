import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Adam Smith.",
            "I-love-taking-photos-and-being-in-nature.tsx",
            "<ButILoveToCodeMore />",
        ], 
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
        <h1>
        <span>{text}</span>
        <Cursor  cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}

export default Hero