import Image from "next/image"

const GenreCard = ({
  image,
  title,
  count,
  unit,
}: {
  image: string
  title: string
  count: number
  unit: string
}) => {
  return (
    <div className="max-w-[310px] md:max-w-full mx-2 lg:mx-3 xl:mx-4 border border-[#333] hover:border-[#FFFFFF8C] rounded overflow-hidden duration-300">
      <Image className="w-full h-auto border-b border-inherit" src={image} width={500} height={281} alt={title} />
      <div className="p-5">
        <h3 className="mb-1 line-clamp-1 text-lg md:text-xl capitalize">{title}</h3>
        <h4 className="text-xs md:text- font-semibold uppercase opacity-50">{count} {unit}</h4>
      </div>
    </div>
  )
}

export default GenreCard
