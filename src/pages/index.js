import Head from 'next/head'
import Avantages from '../components/homepage/avantages'
import Hero from '../components/homepage/hero'
import PourVous from '../components/homepage/pourVous'
import Tarif from '../components/homepage/tarif'
import Realisation from '../components/homepage/realisation'
import Navbar from '../components/navbar'
import BottomSection from '../components/homepage/bottomSection'
import VideoPlayer from '../components/shared/video'

export default function Home() {
  return (
    <Navbar>
      <Head>
        <title>Immersy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <PourVous />
      <Avantages />

      <Realisation />
      <Tarif />
      <BottomSection />
    </Navbar>
  )
}
