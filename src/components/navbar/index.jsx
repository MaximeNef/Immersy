import Container from '../shared/container'
import Header from './header'

const Navbar = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      {/* <Footer current={current} /> */}
    </Container>
  )
}
export default Navbar
