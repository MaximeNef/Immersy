import Container from '../../shared/container'
import MyImage from '../../shared/myimage'

const Hero = () => {
  return (
    <Container className="w-full h-screen  mb-[-120px] md:mb-0">
      <div className="">
        <MyImage
          src="/assets/home_picture_desktop.png"
          layout="fill"
          className={'object-cover absolute z-[-10] '}
        />
        <div className="bg-[#1A2341]/[23%] w-full h-full absolute " />
      </div>
      <div className="text-center mt-[38vh] sm:my-auto z-20 leading-none">
        <p className="font-SFNSRounded text-[60px] sm:text-[120px]   text-white">
          IMMERSY
        </p>
        <p className="text-[20px] sm:text-[36px] font-light  text-white">
          DONNEZ VIE À VOS ESPACES
        </p>
      </div>
      <div id="clip" className="w-full h-28 absolute bottom-0" />
      <div
        className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2
 animate-bounce"
      >
        <MyImage src="/assets/arrowDown.svg" w="25" h="25" />
      </div>
    </Container>
  )
}
export default Hero
