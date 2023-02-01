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
import { Experience, PageInfo, Project, SkillType, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocial } from '../utils/fetchSocials';
// import { urlFor } from '../sanity';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: SkillType[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
     // check back here for scroll behavior control 
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id='about' className='snap-start'>
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
    <section id='experience' className='snap-start'>
      {/* <WorkExperience /> */}
      {/* Work experience section not being rendered */}
    </section>
      {/* Skills */}
    <section id='skills' className='snap-start'>
      <Skills skills={skills} />
    </section>
      {/* Projects */}
      <section id='projects' className='snap-start' >
    <Projects projects={projects} />
    </section>
      {/*  Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'>
      <footer className='sticky bottom-1 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img
            className='h-10 w-9 rounded-full filter grayscale hover:grayscale-0'
          src={urlFor(pageInfo.heroImage).url()}
          alt="a photo of me" 
          />
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
  const skills: SkillType[] = await fetchSkills();
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