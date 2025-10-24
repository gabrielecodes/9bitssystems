import { Hero } from "./hero";
import Services from "./services/page";
import Experience from "./about/page";
// import Blog from "./blog/page";
import Contact from "./contact/page";
import Projects from "./projects/projects";
import { Footer } from "./footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-0 xl:h-20 h-10"></div>
      <Services />
      <div className="w-0 xl:h-20 h-10"></div>
      <Projects />
      <div className="w-0 xl:h-20 h-10"></div>
      <Experience />
      <div className="xl:h-20 h-10"></div>
      <Contact />
      <div className="xl:h-40 h-10"></div>
      <Footer />
      {/* <Blog />
      <div className="xl:h-20 h-10"></div> */}
    </>
  );
}
