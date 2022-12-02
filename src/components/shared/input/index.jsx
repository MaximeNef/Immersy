const Input = ({ data, setData, type, placeholder }) => {
  const renderInput = () => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={data}
        onChange={(e) => {
          setData(e.currentTarget.value)
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
