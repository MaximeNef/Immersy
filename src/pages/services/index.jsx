import Head from 'next/head'
import Navbar from '../../components/navbar'
import AvantagesList from '../../components/services/AvantagesList'
import Base from '../../components/services/base'
import Besoins from '../../components/services/besoins'
import Partage from '../../components/services/partage'
import PetitsPlus from '../../components/services/petitsPlus'
import Projet from '../../components/shared/projet'

const Services = () => {
  return (
    <Navbar current={'services'}>
      <Head>
        <title>Immersy - Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Besoins />
      <Base />
      <Partage />
      <PetitsPlus />
      <AvantagesList />
      <Projet blue={true} />
    </Navbar>
  )
}

export default Services
