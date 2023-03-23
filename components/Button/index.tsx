const Button = ({
  children,
  className,
}: {
  children: string | React.ReactNode
  className?: string
}) => {
  return (
    <button className={`px-9 py-2.5 border border-white rounded text-base font-semibold text-black hover:text-white bg-white hover:bg-black uppercase duration-300 ${className}`}>
      {children}
    </button>
  )
}

export default Button
