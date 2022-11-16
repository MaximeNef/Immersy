const Flex = (props) => {
  return (
    <div className={`flex-1 flex flex-row ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Flex
