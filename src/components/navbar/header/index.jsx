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
      }, 520)
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
      <Container className="z-40 sticky backdrop-blur bg-white bg-opacity-40 bg-clip-padding">
        <Flex className="justify-between mt-1 ml-[40px]">
          <Container className="my-auto">
            <MyImage src={'/assets/immersyicon.svg'} w={55} h={55} />
          </Container>
          <Burger pause={pause} onClick={handleClick} />
        </Flex>
      </Container>

      <motion.div
        initial={false}
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className="min-h-full fixed w-full "
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
