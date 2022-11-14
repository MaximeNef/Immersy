const Flex = (props = { type: 'col', align: 'center', content: 'center' }) => {
  return (
    <div
      className={`flex-1 flex flex-${props.direction} items-${props.align} justify-${props.content}`}
    >
      {props.children}
    </div>
  )
}

export default Flex
