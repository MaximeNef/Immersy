const Flex = ({ className, children }) => {
  return <div className={`flex-1 flex flex-row ${className}`}>{children}</div>
}

export default Flex
