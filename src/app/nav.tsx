import Link from "next/link";

function Nav() {
  return (
    <nav className="w-full xl:w-1/2 h-14 px-8 xl:rounded-b-md text-background bg-foreground flex items-center sticky top-0 xl:left-1/2 xl:-translate-x-1/2 z-20">
      <div className="w-full flex items-center justify-between">
        <Link
          href={"#"}
          className="w-10 rounded-md text-4xl font-black text-foreground bg-background styro text-center hover:text-background hover:bg-foreground transition-colors duration-[150ms]"
        >
          N
        </Link>
        <ul className="w-full flex items-center gap-x-6 justify-end">
          <li className="border-b border-foreground hover:border-background">
            <Link href={"#"}>Services</Link>
          </li>
          <li className="border-b border-foreground hover:border-background">
            <Link href={"#"}>About</Link>
          </li>
          <li className="border-b border-foreground hover:border-background">
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Nav };
