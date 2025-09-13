import Link from "next/link";

function Nav() {
  return (
    <nav className="w-1/2 h-14 px-8 rounded-b-md text-background bg-foreground flex items-center sticky top-0 left-1/2 -translate-x-1/2 z-10">
      <div className="w-full flex items-center justify-between">
        <span className="w-full">Logo</span>
        <ul className="w-full flex items-center gap-x-6 justify-end">
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Nav };
