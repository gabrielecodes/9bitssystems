import ContactForm from "../components/form";
import { Instrument_Serif } from "next/font/google";
import { LinkedIn } from "../components/linkedin";
import Link from "next/link";

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

      <div id="contact" className="xl:w-2/3 w-full xl:mt-20 p-4 xl:px-0 mx-auto flex justify-center items-center">
        <div className="w-full h-fit xl:p-12 m-auto flex xl:flex-row flex-col items-start justify-center gap-x-4">
          <div className="w-full h-full">
            <h2 className="mb-6 leading-10 text-foreground">
              Let&apos;s talk about your idea. <br />
              There are no obligations.
            </h2>
            <p className="mb-4">
              I craft solutions that prioritize your goals, drawing on almost a decade of experience as a data
              engineering and analytics in the financial and service industries. I build systems that enable your teams
              to move faster — not lock them into complexity. Many businesses are dragged down by unreliable technology
              and broken processes &mdash; I help you untangle the complexity and build systems that actually work for
              you.
            </p>
            You can also find me here:
            <Link href={"https://www.linkedin.com/in/gabriele-costanza/"} target="_blank">
              <LinkedIn />
            </Link>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
