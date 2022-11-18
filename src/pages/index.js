import Head from 'next/head'
import Avantages from '../components/homepage/avantages'
import Hero from '../components/homepage/hero'
import PourVous from '../components/homepage/pourVous'
import Tarif from '../components/homepage/tarif'
import Navbar from '../components/navbar'
import AvantageItems from '../components/shared/AvantageItems'
import Btn1 from '../components/shared/btn1'
import Information from '../components/shared/information'
import PricingCards from '../components/shared/pricingCard'
import Title from '../components/shared/title'

export default function Home() {
  // const informations = [
  //   {
  //     text: 'Visite virtuelle en 3D',
  //   },
  //   {
  //     text: 'Visite virtuelle en 3D',
  //   },
  //   {
  //     text: 'Visite virtuelle en 3D',
  //   },
  //   {
  //     text: 'Visite virtuelle en 3D',
  //   },
  // ]

  return (
    <Navbar>
      <Head>
        <title>Immersy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Navbar>
  )
}
