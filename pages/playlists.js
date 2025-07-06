import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jan Maarten 60 jaar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center space-y-4'>
        <div className='flex flex-col md:flex-row w-screen justify-center items-center space-y-4 md:space-y-0 md:space-x-4 '>
          Playlists
        </div>
      </main>
    </div>
  )
}