import { Instrument_Serif } from "next/font/google";
import Link from "next/link";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

function Footer() {
  return (
    <footer className="w-full h-80 xl:block hidden">
      <div className="flex w-full h-full relative">
        <div className="h-[80%]  text-center absolute left-1/2 top-1/2 transform -translate-1/2 flex flex-col items-center justify-between">
          <div>
            <div className="w-full styro text-5xl scale-x-250 tracking-wide">NINE BITS</div>
            <div className="text-xl -mt-2">
              Build
              <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
                smarter,
              </span>
              Scale
              <span className={`${serif.className} mx-1 inline-block`} style={{ fontSize: "1.8rem" }}>
                faster
              </span>
            </div>
          </div>
          <ul className="flex gap-x-10">
            <li className="h-full flex items-center">
              <Link
                href={"#services"}
                className="flex items-center border-b border-transparent hover:border-foreground transition-all"
              >
                HOME
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                href={"#services"}
                className="flex items-center border-b border-transparent hover:border-foreground transition-all"
              >
                SERVICES
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                href={"#projects"}
                className="flex items-center border-b border-transparent hover:border-foreground transition-all"
              >
                PROJECTS
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                href={"#about"}
                className="flex items-center border-b border-transparent hover:border-foreground transition-all"
              >
                ABOUT
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                href={"#contact"}
                className="flex items-center border-b border-transparent hover:border-foreground transition-all"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="text-[#bbb]">&copy; 2025. Made with &#10084; without AI</div>
        </div>
        <div className="w-1/2 h-full neon-gradient1 neon-shadow"></div>
        <div className="w-1/2 h-full neon-gradient2 neon-shadow"></div>
      </div>
    </footer>
  );
}

export { Footer };
