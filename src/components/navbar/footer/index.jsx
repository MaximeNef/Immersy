import Link from 'next/link'
import Container from '../../shared/container'
import Flex from '../../shared/flex'
import MyImage from '../../shared/myimage'

const Footer = ({ current }) => {
  return (
    <div
      id={`${current == 'services' || 'tarifs' ? 'blue-footer' : 'footer'}`}
      className="pt-20 pb-10"
    >
      <Flex className=" justify-center items-center text-white">
        <Container className="text-center flex flex-col items-left space-y-1 pl-5 ">
          <Link href="/" className=" text-sm text-left font-light">
            Accueil
          </Link>
          <Link href="/services" className=" text-sm text-left font-light">
            Nos services
          </Link>
          <Link href="/" className=" text-sm text-left font-light">
            Nos réalisations
          </Link>
          <Link href="/" className=" text-sm text-left font-light">
            Nos tarifs
          </Link>
          <Link href="/" className=" text-sm text-left font-light">
            Contact
          </Link>
        </Container>
        <Container className=" ml-auto flex flex-col items-center min-w-[62px] max-w-[62px]">
          <MyImage
            src={'/assets/immersyicon.svg'}
            w={62}
            h={74}
            className={'mx-auto'}
          />
        </Container>

        <Container className="space-y-4 flex flex-col items-left mb-auto pl-8">
          <p className=" text-sm text-left font-light">IMMERSY</p>
          <p className=" text-sm text-left font-light">0470/68.45.51</p>
          <div className="text-sm text-left font-light">
            {'Immersy.info@ gmail.com'}
          </div>
        </Container>
      </Flex>
    </div>
  )
}
export default Footer
