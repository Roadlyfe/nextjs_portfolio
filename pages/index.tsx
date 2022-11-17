import type { NextPage } from 'next'
import Head from 'next/head'  
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam's Portfolio</title>
      </Head>
       
        <Header />
       {/* Hero */}
      <section id="hero">
      <Hero />
      </section>
       {/* About */}

       {/* Experience */}

       {/* Skills */}

       {/* Projects */}

       {/*  Contact Me */}

    </div>
  )
}
