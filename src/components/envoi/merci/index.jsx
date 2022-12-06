import Btn1 from '../../shared/btn1'
import Title from '../../shared/title'

const Merci = () => {
  return (
    <div className=" text-center top-[50%] left-[50%] my-[min(11vh)]">
      <p className="text-5xl">Merci</p>
      <p className="text-5xl">🤝</p>
      <div className="mx-auto mt-5 w-[80%] mb-[50px]">
        <Title mainTitle="Votre demande va être traîtée dans les 24h" />
      </div>

      <Btn1 link="/" text="Revenir à l’accueil" colorBg="blue" />
    </div>
  )
}

export default Merci
