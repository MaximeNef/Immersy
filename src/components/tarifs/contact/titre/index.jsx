const TitreTarifs = ({ surface }) => {
  const renderSubtitle = () => {
    let subtitle
    if (surface == null) {
      subtitle = (
        <h2 className={`text-xl font-thin`}>
          pour une{' '}
          <strong>
            <i>Surface standard</i>
          </strong>{' '}
          inférieure à 150 M&#178;
        </h2>
      )
    }
    if (surface == 'moyenne') {
      subtitle = (
        <h2 className={`text-xl font-thin`}>
          pour une{' '}
          <strong>
            <i>Surface moyenne</i>
          </strong>{' '}
          entre 150 et 300 M&#178;
        </h2>
      )
    }
    if (surface == 'grande') {
      subtitle = (
        <h2 className={`text-xl font-thin`}>
          pour une{' '}
          <strong>
            <i>Surface grande</i>
          </strong>{' '}
          supérieure à 300 M&#178;
        </h2>
      )
    }
    return subtitle
  }

  return (
    <div className="mt-24 mx-5">
      <h2 className={`text-xl`}>Demande de tarif</h2>
      {renderSubtitle()}
    </div>
  )
}

export default TitreTarifs
