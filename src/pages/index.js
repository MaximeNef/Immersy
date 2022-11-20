import Head from 'next/head'
import Avantages from '../components/homepage/avantages'
import Hero from '../components/homepage/hero'
import PourVous from '../components/homepage/pourVous'
import Tarif from '../components/homepage/tarif'
import Realisation from '../components/homepage/realisation'
import Navbar from '../components/navbar'
import AvantageItems from '../components/shared/AvantageItems'
import Btn1 from '../components/shared/btn1'
import Information from '../components/shared/information'
import PricingCards from '../components/shared/pricingCard'
import Title from '../components/shared/title'
import BottomSection from '../components/homepage/bottomSection'
import Burger from '../components/navbar/burger'

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
  const [pause, setPause] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    if (pause) {
      setIsOpen((isOpen) => !isOpen)
      setTimeout(() => {
        setPause((pause) => !pause)
      }, 520)
      setPause((pause) => !pause)
    }
  }
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
      <Burger pause={pause} onClick={handleClick} />

      <Realisation />
      <Tarif />
      <BottomSection />
    </Navbar>
  )
}
