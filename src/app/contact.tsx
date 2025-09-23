import { Plus } from "./components/plus";
import Image from "next/image";
import ContactForm from "./components/form";
import Link from "next/link";
import { LinkedIn } from "./components/linkedin";

export default function Contact() {
  return (
    <>
      <div className="h-20 border-t border-border bg-background"></div>
      <h2 className="w-fit px-2 text-center inline-block transform bg-foreground text-background font-semibold">
        Contact Me
      </h2>

      <div id="contact" className="xl:my-20 my-8 xl:mt-20 flex relative bg-background">
        <Image src="/glass.jpg" alt="Abstract Art" fill className="absolute object-cover" />
        <div className="w-full xl:py-20 flex justify-center items-center border-y border-border relative">
          <Plus className="size-6 -left-3 -top-3" />
          <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10" />
          <Plus className="size-6 -left-3 top-[calc(100%-0.75rem)]" />
          <Plus className="size-6 left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-10" />

          <div className="xl:w-2/3 h-fit flex relative xl:overflow-visible overflow-x-clip ">
            <div className="w-full h-fit xl:p-12 p-6 m-auto flex xl:flex-row flex-col items-start justify-center gap-x-4 backdrop-blur-md rounded-2xl bg-background/75">
              <div className="w-full h-full">
                <h2 className="mb-6 leading-10">
                  Let&apos;s talk about your idea. <br />
                  There are no obligations.
                </h2>
                <p className="mb-4">
                  I craft solutions that prioritize your goals, drawing on almost a decade of experience as a data
                  engineering and analytics in the financial and service industries. I build systems that enable your
                  teams to move faster — not lock them into complexity. Many businesses are dragged down by unreliable
                  technology and broken processes &mdash; I help you untangle the complexity and build systems that
                  actually work for you.
                </p>
                <p className="mb-2">Find me also here:</p>
                <Link href={"https://linkedin.com/"}>
                  <LinkedIn />
                </Link>
              </div>
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
