import { cn } from "../utils";

function SectionInner({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <section className={cn("w-full h-fit absolute flex flex-col items-center xl:grid xl:grid-cols-8", className)}>
      {children}
    </section>
  );
}

export { SectionInner };
