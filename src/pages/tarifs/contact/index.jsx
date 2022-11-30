export const getServerSideProps = (context) => {
  console.log(context.query)
  console.log('context.query')
  return {
    props: {
      client: context.query.client == 'particulier' ? 'particulier' : null,
    },
  }
}

const TarifContact = ({ client }) => {
  return (
    <div>
      {client ? <h2>Some particulier content</h2> : <h2>Some pro content</h2>}
    </div>
  )
}

export default TarifContact
