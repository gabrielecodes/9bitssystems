import Link from "next/link";
import { WhitePixels } from "./components/whitepixels";
import { LinkedIn } from "./components/linkedin";

function Footer() {
  return (
    <footer className="w-full h-[calc(100vh-7rem)] bg-foreground text-background relative overflow-clip">
      <WhitePixels />
      <div className="flex flex-col justify-between">
        <div className="w-full h-20"></div>
        <h3
          className="mx-40 h-28 font-bold text-[3.5rem] styro tracking-widest"
          style={{ fontSize: "3.5rem", letterSpacing: "0.09em" }}
        >
          NINE BITS SYSTEMS
        </h3>
        <div className="mx-40 flex">
          <div className="w-1/2">
            <h3 className="font-bold">Small Brand, Large Delivery.</h3>
            <span className="inline-block md:w-[28rem] text-neutral-400">
              We&apos;re passionate about our craft — building strong relationships and delivering the vision our
              clients imagine.
            </span>
          </div>
          <div className="w-1/4">
            <ul className="flex flex-col gap-y-2">
              <li className="w-fit group">
                <Link href={"/"} className="group-hover:border-b border-neutral-200">
                  Home
                </Link>
              </li>
              <li className="w-fit group">
                <Link href={"/"} className="group-hover:border-b border-neutral-200">
                  About
                </Link>
              </li>
              <li className="w-fit group">
                <Link href={"/"} className="group-hover:border-b border-neutral-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4 flex flex-col gap-y-2">
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
      <div className="flex justify-between font-black text-[400px] styro">
        <div className="absolute -bottom-60 bg-gradient-to-t from-background via-neutral-600 to-foreground text-transparent bg-clip-text">
          N I N E
        </div>
        <div className="absolute -bottom-60 right-0 bg-gradient-to-t from-background via-neutral-600 to-foreground text-transparent bg-clip-text">
          B I T S
        </div>
      </div>
    </footer>
  );
}

export { Footer };
