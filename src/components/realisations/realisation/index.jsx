import Container from '../../shared/container'
import ProjetCards from '../projetCard'
import Title from '../../shared/title'

const Realisation = () => {
  const realisations = [
    {
      title: 'Théophile & Patachou',
      description:
        'La grande marque Belge pour bébé a souhaité numériser son espace pour apporter une expérience 100% immersive à ses utilisateurs.',
      src: '/assets/theophile.png',
      btnText: 'Découvrir la visite',
      href: 'https://my.matterport.com/show/?m=RrWoNKkGKL7',
    },
    {
      title: 'Votre Projet',
      description:
        'Chaque visite est réalisée selon vos besoins. Que vous soyez une agence immobilière, un hôtel, un gîte, des assurance ou une entreprise souhaitant se digitaliser.',
      src: 'assets/votre_projet.png',
      btnText: 'Demander un devis',
      href: '/tarifs/contact',
    },
  ]
  return (
    <Container className={'md:px-40'}>
      <div className={'mt-32 mx-5 mb-10 '}>
        <Title
          mainTitle={'Votre réalisation'}
          subTitle={'ce que nous faisons de mieux'}
        />
      </div>{' '}
      <div className="lg:flex lg:flex-row ">
        {realisations.map((item, i) => {
          return <ProjetCards key={i} item={item} />
        })}{' '}
      </div>
    </Container>
  )
}

export default Realisation
