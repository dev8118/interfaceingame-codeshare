import Image from "next/image"
import Badge from "@components/Badge"

const GameCard = ({
  image,
  title,
  date,
  genres,
  like = 0,
  className,
}: {
  image: string
  title: string
  date?: string
  genres: string[]
  like?: number
  className?: string
}) => {
  return (
    <div className={`recent-card relative max-w-[310px] md:max-w-full mx-2 lg:mx-3 xl:mx-4 border border-[#333] hover:border-[#FFFFFF8C] rounded overflow-hidden duration-300 ${className}`}>
      <Image className="w-full h-auto border-b border-inherit" src={image} width={375} height={500} alt={title} />
      <div className="p-5">
        <h3 className="mb-1 line-clamp-1 text-lg md:text-xl capitalize">{title}</h3>
        {date && (
          <h4 className="mb-2 text-xs font-semibold uppercase opacity-50">{date}</h4>
        )}
        <ul className="flex flex-wrap gap-1">
          {genres.map((el, idx) => (
            <li key={idx}>
              <Badge>{el}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <button className="invisible absolute top-3 right-3 flex flex-col items-center justify-center gap-0.5 w-12 h-12 rounded-full font-semibold text-black bg-white shadow">
        <i className="fa-regular fa-heart"></i>
        <span className="leading-none">{like}</span>
      </button>
    </div>
  )
}

export default GameCard
