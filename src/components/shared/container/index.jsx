const Container = ({
  type,
  onClick,
  id,
  className,
  fitHeight,
  style,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  const classes = 'w-full w-xl w-lg w-md w-sm w-xs'

  function findWidthClass() {
    switch (type) {
      case 'full':
        return 'full'
      case '3xl':
        return '[375px]'
      case '2xl':
        return '56'
      case 'xl':
        return '48'
      case 'lg':
        return '40'
      case 'md':
        return '32'
      case 'sm':
        return '24'
      case 'xs':
        return '16'
    }
  }

  return (
    <>
      <div
        onClick={onClick}
        id={id}
        className={`w-full flex flex-col w-${findWidthClass()} ${className}  `}
        style={{
          ...(fitHeight && { height: 'fit-content' }),
          ...style,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </>
  )
}

export default Container
