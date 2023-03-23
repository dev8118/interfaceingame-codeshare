import Link from "next/link"
import Slider from "react-slick"
import SectionHeader from "@components/SectionHeader"
import ArticleCard from "@components/ArticleCard"

const RecentArticlesData = [
  {
    id: 1,
    url: "/",
    image: "/images/recent-article-1.jpg",
    title: "Interview with Stephan Dube",
    subtitle: "Principal UX | UI Designer at Arrivant",
    categories: ["Interview"],
    avatar: "/images/avatar-1.jpg",
    author: "Savana Jonau",
  },
  {
    id: 2,
    url: "/",
    image: "/images/recent-article-1.jpg",
    title: "Wirefram Video Game Design",
    subtitle: "60+ Wirefram Mockup PSD Design",
    categories: ["Resource", "News"],
    avatar: "/images/avatar-1.jpg",
    author: "Savana Jonau",
  },
  {
    id: 3,
    url: "/",
    image: "/images/recent-article-1.jpg",
    title: "Interview with Michal Jarolimek",
    subtitle: "UI programer at Warhorse Studios",
    categories: ["Interview"],
    avatar: "/images/avatar-1.jpg",
    author: "Savana Jonau",
  },
  {
    id: 4,
    url: "/",
    image: "/images/recent-article-1.jpg",
    title: "Interview with Marc Sodermanns",
    subtitle: "Lead UX Designer at Massive - a Ubisoft studio",
    categories: ["Interview"],
    avatar: "/images/avatar-1.jpg",
    author: "Savana Jonau",
  },
  {
    id: 5,
    url: "/",
    image: "/images/recent-article-1.jpg",
    title: "Interview with Nicolas Kraj",
    subtitle: "UX Director at Ubisoft and Creator of GDKeys",
    categories: ["Interview"],
    avatar: "/images/avatar-1.jpg",
    author: "Savana Jonau",
  },
]

const PrevArrow = (props: any) => {
  const { onClick } = props

  return (
    <button className="hidden md:block absolute z-10 top-[calc(50%-20px)] left-0 w-10 h-10 rounded-full text-black bg-white" onClick={onClick}>
      <i className="fa-solid fa-chevron-left text-base"></i>
    </button>
  )
}

const NextArrow = (props: any) => {
  const { onClick } = props

  return (
    <button className="hidden md:block absolute z-10 top-[calc(50%-20px)] right-0 w-10 h-10 rounded-full text-black bg-white" onClick={onClick}>
      <i className="fa-solid fa-chevron-right text-base"></i>
    </button>
  )
}

const FourGridSliderSettings = {
  infinite: false,
  slidesToShow: 4,
  swipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
  ]
}

const RecentArticles = () => {
  return (
    <>
      <SectionHeader
        title="Recent articles"
        caption="All Articles"
        url="/"
      />

      <div className="relative lg:-mx-4">
        <Slider {...FourGridSliderSettings}>
          {RecentArticlesData.map((el) => (
            <Link key={el.id} href={el.url}>
              <ArticleCard
                image={el.image}
                title={el.title}
                subtitle={el.subtitle}
                categories={el.categories}
                avatar={el.avatar}
                author={el.author}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default RecentArticles
