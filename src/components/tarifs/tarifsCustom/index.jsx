import PricingCards from '../../shared/pricingCard'
import DemandeTarifs from '../../shared/pricingCard/demandeTarifs'
import Title from '../../shared/title'

const TarifsCustom = () => {
  return (
    <div className="mx-5">
      <div className="mt-32">
        <Title mainTitle="Nos tarifs" subTitle="un avantage sur-mesure" />
      </div>
      <div className="mt-12">
        <h2 className="text-xl">Tarifs par superficie</h2>
      </div>
      <div className="mt-12">
        <PricingCards />
      </div>
    </div>
  )
}

export default TarifsCustom
