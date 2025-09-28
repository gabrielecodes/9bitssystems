import ContactForm from "../components/form";
import { Instrument_Serif } from "next/font/google";
import { LinkedIn } from "../components/linkedin";
import Link from "next/link";
import Image from "next/image";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full xl:h-screen xl:p-10 xl:flex xl:flex-col text-foreground selection:bg-blue-neon selection:text-background"
    >
      <h1
        className={`${serif.className} w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold`}
      >
        Contact
      </h1>

      <div id="contact" className="xl:w-2/3 w-full xl:mt-20 mt-10 p-4 xl:px-0 mx-auto flex justify-center items-center">
        <div className="w-full h-fit xl:p-12 m-auto flex xl:flex-row flex-col items-start justify-center gap-x-4">
          <div className="w-full h-full">
            <h2 className="xl:block hidden mb-6 leading-10 text-foreground">
              Let&apos;s talk about your idea. <br />
              There are no obligations.
            </h2>
            <h2 className="xl:hidden block mb-6 leading-10 text-foreground" style={{ fontSize: "1.7rem" }}>
              Let&apos;s talk about your idea. <br />
              There are no obligations.
            </h2>
            <p className="mb-4">
              I craft solutions that prioritize your goals, drawing on almost a decade of experience as a data engineer
              and analyst in the financial and service industries. I build effective systems that enable your teams to
              move faster freeing them from five-hour video calls and bloated slide decks. <br />
              <br /> Many businesses are dragged down by unreliable technology and broken processes. I help you get
              clarity about your technology and build systems that actually work for you.
            </p>
            <p>You can also find me here:</p>
            <div className="flex">
              <Link href={"https://www.linkedin.com/in/gabriele-costanza/"} target="_blank">
                <LinkedIn className="mt-1" />
              </Link>
              <Link href={"https://substack.com/@gabrielecodes"} target="_blank">
                <Image src="/substack.png" alt="Substack logo" width={48} height={48} priority={true} />
              </Link>
            </div>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
