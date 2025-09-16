import Link from "next/link";
import Plus from "./components/plus";

function Nav() {
  return (
    <nav className="xl:w-1/2 h-14 bg-[url('/bg.jpg')] flex items-center sticky top-4 xl:left-[calc(50%-1px)] xl:-translate-x-1/2 z-20 overflow-clip">
      <Plus className="-left-5 -top-5" />
      <Plus className="left-[calc(100%-1.25rem)] -top-5 z-10" />
      <Plus className="-left-5 top-[calc(100%-1.25rem)]" />
      <Plus className="left-[calc(100%-1.25rem)] top-[calc(100%-1.25rem)] z-10" />
      <div className="w-full h-full ml-4 my-1 border-y border-l border-neutral-200 flex items-center">
        <Link
          href={"/"}
          className="w-10 rounded-md text-4xl font-black text-background bg-foreground styro text-center hover:text-foreground hover:bg-background transition-colors duration-[150ms]"
        >
          N
        </Link>
      </div>
      <div className="w-full h-full mr-4 border-y border-neutral-200 flex items-center justify-between">
        <ul className="w-full flex items-center gap-x-6 justify-end">
          <li className="border-b border-background hover:border-foreground">
            <Link href={"/#services"}>Services</Link>
          </li>
          <li className="border-b border-background hover:border-foreground">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="border-b border-background hover:border-foreground">
            <Link href={"#"}>About</Link>
          </li>
          <li className="border-b border-background hover:border-foreground">
            <Link href={"/#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Nav };
