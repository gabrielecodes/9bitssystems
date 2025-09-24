import Link from "next/link";
import { Plus } from "./components/plus";

function Nav() {
  return (
    <>
      <TopNav />
      <SideNav />
    </>
  );
}

function TopNav() {
  return (
    <nav className="xl:hidden xl:w-[calc(50%-2.5rem)] w-full h-14 flex items-center sticky xl:top-4 top-0 border border-border xl:left-1/2 xl:-translate-x-1/2 z-100 overflow-clip text-foreground bg-background">
      <Plus className="text-neutral-500 -left-5 -top-5 xl:visible invisible" />
      <Plus className="text-neutral-500 left-[calc(100%-1.25rem)] -top-5 z-10 xl:visible invisible" />
      <Plus className="text-neutral-500 -left-5 top-[calc(100%-1.25rem)] xl:visible invisible" />
      <Plus className="text-neutral-500 left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10 xl:visible invisible" />

      <div className="w-full h-full my-1 pl-4  flex items-center">
        <Link
          href={"/"}
          className="w-10 rounded-m text-4xl font-black bg-background text-foreground styro text-center hover:text-background hover:bg-foreground transition-colors duration-150 scale-x-150"
        >
          N
        </Link>
      </div>
      <div className="w-full h-full pr-4 flex items-center justify-between">
        <ul className="w-full h-full flex items-center gap-x-6 justify-end ">
          <li className="h-full xl:flex hidden">
            <Link href={"/#services"} className="flex items-center">
              Services
              <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
          <li className="h-full xl:flex hidden">
            <Link href={"/blog"} className="flex items-center">
              Blog
              <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
          <li className="h-full xl:flex hidden">
            <Link href={"/#about"} className="flex items-center">
              About <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link href={"/#contact"} className="flex items-center">
              Contact <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function SideNav() {
  return (
    <nav className="w-60 absolute top-26 left-full -translate-x-[calc(1.5*100%)] text-foreground z-100 group overflow-hidden bg-background">
      <div className="w-full h-full relative overflow-hidde z-100">
        <span className="z-100 w-20 h-[1px] absolute -left-20 top-0 bg-gradient-to-r to-neutral-300 transition-all group-hover:left-full duration-[400ms] ease-in-out"></span>
        <span className="z-100 w-20 h-[1px] absolute left-full top-[calc(100%-1px)] bg-gradient-to-r from-neutral-300 transition-all group-hover:-left-20 duration-[400ms] ease-in-out"></span>
        <span className="z-100 w-[1px] h-20 absolute left-[calc(100%-1px)] -top-20 bg-gradient-to-b to-neutral-300 transition-all group-hover:top-full duration-[400ms] ease-in-out"></span>
        <span className="z-100 w-[1px] h-20 absolute left-0 top-full bg-gradient-to-b from-neutral-300 transition-all group-hover:-top-20 duration-[400ms] ease-in-out"></span>
        <ul className="w-full h-full p-4 flex flex-col items-start justify-center relative overflow-hidden bg-background">
          <Plus className="size-6 -left-3 -top-3" />
          <Plus className="size-6 left-[calc(100%-0.75rem)] -top-3 z-10" />
          <Plus className="size-6 -left-3 top-[calc(100%-0.75rem)]" />
          <Plus className="size-6 left-[calc(100%-0.75rem)] top-[calc(100%-0.75rem)] z-10" />

          <li className="w-full h-full xl:flex hidden">
            <Link href={"/#services"} className="w-full h-10 flex items-center group/services">
              <span>SERVICES</span>
              <span className="w-8 h-8 ml-3 absolute left-full flex justify-center border border-dashed rounded-full group-hover/services:border-foreground transition-all duration-[400ms] ease-in-out text-neutral-700 group-hover/services:text-neutral-300 group-hover/services:left-24">
                <span>&rarr;</span>
              </span>
            </Link>
          </li>
          <li className="w-full h-full xl:flex hidden">
            <Link href={"/blog"} className="w-full h-10 flex items-center group/blog">
              <span>BLOG</span>
              <span className="w-8 h-8 ml-3 absolute left-full flex justify-center border border-dashed rounded-full group-hover/blog:border-foreground transition-all duration-[400ms] ease-in-out text-neutral-700 group-hover/blog:text-neutral-300 group-hover/blog:left-24">
                <span>&rarr;</span>
              </span>
            </Link>
          </li>
          <li className="w-full h-full xl:flex hidden">
            <Link href={"/#about"} className="w-full h-10 flex items-center group/about">
              <span>ABOUT</span>
              <span className="w-8 h-8 ml-3 absolute left-full flex justify-center border border-dashed rounded-full group-hover/about:border-foreground transition-all duration-[400ms] ease-in-out text-neutral-700 group-hover/about:text-neutral-300 group-hover/about:left-24">
                <span>&rarr;</span>
              </span>
            </Link>
          </li>
          <li className="w-full h-full flex items-center">
            <Link href={"/#contact"} className="w-full h-10 flex items-center group/contact">
              <span>CONTACT</span>
              <span className="w-8 h-8 ml-3 absolute left-full flex justify-center border border-dashed rounded-full group-hover/contact:border-foreground transition-all duration-[400ms] ease-in-out text-neutral-700 group-hover/contact:text-neutral-300 group-hover/contact:left-24">
                <span>&rarr;</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Nav };
