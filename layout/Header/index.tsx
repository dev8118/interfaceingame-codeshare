import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Button from "@components/Button"

const Logo = ({ className }: { className?: string }) => (
  <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 93 93" className={className} fill="#FFF"><path className="st0" d="M0 53h93v40H0z" /><circle className="st0" cx="72" cy="21" r="21" /><path className="st0" d="M41.32 37.26L25.05 21 41.32 4.74 37.07.49 20.81 16.76 4.55.49.3 4.74 16.57 21 .3 37.26l4.25 4.25 16.26-16.27 16.26 16.27z" /></svg>
)

const Header = ({ NavLinksData }: { NavLinksData: any[] }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const searchBox = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (showSearch && searchBox.current) {
      searchBox.current.focus()
    }
  }, [showSearch])

  return (
    <header className="fixed z-30 top-0 w-full">
      <div className="relative border-b border-[#333]">
        <div className="relative z-30 flex items-center justify-between gap-4 lg:gap-8 px-4 lg:px-16 py-1.5 md:py-4 bg-black">
          <button className="md:hidden w-[46px] h-[46px]">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>

          <Link href="/">
            <Logo className="w-[26px] md:w-8 mr-4" />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NavLinksData.map((el) => (
              <li key={el.id} className="font-semibold uppercase opacity-50 hover:opacity-100 duration-300">
                <Link href={el.url}>
                  {el.caption}
                </Link>
              </li>
            ))}
          </ul>

          <button className={`w-[46px] h-[46px] md:ml-auto md:border border-transparent ${showSearch ? "border-white" : ""} hover:border-white rounded-full duration-300`} onClick={() => setShowSearch(!showSearch)}>
            <i className={`fa-solid ${showSearch ? "fa-xmark" : "fa-search"} text-xl`}></i>
          </button>

          <Link href="/" className="hidden md:block">
            <Button>
              Wireframe Mockup
            </Button>
          </Link>
        </div>

        <form className={`absolute z-20 top-[100%] w-full h-[calc(100vh-58px)] md:h-auto px-8 py-6 md:p-[60px] bg-white ${showSearch ? "" : "-translate-y-full"} duration-300`}>
          <div className="flex items-center justify-between gap-8 border-b border-[#c8c8c866] text-black">
            <input ref={searchBox} className="flex-grow text-xl md:text-[44px] focus:outline-0" placeholder="Search game" />
            <button className="py-3 hover:translate-x-1 duration-300">
              <i className="fa-solid fa-arrow-right-long text-xl md:text-3xl"></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
