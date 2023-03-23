import Link from "next/link"
import Slider from "react-slick"
import SectionHeader from "@components/SectionHeader"
import GameCard from "@components/GameCard"

const RecentGamesData = [
  {
    id: 1,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Uncharted 4",
    date: "May 10, 2016",
    genres: ["Action", "Adventure"],
  },
  {
    id: 2,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Overwatch 2",
    date: "October 4, 2022",
    genres: ["Action"],
  },
  {
    id: 3,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Gotham Knights",
    date: "October 21, 2022",
    genres: ["Action"],
  },
  {
    id: 4,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Dying Light 2",
    date: "February 4, 2022",
    genres: ["Action", "Adventure"],
  },
  {
    id: 5,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Marvel's Spider-Man",
    date: "September 7, 2018",
    genres: ["Action", "Card Game"],
  },
  {
    id: 6,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "NOSTALGIA Op.2",
    date: "September 26, 2018",
    genres: ["Music"],
  },
  {
    id: 7,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Stray",
    date: "July 19, 2022",
    genres: ["Indie", "Adventure"],
  },
  {
    id: 8,
    url: "/",
    image: "/images/recent-game-1.png",
    title: "Raji: An Ancient Epic",
    date: "October 20, 2020",
    genres: ["Action", "Adventure"],
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

const SixGridSliderSettings = {
  infinite: false,
  slidesToShow: 6,
  swipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
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

const RecentGames = () => {
  return (
    <>
      <SectionHeader
        title="Recent games add"
        caption="All Games"
        url="/"
      />

      <div className="relative lg:-mx-4">
        <Slider {...SixGridSliderSettings}>
          {RecentGamesData.map((el) => (
            <Link key={el.id} href={el.url}>
              <GameCard
                image={el.image}
                title={el.title}
                date={el.date}
                genres={el.genres}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default RecentGames
