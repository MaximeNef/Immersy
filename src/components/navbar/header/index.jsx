import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Container from '../../shared/container'
import Flex from '../../shared/flex'
import MyImage from '../../shared/myimage'
import Burger from '../burger'
import Popup from '../popup'

const Header = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const variants = {
    open: {
      top: 0,
    },
    closed: {
      top: '-100vh',
    },
  }

  return (
    <>
      <Container className="z-[99] fixed backdrop-blur bg-white bg-opacity-40 bg-clip-padding py-1">
        <Flex className="justify-between mt-[0px] ml-[40px]">
          <Container className="my-auto">
            <Link href="/">
              <MyImage src={'/assets/immersyicon.svg'} w={40} h={40} />
            </Link>
          </Container>
          <Burger handleClick={handleClick} />
        </Flex>
      </Container>

      <motion.div
        initial={false}
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className="min-h-screen fixed w-full z-[98]"
        transition={{
          duration: 0.5,
        }}
      >
        <Popup links={links} />
      </motion.div>
    </>
  )
}
export default Header
