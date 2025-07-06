import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-500'>
      <Head>
        <title>Jan Maarten 60 jaar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center md:space-y-4 space-y-6 py-8'>
        <div className='flex flex-col md:flex-row w-screen justify-center items-center space-y-4 md:space-y-0 md:space-x-4 '>
          <div className='md:size-96 size-72 rounded-lg bg-cover bg-center bg-[url("/jm-pf.JPG")] md:hover:scale-105 md:hover:-rotate-3 duration-300 flex items-end p-8 text-4xl font-bold text-emerald-50 shadow-md'>
            Jan Maarten 60!
          </div>
          <div className='md:size-96 size-72 flex flex-col space-y-4'>
            <div className='md:w-96 h-1/2 w-72 rounded-lg md:hover:scale-105 md:hover:rotate-3 duration-300 cursor-pointer shadow-md p-8 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 text-xl '>
              <Link href="/vriendenboekje" className='h-full flex flex-col justify-between'>
                <div>
                  Vriendenboekje
                </div>
                <div className='self-end bg-cover bg-[url("/right-arrow.svg")] size-12'></div>
              </Link>
            </div>
            <div className='md:w-96 h-1/2 w-72 rounded-lg md:hover:scale-105 md:hover:rotate-3 duration-300 cursor-pointer shadow-md p-8 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 text-xl'>
              <Link href="/anekdotes" className='h-full flex flex-col justify-between'>
                <div>
                  Anekdotes
                </div> 
                <div className='self-end bg-cover bg-[url("/right-arrow.svg")] size-12'></div>
              </Link>  
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-screen justify-center items-center space-y-4 md:space-y-0 md:space-x-4 '>
          <div className='md:w-96 w-72 h-auto flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'>
            <div className='md:w-1/2 w-full h-36 md:h-48 rounded-lg md:hover:scale-105 md:hover:rotate-3 duration-300 cursor-pointer shadow-md p-8 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 text-xl flex flex-col justify-between'>
              <Link href="/galerij" className='h-full flex flex-col justify-between'>
                <div>
                  Galerij
                </div>
                <div className='self-end bg-cover bg-[url("/right-arrow.svg")] size-12'></div>
              </Link>
            </div>
            <div className='md:w-1/2 w-full h-36 md:h-48 rounded-lg md:hover:scale-105 md:hover:rotate-3 duration-300 cursor-pointer shadow-md p-8 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 text-xl flex flex-col justify-between'>
              <Link href="/boornzwaag" className='h-full flex flex-col justify-between'>
                <div>
                  Boornzwaag
                </div>
                <div className='self-end bg-cover bg-[url("/right-arrow.svg")] size-12'></div>
              </Link>
            </div>
          </div>
          <div className='md:w-96 w-72 h-36 md:h-48 rounded-lg md:hover:scale-105 md:hover:rotate-3 duration-300 cursor-pointer shadow-md p-8 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 text-xl flex flex-col justify-between'>
            <Link href="/quotes" className='h-full flex flex-col justify-between'>
              <div>
                Quotes
              </div>
              <div className='self-end bg-cover bg-[url("/right-arrow.svg")] size-12'></div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
