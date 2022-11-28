import React from 'react'
import Lottie from 'react-lottie'
import burgerMenu from '../../../../public/assets/burgermenu.json'

const Burger = ({ onClick, pause }) => {
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
    <div onClick={onClick} className="my-auto mr-3 z-[99]">
      <Lottie
        options={defaultOptions}
        height={50}
        width={50}
        isPaused={pause}
      />
    </div>
  )
}
export default Burger
