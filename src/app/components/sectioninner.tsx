import { cn } from "../utils";

function SectionInner({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <section className={cn("w-full h-full absolute grid grid-cols-8 gap-x-4", className)}>{children}</section>;
}

export { SectionInner };
