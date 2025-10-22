import { Hero } from "./hero";
import Services from "./services/page";
import Experience from "./about/page";
import Blog from "./blog/page";
import Contact from "./contact/page";
import { Instrument_Serif } from "next/font/google";
import Projects from "./projects/projects";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});


export default function Home() {

  return (
    <>
      <Hero />
      <div className="w-0 xl:h-20 h-10"></div>
      <Services />
      <div className="w-0 xl:h-20 h-10"></div>
      {/* <Projects />
      <div className="w-0 xl:h-20 h-10"></div> */}
      <Experience />
      <div className="xl:h-20 h-10"></div>
      <Contact />
      <div className="xl:h-20 h-10"></div>
      {/* <Blog />
      <div className="xl:h-20 h-10"></div> */}
    </>
  )
}
