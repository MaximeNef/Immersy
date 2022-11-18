import Link from 'next/link'
import Container from '../container'
import MyImage from '../myimage'

const RealisationCards = () => {
  return (
    <Container className="space-y-6">
      <Container className="bg-white relative h-[225px] w-[350px] mx-auto">
        <Link href="/">
          <MyImage src="/assets/visite.svg" layout="fill" className="h-fit" />
        </Link>
      </Container>
      <Container className="bg-white relative h-[225px] w-[350px] mx-auto">
        <Link href="/">
          <MyImage src="/assets/visite2.svg" layout="fill" className="h-fit" />
        </Link>
      </Container>
    </Container>
  )
}

export default RealisationCards
