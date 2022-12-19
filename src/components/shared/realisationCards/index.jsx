import Link from 'next/link'
import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'

const RealisationCards = () => {
  return (
    <Container className="space-y-[50px] md:flex  md:flex-row md:space-y-0 md:justify-start">
      {/* card 1  */}{' '}
      <Container
        className={
          ' shadow-2xl rounded-[10px] h-[225px] md:h-[350px] relative  z-30 md:w-1/2 md:mr-10 md:transform md:transition md:duration-500 md:hover:scale-110 '
        }
      >
        {' '}
        <Link href="https://my.matterport.com/show/?m=RrWoNKkGKL7">
          <a>
            <MyImage
              src="/assets/immersyVr.png"
              layout={'fill'}
              objectFit="cover"
              className=" rounded-[10px] z-[-10]  "
            />{' '}
            <Flex
              className={
                'flex-col justify-center z-10 bg-gradient-to-b from-black/0 to-[#1A2341] rounded-[10px]   h-[225px] md:h-[350px]'
              }
            >
              <MyImage
                src="/assets/Play.svg"
                w={50}
                h={50}
                className="mx-auto "
              />
              <p className="text-white	 text-center text-[20px] font-bold 	">
                Théophile & Patachou
              </p>
            </Flex>{' '}
          </a>{' '}
        </Link>
      </Container>{' '}
      {/* card 2 */}
      <Container
        className={
          ' md:w-1/2 md:ml-10  bg-gradient-to-b from-white to-[#1A2341]   shadow-2xl rounded-[10px] h-[225px] md:h-[350px] z-10 relative md:transform md:transition md:duration-500 md:hover:scale-110'
        }
      >
        {' '}
        <Link href="/tarifs/contact">
          <a>
            <MyImage
              src="/assets/immersyVr.png"
              layout={'fill'}
              className=" rounded-[10px] "
            />
            <div className="rounded-[10px] h-[225px] blur-sm w-full z-20 absolute  bg-gradient-to-b from-black/0 to-[#1A2341] md:h-[350px]" />
            <Flex
              className={'flex-col justify-center  h-[225px]  md:h-[350px]'}
            >
              <MyImage
                src="/assets/Play.svg"
                w={50}
                h={50}
                className="mx-auto z-30"
              />
              <p className="text-white	 text-center text-[20px] font-bold z-[20]	">
                votre projet{' '}
              </p>
            </Flex>{' '}
          </a>{' '}
        </Link>
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
