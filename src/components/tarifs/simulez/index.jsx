import { useState } from 'react'
import Title from '../../shared/title'

const Simulez = () => {
  const [prix, setPrix] = useState('')
  const [meter, setMeter] = useState('')

  const handleChange = (e) => {
    let value = e.target.value

    setMeter(value)
    let number = parseInt(value)

    switch (true) {
      case number < 150:
        let standardPrice = (value * 1.99).toFixed(2)
        setPrix(standardPrice)
        break

      case number >= 150 && number <= 300:
        let difference = number - 150
        let priceDiscount = 0.3 / 150
        let meanPrice = (number * (1.99 - difference * priceDiscount)).toFixed(
          2
        )
        setPrix(meanPrice)
        break

      case number > 300:
        let customPrice = (value * 1.69).toFixed(2)
        setPrix(customPrice)
        break

      default:
        setPrix(value)
        break
    }
  }
  return (
    <div className="mt-12 mx-5">
      <Title mainTitle="Simulez votre tarif" subTitle="prix indicatif" />
      <div className="text-center w-full mt-12 mb-6">
        <Title mainTitle={`Tarif estimé : ${prix} €`} />
      </div>
      <input
        value={meter}
        onChange={handleChange}
        type="tel"
        placeholder="Nombre de m&#178;"
      />
    </div>
  )
}

export default Simulez
