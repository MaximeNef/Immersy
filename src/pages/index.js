import Head from 'next/head'
import Navbar from '../components/navbar'
import Title from '../components/shared/title'

export default function Home() {
  return (
    <Navbar>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title color="text-black" mainTitle="mainTitle" subTitle="subTitle" />
    </Navbar>
  )
}
