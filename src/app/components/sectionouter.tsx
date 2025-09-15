import { cn } from "../utils";

function SectionOuter({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-screen min-h-screen h-[130rem] xl:h-[40rem] xl:mx-0 relative xl:grid xl:grid-cols-8 [&>*:not(:last-child)]:border-r *:border-neutral-200 border-t border-neutral-200",
        className
      )}
    >
      {new Array(8).fill(null).map((_, idx) => (
        <div key={idx}></div>
      ))}
      {children}
    </div>
  );
}

export { SectionOuter };
