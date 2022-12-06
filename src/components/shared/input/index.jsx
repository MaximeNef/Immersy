const Input = ({ data, setData, type, placeholder, name }) => {
  console.log(data, 'data')
  const renderInput = () => {
    return (
      <input
        name={name}
        placeholder={placeholder}
        value={data}
        onChange={(e) => {
          const { name, value } = e.target

          setData((prevData) => ({
            ...prevData,
            [name]: value,
          }))
        }}
      />
    )
  }

  const renderTextArea = () => {
    return (
      <textarea
        placeholder={placeholder}
        value={data}
        onChange={(e) => {
          setData(e.currentTarget.value)
        }}
      ></textarea>
    )
  }

  return <>{type === 'input' ? renderInput() : renderTextArea()}</>
}

export default Input
