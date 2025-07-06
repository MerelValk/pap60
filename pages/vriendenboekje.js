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

      <main className='flex flex-col justify-center items-center space-y-4 py-8'>
        <Link href='/' className='bg-slate-200 rounded-lg cursor-pointer py-1 px-2 shadow-md hover:shadow-none hover:bg-slate-300'>Terug</Link>
        <div className='flex flex-col md:flex-row w-screen justify-center items-center space-y-4 md:space-y-0 md:space-x-4 '>
          <div className='md:size-96 size-72 rounded-lg bg-cover bg-center bg-[url("/jm-pf.JPG")] flex items-end p-8 text-4xl font-bold text-emerald-50 shadow-md'>
          </div>
          <div className='md:size-96 h-96 w-72 flex flex-col rounded-lg shadow-md bg-slate-700 text-slate-50 md:text-xl text-lg justify-between p-8'>
            <div className='flex w-full'>
              <div className='w-1/2'>
                Naam:
              </div>
              <div className='w-1/2'>
                Jantje
              </div>
            </div>
            <div className='flex w-full'>
              <div className='w-1/2'>
                Geboortedag:
              </div>
              <div className='w-1/2'>
                08-07-1964
              </div>
            </div><div className='flex w-full'>
              <div className='w-1/2'>
                Lengte:
              </div>
              <div className='w-1/2'>
                Lang
              </div>
            </div><div className='flex w-full'>
              <div className='w-1/2'>
                Oogkleur:
              </div>
              <div className='w-1/2'>
                Bruin
              </div>
            </div><div className='flex w-full'>
              <div className='w-1/2'>
                Haarkleur:
              </div>
              <div className='w-1/2'>
                Grijs
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-700 md:w-[49rem] w-72 flex flex-col justify-between rounded-lg shadow-md text-slate-50 md:text-xl text-lg p-8 space-y-4'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Dit kan ik goed:
            </div>
            <div className='md:w-96 w-full'>
              Computeren
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Hier ben ik waardeloos in:
            </div>
            <div className='md:w-96 w-full'>
              Mijn haar doen
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Deze superkracht zou ik willen:
            </div>
            <div className='md:w-96 w-full'>
              Het weer manipuleren. (zodat je altijd de perfect wind hebt voor het zeilen)
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Mijn nutteloze talent:
            </div>
            <div className='md:w-96 w-full'>
              Elektrische lichtslingers maken
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Het beste wat mij is overkomen:
            </div>
            <div className='md:w-96 w-full'>
              Joyce, Merel & Nadine
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Mijn hobbies zijn:
            </div>
            <div className='md:w-96 w-full'>
              Skiën, zeilen, voetballen, hardlopen, gadgets maken
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Het spannendste wat ik heb gedaan:
            </div>
            <div className='md:w-96 w-full'>
              De stationsklok van Enschede beklommen
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Favoriete boek:
            </div>
            <div className='md:w-96 w-full'>
              Robinson Crusoë
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Lievelingsfilm:
            </div>
            <div className='md:w-96 w-full'>
              Star Wars
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Dit kan ik elke dag eten:
            </div>
            <div className='md:w-96 w-full'>
              Kip & zalm
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Van dit eten walg ik:
            </div>
            <div className='md:w-96 w-full'>
              Alles met tomaten
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Huisdier:
            </div>
            <div className='md:w-96 w-full'>
              Boes
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Beste vriend:
            </div>
            <div className='md:w-96 w-full'>
              Boes
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Welke acteur zou mij spelen in een biografie:
            </div>
            <div className='md:w-96 w-full'>
              Jason Statham x1,5 in de hoogte
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-96 w-full'>
              Mijn levensmotto:
            </div>
            <div className='md:w-96 w-full'>
              Alle dingen zijn moeilijk voordat ze gemakkelijk worden. 
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}