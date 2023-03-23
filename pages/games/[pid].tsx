import { useState, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "src/layout"
import Badge from "@components/Badge"
import GameCard from "@components/GameCard"
import Button from "@components/Button"
import RecentGames from "@components/RecentGames"

const ScreenshotsData = [
  {
    id: 1,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Custom loadout",
    genres: ["Inventory", "Stats"],
  },
  {
    id: 2,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Rank up",
    genres: ["Progress", "Stats"],
  },
  {
    id: 3,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Weapon unlocks",
    genres: ["Progress", "Stats"],
  },
  {
    id: 4,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Game rank",
    genres: ["In game", "Progress"],
  },
  {
    id: 5,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Game xp",
    genres: ["Progress", "Stats"],
  },
  {
    id: 6,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Top team",
    genres: ["In game", "Progress"],
  },
  {
    id: 7,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "Operator select",
    genres: ["Character", "Menu"],
  },
  {
    id: 8,
    url: "/",
    image: "/images/call-of-duty-1.jpg",
    title: "3rd place",
    genres: ["In game", "Progress"],
  },
]

const SortByData = [
  "Most popular",
  "Recent add",
]

const ElementsData = [
  {
    id: 1,
    category: "Character",
    count: 2,
  },
  {
    id: 2,
    category: "In game",
    count: 36,
  },
  {
    id: 3,
    category: "Inventory",
    count: 15,
  },
]

const Game: NextPage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(true)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>("Most popular")
  const [showElements, setShowElements] = useState<boolean>(true)
  const [activeElements, setActiveElements] = useState<string[]>(["In game"])

  const toggleGenre = (genre: string) => {
    let temp = activeElements
    if (activeElements.includes(genre)) {
      let index = activeElements.findIndex((el) => el === genre)
      temp.splice(index, 1)
    } else {
      temp.push(genre)
    }
    setActiveElements([...temp])
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
        <title>Call of Duty: Modern Warfare | Interface In Game | Video game UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Banner */}
        <section>
          <div className="h-56 md:h-64 md:mb-[60px] border-b border-[#333] bg-[url('/images/call-of-duty-banner.jpg')] bg-no-repeat bg-cover">
            <div className="container h-full flex items-center gap-8">
              <Image className="hidden md:block w-[112px] h-auto rounded-sm" src="/images/call-of-duty.jpg" width={375} height={500} alt="game" />

              <div className="flex-grow flex flex-col justify-center">
                <h2 className="mb-2 md:mb-3 text-3xl md:text-4xl">Call of Duty: Modern Warfare</h2>
                <h3 className="mb-2 md:mb-3 text-base opacity-70">October 25, 2019</h3>
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <Badge className="border-white text-black !bg-white hover:!text-white hover:!bg-black">Action</Badge>
                  </Link>
                  <Link href="/">
                    <Badge className="border-white text-black !bg-white hover:!text-white hover:!bg-black">FPS</Badge>
                  </Link>
                  <p className="hidden md:block ml-auto text-base opacity-70">Available for PC, PS4, Xbox One</p>
                </div>
              </div>
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

                  {/* Elements */}
                  <div className="border-t border-[#333]">
                    <button className="flex items-center justify-between w-full p-6" onClick={() => setShowElements(!showElements)}>
                      <h4 className="font-semibold text-base uppercase">Elements</h4>
                      <i className={`fa-solid fa-chevron-down text-xs ${showElements ? "-rotate-180" : ""} duration-300`}></i>
                    </button>
                    {showElements && (
                      <ul className="px-6 pb-6">
                        {ElementsData.map((el) => (
                          <li key={el.id}>
                            <button className="flex items-center gap-2 w-full py-1.5 border-[#333] md:hover:border-white duration-300" onClick={() => toggleGenre(el.category)}>
                              <span className="flex items-center justify-center w-[18px] h-[18px] border border-inherit rounded-sm text-black md:text-white">
                                {activeElements.includes(el.category) && (
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

            {/* Screenshots Grid */}
            <div className="grid grid-cols-12 gap-y-[30px] px-4 md:px-0">
              {ScreenshotsData.map((el) => (
                <Link key={el.id} href={el.url} className="col-span-12 md:col-span-6 lg:col-span-4">
                  <GameCard
                    image={el.image}
                    title={el.title}
                    genres={el.genres}
                    className="max-w-full"
                  />
                </Link>
              ))}

              <div className="col-span-12 flex justify-center pt-8">
                <Button className="text-white hover:!text-black bg-black hover:!bg-white">Load More Screenshots</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Maker */}
        <section className="mt-[60px] py-6 md:py-8 border-y border-[#333]">
          <div className="container flex items-center flex-wrap gap-x-16 gap-y-4">
            <p>
              <span className="uppercase opacity-50">Developed by :</span>{" "}
              <Link href="/" className="underline">Infinity Ward</Link>
            </p>
            <p>
              <span className="uppercase opacity-50">Published by :</span>{" "}
              <Link href="/" className="underline">Activision</Link>{" "}
              <Link href="/" className="underline">Sony Interactive Entertainment</Link>
            </p>
          </div>
        </section>

        {/* Recent Games */}
        <section>
          <div className="container pt-[60px]">
            <RecentGames />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Game
