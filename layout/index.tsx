import Header from "./Header"
import Footer from "./Footer"

const NavLinksData = [
  {
    id: 1,
    url: "/",
    caption: "Games",
  },
  {
    id: 2,
    url: "/",
    caption: "Screenshots",
  },
  {
    id: 3,
    url: "/",
    caption: "Articles",
  },
  {
    id: 4,
    url: "/",
    caption: "About",
  },
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header NavLinksData={NavLinksData} />
      <main className="pt-[58px] md:pt-[78px]">
        {children}
      </main>
      <Footer NavLinksData={NavLinksData} />
    </>
  )
}

export default Layout
