import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import Layout from "src/layout"
import Button from "@components/Button"
import SectionHeader from "@components/SectionHeader"
import GenreCard from "@components/GenreCard"
import Badge from "@components/Badge"
import RecentGames from "@components/RecentGames"
import RecentArticles from "@components/RecentArticles"

const GenresData = [
  {
    id: 1,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "Action",
    count: 202,
    unit: "Games"
  },
  {
    id: 2,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "Adventure",
    count: 88,
    unit: "Games"
  },
  {
    id: 3,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "Card Game",
    count: 14,
    unit: "Games"
  },
  {
    id: 4,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "Fighting",
    count: 14,
    unit: "Games"
  },
  {
    id: 5,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "FPS",
    count: 60,
    unit: "Games"
  },
  {
    id: 6,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "Indie",
    count: 82,
    unit: "Games"
  },
  {
    id: 7,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "MMO",
    count: 5,
    unit: "Games"
  },
  {
    id: 8,
    url: "/",
    image: "/images/genre-1.jpg",
    title: "Music",
    count: 7,
    unit: "Games"
  },
]

const ElementsData = [
  {
    id: 1,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Character",
    count: 1150,
    unit: "Screenshots"
  },
  {
    id: 2,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Credits",
    count: 206,
    unit: "Screenshots"
  },
  {
    id: 3,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Dialogue",
    count: 366,
    unit: "Screenshots"
  },
  {
    id: 4,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Game over",
    count: 169,
    unit: "Screenshots"
  },
  {
    id: 5,
    url: "/",
    image: "/images/element-1.jpg",
    title: "In game",
    count: 4532,
    unit: "Screenshots"
  },
  {
    id: 6,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Inventory",
    count: 1128,
    unit: "Screenshots"
  },
  {
    id: 7,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Level selection",
    count: 552,
    unit: "Screenshots"
  },
  {
    id: 8,
    url: "/",
    image: "/images/element-1.jpg",
    title: "Loading",
    count: 421,
    unit: "Screenshots"
  },
]

const ThemeData = [
  {
    id: 1,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Cartoon",
    count: 102,
    unit: "Games"
  },
  {
    id: 2,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Fantasy",
    count: 84,
    unit: "Games"
  },
  {
    id: 3,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Horror",
    count: 29,
    unit: "Games"
  },
  {
    id: 4,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Medieval",
    count: 169,
    unit: "Games"
  },
  {
    id: 5,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Pixel Art",
    count: 26,
    unit: "Games"
  },
  {
    id: 6,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Military",
    count: 29,
    unit: "Games"
  },
  {
    id: 7,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Modern",
    count: 76,
    unit: "Games"
  },
  {
    id: 8,
    url: "/",
    image: "/images/theme-1.jpg",
    title: "Pirate",
    count: 1,
    unit: "Games"
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

const FiveGridSliderSettings = {
  infinite: false,
  slidesToShow: 5,
  swipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1199,
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Interface In Game | Collection of video games UI | Screenshots and videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Banner */}
        <section>
          <div className="relative flex flex-col items-center justify-center h-[112vw] md:h-[36vw] border-b border-[#333] overflow-hidden">
            <div className="relative z-10 text-center">
              <h1 className="mb-3 text-4xl md:text-6xl">Elden Ring</h1>
              <h4 className="mb-4 text-base opacity-90">February 25, 2022</h4>
              <Button>See Game Interface</Button>
            </div>
            <video className="absolute z-0 top-[50%] left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%] object-cover" autoPlay loop muted>
              <source src="/videos/banner.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Genres */}
        <section>
          <div className="container pt-[60px]">
            <SectionHeader
              title="Genres"
              caption="All Genres"
              url="/"
            />

            <div className="relative lg:-mx-4">
              <Slider {...FiveGridSliderSettings}>
                {GenresData.map((el) => (
                  <Link key={el.id} href={el.url}>
                    <GenreCard
                      image={el.image}
                      title={el.title}
                      count={el.count}
                      unit={el.unit}
                    />
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* Recent games add */}
        <section>
          <div className="container pt-[60px]">
            <RecentGames />
          </div>
        </section>

        {/* Recent articles */}
        <section>
          <div className="container pt-[60px]">
            <RecentArticles />
          </div>
        </section>

        {/* Elements */}
        <section>
          <div className="container pt-[60px]">
            <SectionHeader
              title="Elements"
              caption="All Elements"
              url="/"
            />

            <div className="relative lg:-mx-4">
              <Slider {...FiveGridSliderSettings}>
                {ElementsData.map((el) => (
                  <Link key={el.id} href={el.url}>
                    <GenreCard
                      image={el.image}
                      title={el.title}
                      count={el.count}
                      unit={el.unit}
                    />
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* Wireframe */}
        <section>
          <div className="container pt-[60px]">
            <Link href="/">
              <div className="grid grid-cols-12 mx-2 border border-[#333] hover:border-[#FFFFFF8C] rounded duration-300">
                <div className="col-span-12 md:col-span-6 border-b md:border-b-0 md:border-r border-inherit">
                  <Image className="w-full h-auto" src="/images/wireframe.jpg" width={1920} height={1080} alt="wireframe" />
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center">
                  <div className="p-12">
                    <h2 className="mb-2 text-lg md:text-2xl xl:text-4xl">Wireframe Video Game Design</h2>
                    <h3 className="mb-4 opacity-50">60+ Wireframe Mockup PSD Design</h3>
                    <ul className="flex gap-2">
                      <li><Badge>Resource</Badge></li>
                      <li><Badge>News</Badge></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Themes */}
        <section>
          <div className="container pt-[60px]">
            <SectionHeader
              title="Themes"
              caption="All Themes"
              url="/"
            />

            <div className="relative lg:-mx-4">
              <Slider {...FiveGridSliderSettings}>
                {ThemeData.map((el) => (
                  <Link key={el.id} href={el.url}>
                    <GenreCard
                      image={el.image}
                      title={el.title}
                      count={el.count}
                      unit={el.unit}
                    />
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
