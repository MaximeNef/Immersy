import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '../../shared/container'
import Flex from '../../shared/flex'
import MyImage from '../../shared/myimage'
import Burger from '../burger'
import Popup from '../popup'

const Header = (props) => {
  const [pause, setPause] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    if (pause) {
      setIsOpen((isOpen) => !isOpen)
      setTimeout(() => {
        setPause((pause) => !pause)
      }, 500)
      setPause((pause) => !pause)
    }
  }

  const variants = {
    open: {
      left: 0,
    },
    closed: {
      left: '-100vw',
    },
  }

  return (
    <>
      <Container className="z-40">
        <Flex content="between" className="">
          <MyImage src={'/assets/immersyicon.svg'} w={60} h={60} />
          <Burger pause={pause} onClick={handleClick} />
        </Flex>
      </Container>

      <motion.div
        initial={false}
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className="min-h-full fixed w-full bg-blue-300"
        transition={{
          duration: 0.5,
        }}
      >
        <Popup links={props.links} />
      </motion.div>
    </>
  )
}
export default Header
