import Container from '../../shared/container'
import Flex from '../../shared/flex'

const Popup = (props) => {
  const links = props.links
  return (
    <Flex className="bg-white justify-center flex-col pl-16 space-y-16 mx-aut h-[100vh]">
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
