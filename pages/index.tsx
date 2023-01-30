import type { GetStaticProps} from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
     // check back here for scroll behavior control 
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Adam&apos;s Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
    <section id='experience' className='snap-center'>
      <WorkExperience />
    </section>
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
      <footer className='sticky bottom-1 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          {/* <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/30072846_10214156273634649_6995639784459986368_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=A-kV7kUVqsoAX_vLMOP&tn=LndM5tPVKDfZJ3-n&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBTDNi_Rv0lQE4tDmhRMbLz11CquCmxdedCKmq5qyrHDg&oe=639F805E" 
          alt="A photo of me" 
          /> */}
          </div>
      </footer>
      </Link>
    </div>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial(); 

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    }, 
    // Next.js will attempt to re-generate the poage: 
    // - When  arequest comes in
    // - At most every 10 seconds
    revalidate: 10,
  };
}; 