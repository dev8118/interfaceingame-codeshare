import type { NextPage } from "next"
import Head from "next/head"
import Layout from "src/layout"
import Image from "next/image"
import Link from "next/link"
import Badge from "@components/Badge"
import YoutubeVideo from "@components/YoutubeVideo"
import Paragraph from "@components/Paragraph"
import RecentArticles from "@components/RecentArticles"

const VideoSrcsData = [
  "https://player.vimeo.com/video/437479469?h=6030f774b4&dnt=1&app_id=122963",
  "https://www.youtube.com/embed/bp_n2cBBlow?feature=oembed",
]

const LinksData = [
  {
    id: 1,
    url: "https://www.stephandube.com/",
  }, {
    id: 2,
    url: "https://www.uipeeps.com/",
  }, {
    id: 3,
    url: "https://www.linkedin.com/in/stephandube/",
  }, {
    id: 4,
    url: "https://twitter.com/ui_stephan_dube",
  },
]

const SocialLinksData = [
  {
    id: 1,
    url: "/",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
  {
    id: 2,
    url: "/",
    icon: <i className="fa-brands fa-facebook-f"></i>,
  },
  {
    id: 3,
    url: "/",
    icon: <i className="fa-brands fa-linkedin-in"></i>,
  },
]

const Article: NextPage = () => {
  return (
    <>
      <Head>
        <title>Interview with Stephan Dube | Interface In Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-[url('/images/article-bg.jpg')] bg-no-repeat">
          {/* Title */}
          <div className="container">
            <div className="w-full py-8 md:py-14 text-center">
              <h1 className="mb-6 text-[30px] md:text-[40px]">Interview with Stephan Dube</h1>
              <h2 className="mb-6 md:mb-8 text-base">Principle UX | UI Designer at Arrivant</h2>
              <Link href="/">
                <Badge>Interview</Badge>
              </Link>
            </div>
          </div>

          {/* Youtube Video */}
          <div className="container max-w-[990px] mb-10 md:mb-[60px]">
            <YoutubeVideo src={VideoSrcsData[0]} title="Showreel" />
          </div>

          {/* Introduction */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="Introduction">
              <p>
                My name is Stephan Dube and I am a Principal UX/UI designer at <Link href="/">Arrivant studio</Link>, the creator of <Link href="/">UI Peeps Facebook community</Link>, a teacher and mentor of UX/UI at Gnomon, LCAD and the Art Center, and the founder of <Link href="/">uipeeps.com</Link> – a 14 week online course for learning UX/UI in video game development.
              </p>
              <p>
                Originally from Ottawa, Canada, I now live in Los Angeles and can be found online showcasing my portfolio at <Link href="/">stephandube.com</Link>. I’m passionate about helping others learn the fundamentals of UX/UI in gamedev and have used this passion to build the UI Peeps Facebook community and launch the comprehensive online course: UI Peeps Master Class.
              </p>
              <p>
                Whether you’re just getting started or are an experienced designer, my courses, classes and community provide an opportunity to join an ever-growing and passionate community of UX/UI professionals.
              </p>
            </Paragraph>
          </div>

          {/* Article Image */}
          <div className="container max-w-[990px] mb-10 md:mb-[60px]">
            <Image className="w-full h-auto" src="/images/article-1.png" width={1920} height={1080} alt="article" />
          </div>

          {/* What was your journey like starting in the video game industry? */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="What was your journey like starting in the video game industry?">
              <p>
                My journey in the video game industry began as a graphic designer in the late 90s. I started my career by working in technical support for Avid | Softimage’s 3D software, Softimage | XSI. From there, I moved on to small cinema studios in Montreal, where I held various roles such as texture artist, layout artist, and modeler. Later, I was hired by Discreet Logic (later Autodesk) as a technical support specialist for 3DSMax, Combustion, and other Autodesk products
              </p>
              <p>
                Eventually, I landed a job at Ubisoft Montreal as a 3D prop artist. However, after my project ended, I was given the opportunity to work on the PSP game Rocky Balboa as a UI Artist, which I fell in love with and have been building my skills in ever since. At that time, UI was not a well-established field in the game development industry, and I consider myself a first-generation UI artist in game development. I have continued to challenge myself by learning new skill sets like UX and motion graphics. Nowadays, UX and UI have become far more critical in the industry.
              </p>
              <p>
                Since then, I have worked at various companies such as Wargaming, Activision, SOE, Survios, Meta/Ready At Dawn, and currently, I am working at Arrivant as a Principal UX/UI Designer on the project Star Garden.
              </p>
            </Paragraph>
          </div>

          {/* As someone who has been in the video game industry for ... */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="As someone who has been in the video game industry for an extended period, what do you consider to be the most significant change in UI design for video games?">
              <p>
                As someone with extensive experience in the video game industry, I believe that the most significant change in UI design for video games has been the emergence of UX design as a distinct field. The emphasis on user experience has grown significantly as technology and player expectations have progressed. Additionally, the use of tools like Adobe XD and Figma has made it easier to create prototypes and gather user feedback.
              </p>
              <p>
                Another important change is the increasing focus on accessibility in games, which is crucial for creating an inclusive and diverse player base. Furthermore, the use of A.I. in the UX/UI design is on the rise, with tools that can generate art and style becoming more prevalent in game development. This is especially beneficial for smaller game studios where one person may have multiple responsibilities, as it can greatly streamline the design process.
              </p>
            </Paragraph>
          </div>

          {/* Article Image */}
          <div className="container max-w-[990px] mb-10 md:mb-[60px]">
            <Image className="w-full h-auto" src="/images/article-2.png" width={1249} height={697} alt="article" />
          </div>

          {/* You have a clear passion for mentoring and teaching others, and ... */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="You have a clear passion for mentoring and teaching others, and you also created a Facebook community called UI Peeps, what motivated you to do so?">
              <p>
                I am passionate about mentoring and teaching others, which led me to create a Facebook community called <Link href="/">UI Peeps</Link>. My original intention was to teach a class on UX/UI for game development, but due to the pandemic, it was canceled. I then began reaching out to different schools, which eventually led to connections with Art Center and LCAD, two reputable art schools in Los Angeles.
              </p>
              <p>
                When I first started my career in UX/UI for game development, there were limited mentors and resources available in the small community. To address this gap, I created a private Facebook group for UX/UI in game development, which I later opened to the public. The group has grown to over 1400 members, and I strive to provide helpful content and a platform for members to connect and grow.
              </p>
            </Paragraph>
          </div>

          {/* Can you provide more information about the UI Peeps Master Class, your online course? */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="Can you provide more information about the UI Peeps Master Class, your online course?">
              <p>
                The <Link href="/">UI Peeps Master Class</Link> is a comprehensive 14-week online course that delves into the fundamental principles of UX/UI design in the video game industry. Intended for individuals seeking to acquire practical experience and knowledge in this field, the course provides a thorough understanding of the process of effective UX/UI design, including best practices for workflow and non-destructive techniques.
              </p>
              <p>
                As a seasoned professional with extensive industry experience, I am eager to share my expertise and skills with students through this class. I will provide hands-on instruction and guidance, working closely with each student to customize the course to their specific project. The next semester of the UI Peeps Master Class starts on April 3rd, 2023, with classes held from 7:00 PM to 10:00 PM PST on Monday evenings. Upon completion, students will have developed a functional prototype based on their game design document, as well as an animated FUI/Speedometer created using Illustrator and After Effects. The <Link href="/">syllabus</Link> of the class is available on the website."
              </p>
            </Paragraph>
          </div>

          {/* What led you to choose a live class format over a pre-recorded one for the UI Peeps Master Class? */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="What led you to choose a live class format over a pre-recorded one for the UI Peeps Master Class?">
              <p>
                I decided to do a live class instead of a pre-recorded class because I believe that it is the best way to ensure that my students get the most out of their learning experience. Live classes allow for real-time interaction with me and other students, allowing for meaningful conversations and feedback that can help guide their learning and improve their skills. Additionally, with a live class, I am able to provide more personalized guidance and support to ensure my students can get the most out of their class.
              </p>
            </Paragraph>
          </div>

          {/* Two Images */}
          <div className="container grid grid-cols-12 gap-4 w-full mb-10 md:mb-[60px]">
            <div className="col-span-12 md:col-span-6">
              <Image className="w-full h-auto" src="/images/article-3.png" width={1920} height={1080} alt="article" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Image className="w-full h-auto" src="/images/article-4.png" width={1920} height={1080} alt="article" />
            </div>
          </div>

          {/* What is your favorite part of being a mentor and teacher? */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="What is your favorite part of being a mentor and teacher?">
              <p>
                Being a mentor and teacher is my favorite part of my career because it allows me to share my knowledge and experience with others. I have faced challenges in this industry, but I believe that it is important to learn from mistakes and move forward. I have found that by sharing my experience and helping others to understand the process of learning and development, it can increase their confidence and ability to succeed. This is why I created a course based on my own experience, to help others gain the knowledge and skills they need to succeed in the industry.
              </p>
              <p>
                Additionally, the video game industry can be unstable, with frequent layoffs. Building a community, like UI Peeps, that supports each other during tough times is extremely rewarding. Through my class, I have been able to help many students secure employment in the video game industry, and I consider this to be a great accomplishment.
              </p>
            </Paragraph>
          </div>

          {/* Vimeo Video */}
          <div className="container max-w-[990px] mb-10 md:mb-[60px]">
            <YoutubeVideo src={VideoSrcsData[1]} title="Adobe Max 2021 Stephan Dube" />
          </div>

          {/* What advice would you give to someone just starting out in the video game industry? */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="What advice would you give to someone just starting out in the video game industry?">
              <p>
                When starting out in the game development industry, it’s important to be a self-starter and develop a diverse set of skills. Don’t limit yourself to one specific area or skill set, as this can limit your opportunities. Everyone experiences imposter syndrome at some point, but one way to overcome this is to have a solid understanding of the process of creating efficient user experience (UX) and user interface (UI) in game development.
              </p>
              <p>
                Investing in a quality education or taking relevant courses can open up many more doors for you in the industry. Additionally, motion graphics is an undervalued skillset that can give you an edge as a UI artist. With technology constantly evolving, it is crucial to stay current with the latest trends and tools in the industry. Don’t be afraid to try new ideas and push yourself out of your comfort zone, as this will help you to broaden your horizons and become a more valuable asset to any company.
              </p>
            </Paragraph>
          </div>

          {/* Article Image */}
          <div className="container max-w-[990px] mb-10 md:mb-[60px]">
            <Image className="w-full h-auto" src="/images/article-5.png" width={1920} height={1080} alt="article" />
          </div>

          {/* Given the rapidly changing nature of the technology industry, ... */}
          <div className="container mb-10 md:mb-[60px]">
            <Paragraph title="Given the rapidly changing nature of the technology industry, what advice would you give to individuals who are concerned about job stability?">
              <p>
                Given the rapidly evolving nature of the technology industry, it can be understandable for individuals to be concerned about job stability. To mitigate this concern, it is crucial to keep your resume and portfolio current, as this will give you a better chance at maintaining job security. This can be done by investing in personal projects and regularly updating your resume. Additionally, it is important to back up your work regularly, as layoffs can happen unexpectedly.
              </p>
              <p>
                To stay competitive in the job market, it is important to stay current on the latest trends in the tech industry and to continuously develop and improve your skills. Even if you find yourself unemployed, use that time to invest in yourself and work on building your portfolio, as it is a valuable asset for any UX/UI designer. Remember, even if you lose your job, your experience cannot be taken away. If you are currently employed, strive to learn as much as you can and avoid becoming complacent, as everyone around you is constantly growing and improving. Make sure to keep up with the changes in the industry as well.
              </p>
            </Paragraph>
          </div>

          {/* Links */}
          <div className="container mb-10 md:mb-[60px]">
            <ul className="max-w-[725px] mx-auto">
              {
                LinksData.map((el) => (
                  <li key={el.id}>
                    <Link className="text-lg underline hover:no-underline duration-300" href={el.url}>{el.url}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        {/* Share */}
        <section className="py-6 md:py-8 border-y border-[#333]">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <Image className="w-[44px] h-[44px] rounded-full" src="/images/avatar-1.jpg" width={250} height={250} alt="avatar" />
                <div className="text-center md:text-left text-base">
                  <h3>Savana Jonau</h3>
                  <h4 className="text-[#B4B4B4]">UI Artist at Raven Software</h4>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <p className="text-base">Share this article</p>
                <ul className="flex gap-6">
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
          </div>
        </section>

        {/* Recent articles */}
        <section>
          <div className="container pt-[60px]">
            <RecentArticles />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Article
