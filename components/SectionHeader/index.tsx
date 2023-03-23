import Link from "next/link"

const SectionHeader = ({
  title,
  caption,
  url,
}: {
  title: string
  caption: string
  url: string
}) => {
  return (
    <div className="flex items-center justify-between mb-6 md:mb-8">
      <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
      <Link href={url} className="flex items-center gap-2">
        <span className="uppercase">{caption}</span>
        <i className="fa-solid fa-arrow-right-long mt-0.5"></i>
      </Link>
    </div>
  )
}

export default SectionHeader
