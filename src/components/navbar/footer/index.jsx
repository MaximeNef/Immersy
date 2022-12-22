import Link from 'next/link'
import Container from '../../shared/container'
import Flex from '../../shared/flex'
import MyImage from '../../shared/myimage'

const Footer = ({ current }) => {
  return (
    <div
      id={
        current == 'Nos services' || current == 'Tarifs'
          ? 'blue-footer'
          : 'footer'
      }
      className="pt-20 pb-10"
    >
      <Flex className=" text-white">
        <Container className="text-center flex flex-col items-left space-y-1 pl-5">
          <Link href="/" className=" text-sm text-left font-light">
            Accueil
          </Link>
          <Link href="/services" className=" text-sm text-left font-light">
            Nos services
          </Link>
          <Link href="/realisations" className=" text-sm text-left font-light">
            Nos réalisations
          </Link>
          <Link href="/tarifs" className=" text-sm text-left font-light">
            Nos tarifs
          </Link>
          <Link href="/contact" className=" text-sm text-left font-light">
            Contact
          </Link>
        </Container>
        <Container className=" ml-auto flex flex-col items-center min-w-[62px] max-w-[62px]">
          <Link href="/">
            <MyImage
              src={'/assets/immersyicon.svg'}
              w={62}
              h={74}
              className={'mx-auto'}
            />
          </Link>
          <Link
            href={'https://listri.digital/'}
            className="text-xs text-center w-[290px] mt-20 md:mt-10 mb-[-10px]"
          >
            2022 © listri | Designed with passion by Listri
          </Link>
        </Container>

        <Container className="space-y-4 flex flex-col mb-auto pl-8 min-[500px]:flex min-[500px]:flex-col min-[500px]:items-end min-[500px]:mr-5">
          <p className=" text-sm text-left font-light">IMMERSY</p>
          <p className=" text-sm text-left font-light">
            <a href="tel:0470/68.45.51">0470/68.45.51</a>
          </p>
          <div className="text-sm text-left font-light">
            <a href="mailto:Immersy.info@ gmail.com">
              {' '}
              {'Immersy.info@ gmail.com'}
            </a>
          </div>
        </Container>
      </Flex>
    </div>
  )
}
export default Footer
