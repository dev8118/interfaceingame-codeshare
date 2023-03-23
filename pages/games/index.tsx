import { useState, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Layout from "src/layout"
import GameCard from "@components/GameCard"
import Button from "@components/Button"

const GamesData = [
  {
    id: 1,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Call of Duty: Modern Warfare",
    date: "October 25, 2019",
    genres: ["Action", "FPS"],
  },
  {
    id: 2,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Overwatch 2",
    date: "October 4, 2022",
    genres: ["Action"],
  },
  {
    id: 3,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Gotham Knights",
    date: "October 21, 2022",
    genres: ["Action"],
  },
  {
    id: 4,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Dying Light 2",
    date: "February 4, 2022",
    genres: ["Action", "Adventure"],
  },
  {
    id: 5,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Marvel's Spider-Man",
    date: "September 7, 2018",
    genres: ["Action", "Card Game"],
  },
  {
    id: 6,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "NOSTALGIA Op.2",
    date: "September 26, 2018",
    genres: ["Music"],
  },
  {
    id: 7,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Stray",
    date: "July 19, 2022",
    genres: ["Indie", "Adventure"],
  },
  {
    id: 8,
    url: "/",
    image: "/images/call-of-duty.jpg",
    title: "Raji: An Ancient Epic",
    date: "October 20, 2020",
    genres: ["Action", "Adventure"],
  },
]

const SortByData = [
  "Most popular",
  "Recent add",
  "Release date",
  "A to Z",
  "Z to A",
]

const GenresData = [
  {
    id: 1,
    category: "Action",
    count: 202,
  },
  {
    id: 2,
    category: "Card Game",
    count: 14,
  },
  {
    id: 3,
    category: "Music",
    count: 7,
  },
]

const ThemesData = [
  {
    id: 1,
    category: "Cartoon",
    count: 102,
  },
  {
    id: 2,
    category: "Military",
    count: 29,
  },
  {
    id: 3,
    category: "Western",
    count: 3,
  },
]

const PlatformsData = [
  {
    id: 1,
    category: "Mobile",
    count: 32,
  },
  {
    id: 2,
    category: "PC",
    count: 280,
  },
  {
    id: 3,
    category: "Xbox One",
    count: 186,
  },
]

const Games: NextPage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(true)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>("Most popular")
  const [showGenres, setShowGenres] = useState<boolean>(true)
  const [activeGenres, setActiveGenres] = useState<string[]>(["Action"])
  const [showThemes, setShowThemes] = useState<boolean>(true)
  const [activeThemes, setActiveThemes] = useState<string[]>([])
  const [showPlatforms, setShowPlatforms] = useState<boolean>(true)
  const [activePlatforms, setActivePlatforms] = useState<string[]>([])

  const toggleGenre = (genre: string) => {
    let temp = activeGenres
    if (activeGenres.includes(genre)) {
      let index = activeGenres.findIndex((el) => el === genre)
      temp.splice(index, 1)
    } else {
      temp.push(genre)
    }
    setActiveGenres([...temp])
  }

  const toggleTheme = (theme: string) => {
    let temp = activeThemes
    if (activeThemes.includes(theme)) {
      let index = activeThemes.findIndex((el) => el === theme)
      temp.splice(index, 1)
    } else {
      temp.push(theme)
    }
    setActiveThemes([...temp])
  }

  const togglePlatform = (platform: string) => {
    let temp = activePlatforms
    if (activePlatforms.includes(platform)) {
      let index = activePlatforms.findIndex((el) => el === platform)
      temp.splice(index, 1)
    } else {
      temp.push(platform)
    }
    setActivePlatforms([...temp])
  }

  // Show/hide filters panel on browser resize
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setShowFilters(false)
      } else {
        setShowFilters(true)
      }
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  // Hide filters panel on mobile / Show on tablet, laptop and desktop
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowFilters(false)
    } else {
      setShowFilters(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Games | Interface In Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Banner */}
        <section>
          <div className="h-40 md:h-64 md:mb-[60px] border-b border-[#333] bg-[url('/images/games-banner.jpg')] bg-no-repeat bg-cover">
            <div className="container h-full flex flex-col justify-center">
              <h2 className="mb-2 md:mb-3 text-3xl md:text-4xl">Games</h2>
              <p className="text-base opacity-70">338 game interfaces for designers and video games lovers</p>
            </div>
          </div>
        </section>

        <section>
          <div className="md:container flex flex-col md:flex-row gap-4">
            <aside className="flex-shrink-0 self-start min-w-[240px] w-full md:w-1/5 mb-4">
              {/* Show/Hide Filters Button on Mobile */}
              <div className={`${showFilters ? "fixed z-10 top-[58px]" : ""} md:hidden w-full border-b border-[#333] bg-black`}>
                <div className="container py-8">
                  <button className="flex items-center justify-between w-full p-4 border border-[#333] rounded-sm" onClick={() => setShowFilters(!showFilters)}>
                    <span className="text-base leading-none">Filters</span>
                    <i className={`fa-solid fa-chevron-down text-xs ${showFilters ? "-rotate-180" : ""} duration-300`}></i>
                  </button>
                </div>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="fixed md:relative z-10 top-[173px] md:top-0 w-full h-[calc(100vh-173px)] md:h-auto md:border border-[#333] rounded-sm overflow-y-scroll md:overflow-y-auto text-black md:text-white bg-white md:bg-black">
                  {/* Sort By */}
                  <div className="p-6">
                    <h4 className="mb-4 text-base font-semibold uppercase">Sort By</h4>
                    <div className="relative">
                      <button className={`flex items-center justify-between w-full p-4 border ${showMenu ? "border-black md:border-white" : "border-[#333]"} rounded-sm hover:text-black hover:bg-white duration-300`} onClick={() => setShowMenu(!showMenu)}>
                        <span className="text-base leading-none">{sortBy}</span>
                        <i className={`fa-solid fa-chevron-down text-xs ${showMenu ? "-rotate-180" : ""} duration-300`}></i>
                      </button>
                      {showMenu && (
                        <ul className="absolute z-10 w-full">
                          {SortByData.map((el, idx) => el !== sortBy && (
                            <li key={idx}>
                              <button className={`flex items-center justify-between w-full p-3 border border-t-0 ${showMenu ? "border-black md:border-white" : "border-[#333]"} rounded-sm text-black md:text-white bg-white md:bg-black hover:text-black hover:bg-white duration-300`} onClick={() => {
                                setSortBy(el)
                                setShowMenu(false)
                              }}>
                                <span className="text-base">{el}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Genres */}
                  <div className="border-t border-[#333]">
                    <button className="flex items-center justify-between w-full p-6" onClick={() => setShowGenres(!showGenres)}>
                      <h4 className="font-semibold text-base uppercase">Genres</h4>
                      <i className={`fa-solid fa-chevron-down text-xs ${showGenres ? "-rotate-180" : ""} duration-300`}></i>
                    </button>
                    {showGenres && (
                      <ul className="px-6 pb-6">
                        {GenresData.map((el) => (
                          <li key={el.id}>
                            <button className="flex items-center gap-2 w-full py-1.5 border-[#333] md:hover:border-white duration-300" onClick={() => toggleGenre(el.category)}>
                              <span className="flex items-center justify-center w-[18px] h-[18px] border border-inherit rounded-sm text-black md:text-white">
                                {activeGenres.includes(el.category) && (
                                  <i className="fa-solid fa-check text-[10px]"></i>
                                )}
                              </span>
                              <span className="text-base">{el.category}</span>
                              <span className="ml-auto opacity-70">{el.count}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Themes */}
                  <div className="border-t border-[#333]">
                    <button className="flex items-center justify-between w-full p-6" onClick={() => setShowThemes(!showThemes)}>
                      <h4 className="font-semibold text-base uppercase">Themes</h4>
                      <i className={`fa-solid fa-chevron-down text-xs ${showThemes ? "-rotate-180" : ""} duration-300`}></i>
                    </button>
                    {showThemes && (
                      <ul className="px-6 pb-6">
                        {ThemesData.map((el) => (
                          <li key={el.id}>
                            <button className="flex items-center gap-2 w-full py-1.5 border-[#333] md:hover:border-white duration-300" onClick={() => toggleTheme(el.category)}>
                              <span className="flex items-center justify-center w-[18px] h-[18px] border border-inherit rounded-sm text-black md:text-white">
                                {activeThemes.includes(el.category) && (
                                  <i className="fa-solid fa-check text-[10px]"></i>
                                )}
                              </span>
                              <span className="text-base">{el.category}</span>
                              <span className="ml-auto opacity-70">{el.count}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Platforms */}
                  <div className="border-t border-[#333]">
                    <button className="flex items-center justify-between w-full p-6" onClick={() => setShowPlatforms(!showPlatforms)}>
                      <h4 className="font-semibold text-base uppercase">Platforms</h4>
                      <i className={`fa-solid fa-chevron-down text-xs ${showPlatforms ? "-rotate-180" : ""} duration-300`}></i>
                    </button>
                    {showPlatforms && (
                      <ul className="px-6 pb-6">
                        {PlatformsData.map((el) => (
                          <li key={el.id}>
                            <button className="flex items-center gap-2 w-full py-1.5 border-[#333] md:hover:border-white duration-300" onClick={() => togglePlatform(el.category)}>
                              <span className="flex items-center justify-center w-[18px] h-[18px] border border-inherit rounded-sm text-black md:text-white">
                                {activePlatforms.includes(el.category) && (
                                  <i className="fa-solid fa-check text-[10px]"></i>
                                )}
                              </span>
                              <span className="text-base">{el.category}</span>
                              <span className="ml-auto opacity-70">{el.count}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </aside>

            {/* Games Grid */}
            <div className="grid grid-cols-12 gap-y-[30px] px-4 md:px-0">
              {GamesData.map((el) => (
                <Link key={el.id} href={el.url} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <GameCard
                    image={el.image}
                    title={el.title}
                    date={el.date}
                    genres={el.genres}
                    className="max-w-full"
                  />
                </Link>
              ))}

              <div className="col-span-12 flex justify-center pt-8">
                <Button className="text-white hover:!text-black bg-black hover:!bg-white">Load More Games</Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Games
