import Link from "next/link"

const SocialLinksData = [
  {
    id: 1,
    url: "/",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
  {
    id: 2,
    url: "/",
    icon: <i className="fa-brands fa-twitch"></i>,
  },
]

const FooterLinksData = [
  {
    id: 1,
    url: "/",
    caption: "Cookie policy",
  },
  {
    id: 2,
    url: "/",
    caption: "Copyright complaints",
  },
  {
    id: 3,
    url: "/",
    caption: "Privacy policy",
  },
  {
    id: 4,
    url: "/",
    caption: "Terms and conditions",
  },
]

const Footer = ({ NavLinksData }: { NavLinksData: any[] }) => {
  return (
    <footer className="mt-[60px] px-6 lg:px-16 py-9 lg:py-[60px] border-t border-[#333]">
      <div className="grid grid-cols-12 gap-4 items-center mb-9">
        <div className="col-span-12 lg:col-span-5 xl:col-span-6">
          <h2 className="max-w-[420px] text-xl">
            Explore a collection of video games interfaces
            and find inspiration for your designs.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-4">
          <ul className="flex items-center lg:justify-between flex-wrap gap-x-4 gap-y-2">
            {NavLinksData.map((el) => (
              <li key={el.id} className="text-base font-semibold uppercase hover:opacity-50 duration-300">
                <Link href={el.url}>
                  {el.caption}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-3 xl:col-span-2">
          <ul className="flex items-center lg:justify-center gap-6">
            {SocialLinksData.map((el) => (
              <li key={el.id}>
                <Link href={el.url}>
                  <button className="inline-block w-10 h-10 border-2 border-[#FFFFFF33] rounded-full hover:text-black hover:bg-white duration-300">
                    {el.icon}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex flex-wrap gap-y-2 gap-x-5 mb-5 pb-5 lg:pb-0 border-b lg:border-0 border-[#333]">
        {FooterLinksData.map((el) => (
          <li key={el.id} className="text-base font-semibold opacity-50 hover:opacity-100 duration-300">
            <Link href={el.url}>
              {el.caption}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col lg:flex-row justify-between gap-6 text-base opacity-50">
        <p>
          Video games, pictures, all trademarks, and registered trademarks are the property of their respective owners.
        </p>
        <p className="flex-shrink-0">
          &copy; 2022 Interface In Game
        </p>
      </div>
    </footer>
  )
}

export default Footer
