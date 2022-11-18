import { useState } from 'react'
import Container from '../shared/container'
import Footer from './footer'
import Header from './header'

const Navbar = ({ children }) => {
  const [links, setLinks] = useState([
    {
      page: 'Accueil',
    },
    {
      page: 'Nos services',
    },
    {
      page: 'Nos réalisations',
    },
    {
      page: 'Tarifs',
    },
    {
      page: 'Contacts',
    },
  ])
  return (
    <Container>
      <Header links={links} />
      {children}
      <Footer />
    </Container>
  )
}
export default Navbar
