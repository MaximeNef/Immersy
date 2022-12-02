import { useState } from 'react'
import BtnStatut from '../../../shared/btnStatut'
import Input from '../../../shared/input'
import Title from '../../../shared/title'

const TarifForm = () => {
  const [selected, setSelected] = useState('')

  const handleClick = (value) => {
    setSelected(value.text)
  }

  return (
    <div className="mx-5 mt-12">
      <div className="mb-5">
        <Title mainTitle="Je suis un ..." />
      </div>
      <div className="space-y-[16px]">
        <BtnStatut
          text="Particulier"
          handleClick={handleClick}
          selected={selected}
        />
        <BtnStatut
          text="Professionel"
          handleClick={handleClick}
          selected={selected}
        />
      </div>
      <div className="text-lg">{selected}</div>
      <form method="post" /*onSubmit={handleSubmit} */>
        <div className="mb-10">
          <Title mainTitle="Nombres de biens ..." />
        </div>

        <Input placeholder={'test'} type="input" />
      </form>
    </div>
  )
}

export default TarifForm
