import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-500">
      <Head>
        <title>Jan Maarten 60 jaar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center space-y-4 py-8'>
        <Link href='/' className='bg-slate-200 rounded-lg cursor-pointer py-1 px-2 shadow-md hover:shadow-none hover:bg-slate-300'>Terug</Link>
        <div className='flex flex-col w-screen justify-center items-center space-y-4'>
          <div className='text-4xl text-slate-100'>Valk Vakantie Boornzwaag</div>
          <div>
            <video width="360" height="640" controls preload="none" src='/boornzwaag/ValkVakantieBoornzwaag.mp4'></video>
          </div>
        </div>
      </main>
    </div>
  )
}