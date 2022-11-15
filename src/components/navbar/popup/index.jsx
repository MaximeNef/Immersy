import Container from '../../shared/container'
import Flex from '../../shared/flex'

const Popup = (props) => {
  const links = props.links
  return (
    <Flex direction="col" className="justify-center space-y-16 pt-40">
      {links.map((link, index) => {
        return (
          <p key={index} className="text-center">
            {link.page}
          </p>
        )
      })}
    </Flex>
  )
}

export default Popup
