import { useState } from 'react'

const Input = ({
  data,
  setData,
  elementType,
  placeholder,
  name,
  required,
  inputType,
  inputError,
}) => {
  const [showInputError, setShowInputError] = useState(false)

  const renderInput = () => {
    return (
      <div>
        <input
          name={name}
          placeholder={placeholder}
          value={data}
          required={required}
          type={inputType}
          className="peer"
          onChange={(e) => {
            const { name, value } = e.target
            setData((prevData) => ({
              ...prevData,
              [name]: value,
            }))
          }}
          onBlur={() => {
            setShowInputError(true)
          }}
        />
        <p
          className={`hidden text-red-700 text-xs font-light my-0 ${
            showInputError ? 'peer-invalid:block' : ''
          }`}
        >
          {inputError}
        </p>
      </div>
    )
  }

  const renderTextArea = () => {
    return (
      <textarea
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
      ></textarea>
    )
  }

  return <>{elementType === 'input' ? renderInput() : renderTextArea()}</>
}

export default Input
