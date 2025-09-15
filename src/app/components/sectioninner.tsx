import { cn } from "../utils";

function SectionInner({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <section className={cn("w-screen absolute flex flex-col items-center xl:grid grid-cols-8 gap-x-4", className)}>{children}</section>;
}

export { SectionInner };
