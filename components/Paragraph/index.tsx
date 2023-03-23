const Paragraph = ({
  children,
  title,
}: {
  children: string | React.ReactNode | React.ReactNode[]
  title?: string
}) => {
  return (
    <div className="paragraph max-w-[725px] mx-auto pb-2 md:pb-[18px] border-b border-[#333]">
      <h2 className="mb-8 text-lg md:text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  )
}

export default Paragraph