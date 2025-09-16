import Link from "next/link";

function ReadMoreButton() {
  return (
    <p className="h-20 ml-2 col-start-2 col-span-6 flex items-center">
      <Link href={"#"} className="font-semibold border-b border-transparent">
        <span className="inline-block -skew-x-12 border border-foreground hover:bg-foreground hover:text-background transition-color duration-200 ease-in-out">
          <span className="px-2 py-1 inline-block skew-x-12">&#8627;&ensp;Read More</span>
        </span>
      </Link>
    </p>
  );
}

export { ReadMoreButton };
