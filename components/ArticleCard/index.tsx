import Image from "next/image"
import Badge from "@components/Badge"

const ArticleCard = ({
  image,
  title,
  subtitle,
  categories,
  avatar,
  author,
  like = 0,
}: {
  image: string
  title: string
  subtitle: string
  categories: string[]
  avatar: string
  author: string
  like?: number
}) => {
  return (
    <div className="recent-card relative max-w-[310px] md:max-w-full mx-2 lg:mx-3 xl:mx-4 border border-[#333] hover:border-[#FFFFFF8C] rounded overflow-hidden duration-300">
      <Image className="w-full h-auto border-b border-inherit" src={image} width={500} height={281} alt={title} />
      <div className="p-5">
        <h3 className="mb-1 line-clamp-1 text-lg md:text-xl capitalize">{title}</h3>
        <h4 className="mb-2 text-lg md:text-xl opacity-50">{subtitle}</h4>
        <ul className="flex flex-wrap gap-1">
          {categories.map((el, idx) => (
            <li key={idx}>
              <Badge>{el}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <button className="invisible absolute top-4 left-4 flex items-center gap-2.5">
        <Image className="w-8 h-8 rounded-full" src={avatar} width={250} height={250} alt={author} />
        <span className="text-base">{author}</span>
      </button>

      <button className="invisible absolute top-3 right-3 flex flex-col items-center justify-center gap-0.5 w-12 h-12 rounded-full font-semibold text-black bg-white shadow">
        <i className="fa-regular fa-heart"></i>
        <span className="leading-none">{like}</span>
      </button>
    </div>
  )
}

export default ArticleCard
