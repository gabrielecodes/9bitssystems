import Link from "next/link";
import ArrowRight from "./icons/arrowright";

function ReadMoreButton() {
  return (
    <p className="h-20 ml-2 col-start-2 col-span-6 flex items-center overflow-clip">
      <Link href={"#"} className="w-1/2 h-full font-semibold flex items-center justify-center group-hover/container:border border-border transition-all duration-100 ease-in-out relative">
        <span className="w-12 h-1/2 flex items-center opacity-0 group-hover/container:opacity-100 absolute -left-6 top-1/2 -translate-y-1/2 group-hover/container:left-4 transition-all duration-200 ease-in-out"><ArrowRight className="size-6" /></span>
        <span className="opacity-0 group-hover/container:opacity-100 group-hover/container:text-foreground transition-all duration-200 ease-in-out">
          Read More
        </span>
      </Link>
    </p>
  );
}

export { ReadMoreButton };
