import { Plus } from "./components/plus";
import ContactForm from "./components/form";

export default function Contact() {
  return (
    <>
      <div id="contact" className="h-20 xl:col-span-8"></div>
      <div className="h-20 col-start-2 col-span-6 flex items-center xl:grid xl:grid-cols-6">
        <h2 className="w-full mx-auto xl:col-start-1 xl:col-span-1 text-center inline-block transform bg-foreground text-background font-semibold">
          Contact Me
        </h2>
      </div>

      <div className="mt-20 xl:col-start-3 xl:col-span-4 gap-y-0">
        <div className="w-full bg-background border-r border-y border-neutral-200 flex relative xl:overflow-visible overflow-x-clip">
          <Plus className="-left-5 -top-5" />
          <Plus className="left-[calc(100%-1.25rem)] -top-5" />
          <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
          <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)]" />
          <div className="w-full p-10 flex items-center justify-center bg-neutral-100">
            <div className="w-full h-full">
              <h2>Get in touch, there are no obligations.</h2>
              <h3>Tell us about your idea.</h3>
              <div className="w-full mt-8 border border-neutral-200 bg-background">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
