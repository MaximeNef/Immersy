import Container from '../../shared/container'
import MyImage from '../../shared/myimage'
import VideoPlayer from '../../shared/video'

const Hero = () => {
  return (
    <Container className="w-full h-screen  mb-[-120px] md:mb-0">
      <MyImage
        src="/assets/home_picture_desktop.png"
        layout="fill"
        className={'object-cover'}
      />
      {/* <div className="hidden md:inline-flex w-full h-full ">
        <VideoPlayer video="video/VideoBarbiereV2.mp4" />
      </div> */}
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
