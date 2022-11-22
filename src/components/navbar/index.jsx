import { useState } from 'react'
import Container from '../shared/container'
import Footer from './footer'
import Header from './header'

const Navbar = ({ children, current }) => {
  const [links, setLinks] = useState([
    {
      page: 'Accueil',
      href: '/',
    },
    {
      page: 'Nos services',
      href: '/services',
    },
    {
      page: 'Nos réalisations',
      href: '/realisations',
    },
    {
      page: 'Tarifs',
      href: '/tarifs',
    },
    {
      page: 'Contacts',
      href: '/contacts',
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
