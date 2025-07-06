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
        <div className='flex flex-col w-screen justify-center items-center space-y-4 md:space-y-0 md:space-x-4 '>
          <div className='text-4xl text-slate-100'>Quotes</div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-r-2xl rounded-tl-2xl md:max-w-[49rem] max-w-56'>"Ik ga nu even hardlopen."</div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-l-2xl rounded-tr-2xl md:max-w-[49rem] max-w-56 text-right'>"Nou, dan doe je het toch lekker zelf."</div>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-r-2xl rounded-tl-2xl md:max-w-[49rem] max-w-56'>"Je bent zelf een ..."</div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-l-2xl rounded-tr-2xl md:max-w-[49rem] max-w-56 text-right'>"Hmmm, ja."</div>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-r-2xl rounded-tl-2xl md:max-w-[49rem] max-w-56'>"Cool!"</div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-l-2xl rounded-tr-2xl md:max-w-[49rem] max-w-56 text-right'>"Welterusten!"</div>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-r-2xl rounded-tl-2xl md:max-w-[49rem] max-w-56'>"Lieverd" / "Liefie"</div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-l-2xl rounded-tr-2xl md:max-w-[49rem] max-w-56 text-right'>"Prima"</div>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
          </div>
          <div className='md:w-96 w-72 border bg-slate-400'></div>
          <div className='w-full p-20 flex justify-center items-end space-x-4'>
            <div className='md:size-16 size-12 rounded-full bg-cover bg-center bg-[url("/jm-pf.JPG")]'></div>
            <div className='md:text-xl text-lg text-slate-50 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-r-2xl rounded-tl-2xl md:max-w-[49rem] max-w-56'>"Klaar om te wenden? Ree!"</div>
          </div>
        </div>
      </main>
    </div>
  )
}