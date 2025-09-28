import { cn } from "../utils";

function ReadMoreButton({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "w-10 h-10 relative z-50 rounded-full bg-blue-neon transition-all duration-300 ease-in-out left-[115%] group-hover/container:left-[90%]",
        className
      )}
    >
      {children}
    </div>
  );
}

export { ReadMoreButton };
