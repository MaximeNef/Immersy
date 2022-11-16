const Flex = (props) => {
  return (
    <div
      className={`flex-1 flex flex-${props.direction} items-${props.align} justify-${props.content} ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default Flex
