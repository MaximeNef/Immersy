import Lottie from 'lottie-web'
import Container from '../../shared/container'
import burgerMenu from '../../../../public/lotties/burgermenu.json'

const Burger = (props) => {
  const defaultOptions = {
    name: 'menuBurger',
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={48}
        width={43}
        // isPaused={pause}
        // IsPlaying={play}
      />
    </Container>
  )
}

export default Burger
