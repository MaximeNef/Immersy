import Link from 'next/link'
import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'

const RealisationCards = () => {
  return (
    <Container className="space-y-[50px]">
      <Container
        className={
          '  bg-gradient-to-b from-white to-[#1A2341]   shadow-2xl rounded-[10px] h-[225px] relative  z-30 '
        }
      >
        {' '}
        <MyImage
          src="/assets/immersyVr.png"
          layout={'fill'}
          className="z-[-30]  bg-gradient-to-b from-white to-[#1A2341] "
        />
        <Flex className={'flex-col justify-center z-10  '}>
          <MyImage src="/assets/Play.svg" w={50} h={50} className="mx-auto " />
          <p className="text-white	 text-center text-[20px] font-bold 	">
            Théophile & Patachou
          </p>
        </Flex>{' '}
      </Container>
      <Container
        className={
          '  bg-gradient-to-b from-white to-[#1A2341]   shadow-2xl rounded-[10px] h-[225px] z-10 relative '
        }
      >
        <div className="rounded-[10px] h-[225px] blur-sm w-full z-20 absolute  bg-gradient-to-b from-wh" />
        <Flex className={'flex-col justify-center   '}>
          <MyImage
            src="/assets/Play.svg"
            w={50}
            h={50}
            className="mx-auto z-30"
          />
          <p className="text-white	 text-center text-[20px] font-bold z-[20]	">
            vootre projet{' '}
          </p>
        </Flex>
      </Container>
    </Container>

    // <Container className="space-y-6 md:space-y-0 md:flex md:flex-row  ">
    //   <Container className="bg-white relative h-[225px] w-[350px] m-auto">
    //     <Link href="/">
    //       <MyImage src="/assets/visite.svg" layout="fill" className="h-fit" />
    //     </Link>
    //   </Container>
    //   <Container className="bg-white relative h-[225px] w-[350px] m-auto">
    //     <Link href="/">
    //       <MyImage src="/assets/visite2.svg" layout="fill" className="h-fit " />
    //     </Link>
    //   </Container>
    // </Container>
  )
}

export default RealisationCards
