import Container from '../../shared/container'
import Flex from '../../shared/flex'

const Popup = (props) => {
  const links = props.links
  return (
    <Flex
      direction="col"
      className="justify-center pl-16 space-y-16 pt-40 mx-auto"
    >
      {links.map((link, index) => {
        return (
          <p
            key={index}
            className="text-left text-3xl font-extralight tracking-widest"
          >
            {link.page}
          </p>
        )
      })}
    </Flex>
  )
}

export default Popup
