import { cn } from "../utils";

function SectionOuter({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-screen h-[130rem] xl:h-[65rem] xl:mx-0 relative xl:grid xl:grid-cols-12 *:first:border-r *:border-border",
        className
      )}
    >
      {new Array(11).fill(null).map((_, idx) => (
        <div key={idx}></div>
      ))}
      <div className="border-l border-border"></div>
      {children}
    </div>
  );
}

export { SectionOuter };
