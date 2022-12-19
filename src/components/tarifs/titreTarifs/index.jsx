const TitreTarifs = ({ surfaceInfo }) => {
  return (
    <div className="mt-7 mx-5">
      <h2 className={`text-xl`}>Demande de tarif</h2>
      <h2 className={`text-xl font-thin`}>
        pour une{' '}
        <strong>
          <i>{surfaceInfo.title}</i>
        </strong>{' '}
        {surfaceInfo.subTitle}M&#178;
      </h2>
    </div>
  )
}

export default TitreTarifs
