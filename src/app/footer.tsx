import Link from "next/link";
import { WhitePixels } from "./components/whitepixels";
import { LinkedIn } from "./components/linkedin";
import { BlackPixels } from "./components/blackpixels";

function Footer() {
  return (
    <footer className="w-full h-screen xl:relative overflow-clip">
      <BlackPixels />
      <WhitePixels />
      <div className="h-full bg-foreground">
        <div className="flex flex-col justify-between bg-foreground text-background">
          <div className="w-full h-20"></div>
          <div
            className="w-fit mx-2 xl:ml-52 xl:mx-40 h-28 font-bold styro scale-x-150"
            style={{ fontSize: "3.5rem", fontWeight: 900, letterSpacing: "0.01em" }}
          >
            <div className="leading-12">
              <span style={{ letterSpacing: "0.022em" }}>NINE BITS</span>
              <br />
              SYSTEMS
            </div>
          </div>
          <div className="mx-2 xl:mx-40 flex xl:flex-row flex-col gap-y-4">
            <div className="w-full xl:w-1/2">
              <h3 className="font-bold">Small Brand, Large Delivery.</h3>
              <span className="inline-block xl:w-[28rem] text-neutral-400">
                My goal is to support businesses in automating and growing with confidence. I work alongside you to
                create thoughtful data strategies, build reliable cloud infrastructures, and develop systems that just
                work.
              </span>
            </div>
            <div className="w-full xl:w-1/4">
              <ul className="flex flex-col gap-y-2">
                <li className="w-fit group">
                  <Link href={"/"} className="group-hover:border-b border-border">
                    Home
                  </Link>
                </li>
                <li className="w-fit group">
                  <Link href={"/#services"} className="group-hover:border-b border-border">
                    Services
                  </Link>
                </li>
                <li className="w-fit group">
                  <Link href={"/blog"} className="group-hover:border-b border-border">
                    Blog
                  </Link>
                </li>
                <li className="w-fit group">
                  <Link href={"/#about"} className="group-hover:border-b border-border">
                    About
                  </Link>
                </li>
                <li className="w-fit group">
                  <Link href={"/#contact"} className="group-hover:border-b border-border">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full xl:w-1/4 flex flex-col gap-y-2">
              <div>
                <Link href="mailto:info@ninebitssystems.com">info@ninebitssystems.com</Link>
              </div>
              <div>Menton, France.</div>
              <Link href={"https://linkedin.com/"}>
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-0 xl:full invisible xl:visible flex justify-between font-black text-[400px] styro bg-background">
          <div className="absolute -bottom-60 bg-gradient-to-t from-background via-neutral-400 to-neutral-200 text-transparent bg-clip-text">
            N I N E
          </div>
          <div className="absolute -bottom-60 right-0 bg-gradient-to-t from-background via-neutral-400 to-neutral-200 text-transparent bg-clip-text">
            B I T S
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
