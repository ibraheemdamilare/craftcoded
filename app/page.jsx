import { Button } from "@/components/ui/button"
import Photo from "@/components/ui/Photo"
import Social from "@/components/ui/Social"
import Stats from "@/components/ui/Stats"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello! This is <br /> <span className="text-accent ">CRAFTCODED</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Here at craftcoded,we serve you with best UI/UX design, Responsive website, a fullstack web development, logo and brand promotion.
            </p>

            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent
               hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home