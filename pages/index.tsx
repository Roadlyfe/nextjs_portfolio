import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    // check back here for scroll behavior control 
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Adam's Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      {/* work experience is commented out for obvious reasons */}
      {/* <section id='experience' className='snap-center'>
      <WorkExperience />
    </section> */}

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start' >
        <Projects />
      </section>
      {/*  Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src="https://ak.picdn.net/shutterstock/videos/1072900160/thumb/1.jpg?ip=x480"
              alt="A photo of me"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
