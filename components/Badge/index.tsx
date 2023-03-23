const Badge = ({ 
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return (
    <span className={`px-2 py-1 border border-[#333] rounded-sm text-[10px] font-semibold leading-none uppercase bg-black hover:text-black hover:bg-white duration-300 ${className}`}>
      {children}
    </span>
  )
}

export default Badge