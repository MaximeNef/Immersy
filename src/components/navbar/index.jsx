import { useState } from 'react'
import Container from '../shared/container'
import Footer from './footer'
import Header from './header'

const Navbar = ({ children, current }) => {
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
      <Footer current={current} />
    </Container>
  )
}
export default Navbar
