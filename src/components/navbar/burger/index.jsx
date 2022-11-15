import Lottie from 'react-lottie'

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
    <Lottie
      options={defaultOptions}
      height={48}
      width={43}
      isPaused={props.pause}
      IsPlaying={props.play}
    />
  )
}
export default Burger
