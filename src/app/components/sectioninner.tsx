import { cn } from "../utils";

function SectionInner({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <section className={cn("w-full h-fit absolute xl:grid xl:grid-cols-12", className)}>{children}</section>;
}

export { SectionInner };
