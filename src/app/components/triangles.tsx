function Triangles() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="none" className="absolute z-10">
      <g fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path d="M96 0H48l48 48V0ZM48 0H0l48 48V0Zm0 48H0l48 48V48Zm48 0H48l48 48V48Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h96v96H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { Triangles };
