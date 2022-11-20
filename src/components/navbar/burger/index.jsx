import React from 'react'
import Lottie from 'react-lottie'
import burgerMenu from '../../../../public/lotties/burgermenu.json'

const Burger = (props) => {
  const defaultOptions = {
    // name: 'menuBurger',
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div onClick={props.onClick} className="my-auto mr-3  z-[99]">
      <Lottie
        options={defaultOptions}
        height={50}
        width={50}
        isPaused={props.pause}
      />
    </div>
  )
}
export default Burger
