import { cn } from "../utils";

function Squares({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      fill="none"
      className={cn("absolute z-10", className)}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v96h48L.137 48.137l23.885-23.885v47.726h47.955V24.25l23.888 23.886L48 96h48V0H0Zm24.251 24.022L48 .274l23.75 23.748h-47.5Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h96v96H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { Squares };
