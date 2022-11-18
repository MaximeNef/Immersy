import Container from '../../shared/container'
import MyImage from '../../shared/myimage'

const Hero = () => {
  return (
    <Container className="w-full h-screen">
      <MyImage src="/assets/home.png" layout="fill" />
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

// clip-path: polygon(100% 0, 0% 100%, 100% 100%);
