import Link from "next/link";
import { Plus } from "./components/plus";

function Nav() {
  return (
    <nav className="xl:w-[calc(50%+2px)] h-14 flex items-center sticky xl:top-4 top-0 border border-border xl:left-1/2 xl:-translate-x-1/2 z-100 overflow-clip text-foreground bg-background">
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
        <ul className="w-full flex items-center gap-x-6 justify-end">
          <li className="border-b border-foreground hover:border-background">
            <Link href={"/#services"} className="flex items-center">
              Services <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
          <li className="border-b border-foreground hover:border-background">
            <Link href={"/blog"} className="flex items-center">
              Blog
              <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
          <li className="border-b border-foreground hover:border-background">
            <Link href={"#"} className="flex items-center">
              About <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
          <li className="border-b border-foreground hover:border-background">
            <Link href={"/#contact"} className="flex items-center">
              Contact <Plus className="static size-5 p-0 ml-1 mt-1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Nav };
