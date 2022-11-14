import Lottie from 'lottie-web'
import Container from '../../container'
import burgerMenu from '../../../../../public/lotties/burgermenu.json'
import { useState } from 'react'

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
        isPaused={props.pause}
        IsPlaying={props.play}
      />
    </Container>
  )
}

export default Burger
