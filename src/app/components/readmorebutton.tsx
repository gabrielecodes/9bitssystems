import Link from "next/link";

function ReadMoreButton() {
  return (
    <div className="w-10 h-10 relative z-50 rounded-full bg-emerald-500 transition-all duration-200 ease-in-out left-[120%] opacity-0 group-hover/container:opacity-100 group-hover/container:left-[90%]">
      <Link href={"#"} className="pt-2 flex items-center justify-center text-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </Link>
    </div>
  );
}

export { ReadMoreButton };
