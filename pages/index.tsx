import Head from 'next/head'  
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam's Portfolio</title>
      </Head>
        <h1>Let build an awesome portfolio</h1>
    </div>
  )
}
