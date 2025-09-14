import { cn } from "../utils";

function SectionOuter({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "min-h-screen relative grid grid-cols-8 [&>*:not(:last-child)]:border-r *:border-neutral-200 border-t border-neutral-200",
        className
      )}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {children}
    </div>
  );
}

export { SectionOuter };
