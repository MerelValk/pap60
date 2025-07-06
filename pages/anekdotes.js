import Head from 'next/head'
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
        <div className='flex flex-col w-screen justify-center items-center space-y-4 md:space-y-10 md:space-x-4 '>
          <div className='text-4xl text-slate-100'>Anekdotes</div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Ding dong, tijd voor kattenkwaad</div>
            <div className='text-xl text-slate-50 text-center'>60 jaar geleden begon jouw verhaal. Als klein jochie al een echte belhamel. Geen streek was spannend genoeg en de grens werd altijd opgezocht. Intelligent, scherpzinnig, en onbevreesd; je groeide op tot een speciale jongen. Één van jouw meest memorabele streken was natuurlijk de keer dat je besloot om de stationsklok van Enschede te beklimmen. Het was geweldig, het was spannend, het was onvergetelijk; je was in extase. Maar zonder bewijs zou het natuurlijk niet gebeurd zijn, dus bedacht jij om de klok ook even wat te verzetten. Al die arme reizigers die hierdoor hun trein mistte, maar wat een lol heb je hiervan gehad.</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Zeilende Valkjes</div>
            <div className='text-xl text-slate-50 text-center'>Gelukkig vond je later andere uitlaatkleppen voor deze avontuurlijke energie. Één van deze hobbies was zeilen. Op de Rubicon of met jouw eigen kleinere bootje heb je er het fijne van geleerd. Toen wij op de wereld kwamen, kon je niet wachten om de wateren te laten zien, wat resulteerde in baby's aan boord. Op de Rubicon hebben we van jou de liefde voor het zeilen meegekregen. Het gevoel van de snelheid en de wind in de haren is wat wij voor altijd zullen koesteren. Een belangrijke les die je ons altijd meegeeft: niet bang zijn voor schuin gaan!</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Bergen verzetten</div>
            <div className='text-xl text-slate-50 text-center'>Naast zeilen, heb je van jongs af aan ook geskied. Dit ging niet zonder slag of stoot. Een ski op je kop en je been gebroken.. Je weet als geen ander hoe je de grens opzoekt. Maar toch is dit ook iets wat je ons als kleine meisjes al hebt aangeleerd. Als kleine mormels tussen jouw benen heb je ons laten zien hoe hard je wel niet van de berg af kunt sjezen. Later gingen we in een treintje achter elkaar van de berg af en konden we je uiteindelijk zelf bijhouden. Wanneer gaan we weer?</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Na zonneschijn komt regen</div>
            <div className='text-xl text-slate-50 text-center'>Ook moesten natuurlijk de minder leuke dingen in het leven gebeuren, en ook hierbij heb je ons bijgestaan. Uren en uren hebben wij aan de keukentafel besteed aan huiswerk. Van topografie tot die leuke redactiesommen. Je hebt ons geholpen om de “complexe” vraagstukken te begrijpen en beantwoorden. Want wat hadden wij soms moeite met de lastige vragen en wat was het lastig om geduld te hebben en het keer na keer uit te leggen. Maar het is je gelukt, we hebben het gehaald!</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Rituelen om te delen</div>
            <div className='text-xl text-slate-50 text-center'>Op zoek naar stimulans voor de hersenen heb je vanaf onze jonge jaren een aantal rituelen geïntroduceerd. Zo hadden we meerdere avondrituelen die we uit moesten voeren, anders konden we simpelweg niet slapen! Het begon met het lezen van verhalen. Dan gingen we gezellig samen op bed zitten (met de grote beer) en las jij ons voor. Toen we oud genoeg waren lazen we zelf een stukjes. Geweldig, want zo konden wij op jonge leeftijd al de leukste boeken lezen. Onze absolute favoriet was de 365 Kabouterverhaaltjes. Dankzij deze simpele, maar geweldige gewoonte, zijn wij opgegroeid als echte boekenwurmen en was ons niveau bijna niet te evenaren. </div>
            <div className='text-xl text-slate-50 text-center'>Naarmate we wat ouder werden, kwam er nog een ander ritueeltje bij. Boven ons bed hingen reusachtige kaarten. Merel kreeg een prachtige kaart van het zonnestelsel en Nadine een gedetailleerde wereldkaart. En wat deden wij hiermee? We gingen planeten en landen aanwijzen. Voor het slapen gaan kregen we een “overhoring”. Waar ligt … ? Maar oh zo leuk vonden wij dit. Hierdoor weten wij nog steeds het riedeltje: Zon, Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus, Pluto! Wat overigens nu is ontwikkeld tot Merel haar befaamde partytrick</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Overleven in het weekend</div>
            <div className='text-xl text-slate-50 text-center'>We hadden ook onze weekend rituelen. Minimaal 1 keer in het weekend gingen wij op de fiets naar de Zwoer. Urenlang hebben we lekker lopen dobberen in het water, geoefend met duiken, en wedstrijdjes gezwommen. Hierna genoten we van een heerlijk ijsje voordat we naar huis gingen. Af en toe wat ondergoed vergeten, maar dat kon de pret niet drukken.</div>
            <div className='text-xl text-slate-50 text-center'>En op zondag was het tijd voor...: Papa Kippetjes! Heerlijk smulden we ervan. Soms proberen wij ze nog eens na te maken, maar ze zijn nooit zo lekker als hoe jij ze maakt!</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Hup Shinty!</div>
            <div className='text-xl text-slate-50 text-center'>Onze weekendrituelen moesten flexibel blijven, want voor hockey wijkt natuurlijk alles. Hockey is altijd een groot deel van ons leven geweest. Elke week trainen en een wedstrijd kostte toch wel wat tijd. Maar ondanks dat, was en ben jij er wel altijd bij. Je hebt wel meer gedaan dan alleen maar aanmoedigen langs de lijn. Talloze jaren ben je onze coach geweest en heb je ons geholpen om het hoogst haalbare niveau te halen. Met Merel heb je zelfs de topklasse gehaald!</div>
            <div className='text-xl text-slate-50 text-center'>Zelfs nu we je het wat lastiger hebben gemaakt door bij twee verschillende clubs te spelen, ben je er toch elke thuiswedstrijd bij. En het lukt je zelfs af en toe eens om mama mee te nemen. Vergis je niet, wij hebben jouw aanwezigheid langs de lijn echt wel door. Dit geeft ons altijd extra energie om door te vechten.</div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>De wijde wereld in</div>
            <div className='text-xl text-slate-50 text-center'>Op vakantie hebben wij de mooiste herinneringen gemaakt. Natuurlijk waren de grote reizen naar Amerika en Thailand onvergetelijk, maar ook het kamperen brengt dierbare herinneringen naar boven. Met een propvolle auto op weg naar het zuiden. Wij lekker filmpjes kijken, mam in de passagiersstoel de weg wijzen en jij achter het stuur. Elk jaar weer gingen wij naar onze favoriete campings toe.</div>
            <div className='text-xl text-slate-50 text-center'>Op de camping konden we natuurlijk heerlijk relaxen aan het zwembad en spelletjes spelen bij de tent. Maar we konden ook sportief bezig zijn. Het zou geen kampeervakantie geweest zijn zonder dat we gekanood hadden. Toen Nadien nog te klein was om in de kano te zitten, gingen jij en Meer samen lekker hard door de stroomversnellingen heen. Later konden we gezellig met z’n drietjes gaan (want no way dat mama in die kano ging zitten).</div>
            <div className='text-xl text-slate-50 text-center'>Een andere leuke bezigheid tijdens het kamperen is natuurlijk het zwemmen in rivieren en beekjes, en daarbij hoort… het springen van rotsen!! Dit ging niet altijd van een leien dakje. Onder veel aanmoediging en af en toe een zetje in de rug, gingen we dan eindelijk. En gelukkig was het na die eerste keer niet zo eng meer!</div>
            <div className='text-xl text-slate-50 text-center'>Maar tijdens het kamperen ging jij ook wel een beetje gekke dingen doen. Zoals die onvergetelijke keer dat je “even ging douchen”. Zonder dat wij iets in de gaten hadden, was dat de allerlaatste keer dat wij jou met een bos (oftewel een paar plukjes) haar zagen. Want “even later” kwam je weer terug… helemaal kaal! Urenlang stond je in je douchehokje, en wij maar afvragen wat je aan het doen was. Natuurlijk vond jij het een goed idee om tijdens de vakantie al je haar af te scheren. Voor jou was er geen betere tijd om dit te doen! Gelukkig was het geen slechte keuze, die kale kop staat je super goed! </div>
          </div>
          <div className='w-full md:w-[48rem] md:p-8 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg space-y-2'>
            <div className='text-2xl text-slate-50'>Een rots in de branding</div>
            <div className='text-xl text-slate-50 text-center'>Dit zijn natuurlijk slechts een selectief aantal herinneringen die wij van jou hebben, want wat hebben wij toch veel uitgespookt met z'n allen. Skeeleren met een gat in het hoofd, mountainbiken door de bossen, piano spelen, en elke ochtend voor school Freddi Fish (of the Lion King, Midnight Club II, en Lego Star Wars) spelen. En tot op de dag van vandaag heeft dat allemaal een dikke stempel op ons leven gedrukt, op de meest positieve manier. We zijn sportief, muzikaal, en zeker niet dom (behalve Merel die misschien een hersencel of 2 mist). Je hebt ons veel bijgebracht en geïnspireerd. Lieve pap, je bent onze rots in de branding, en hopelijk weet je hierdoor dat wij al deze dingen nooit zijn en zullen vergeten. Wij zullen deze herinneringen voor altijd koesteren.</div>
          </div>
        </div>
      </main>
    </div>
  )
}