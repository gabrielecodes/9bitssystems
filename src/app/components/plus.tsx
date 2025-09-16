import { cn } from "../utils";

export default function Plus({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#262626"
            className={cn("h-10 w-10 absolute", className)}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
        </svg>
    );
}
