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
          <div className='text-4xl text-slate-100'>Galerij</div>
          <div className='md:w-[49rem] w-72 flex flex-col md:flex-row h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/jm-pf.JPG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>All seeing eyes</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/4989.JPEG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Thaise kokosnoot</div>
            </div>
          </div>
          <div className='md:w-[49rem] w-72 flex  flex-col md:flex-row h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/5009.JPEG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>We are hot!</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/15082.JPEG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Vorkieeee</div>
            </div>
          </div>
          <div className='md:w-[49rem] flex w-72 flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/30321.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Knappe gezichtjes</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/20210130_124420.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Baby JM</div>
            </div>
          </div>
          <div className='md:w-[49rem] flex w-72 flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/20210130_131644.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Deug je wel of deug je niet</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/1000001728.JPEG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Sleepy time</div>
            </div>
          </div>
          <div className='md:w-[49rem] flex w-72 flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/1000006484.JPEG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Uitwaaien</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0003.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Sjeezen naar de jägertee</div>
            </div>
          </div>
          <div className='md:w-[49rem] flex w-72 flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0005.JPG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Kopje onder</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0006.JPG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Schuiner!</div>
            </div>
          </div>
          <div className='md:w-[49rem] w-72 flex flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0007.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Hockey doe je met een?</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0009.JPG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Daddy Cool</div>
            </div>
          </div>
          <div className='md:w-[49rem] w-72 flex flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0010.JPG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Verkeerd geknipt sorry oeps</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_0012.png")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Jonge koppies</div>
            </div>
          </div>
          <div className='md:w-[49rem] w-72 flex flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_3954.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Pluk de dag</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_5521.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>ART</div>
            </div>
          </div>
          <div className='md:w-[49rem] w-72 flex flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_6125.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Met de wind in de haren</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/IMG_6138.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Furry friend</div>
            </div>
          </div>
          <div className='md:w-[49rem] w-72 flex flex-col md:flex-row  h-auto space-x-2'>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/papscheren.jpg")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Hmmm, ja.</div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center space-y-1'>
              <div className='w-full h-96 bg-cover bg-center bg-[url("/galerij/PICT0046.JPG")] rounded-lg'></div>
              <div className='md:text-xl text-lg text-slate-50'>Hugs</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}