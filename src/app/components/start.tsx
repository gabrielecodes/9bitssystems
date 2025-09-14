function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="none" className="absolute z-10">
      <g fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path d="M48 0H.004v48A47.996 47.996 0 0 0 48 .005 47.996 47.996 0 0 0 95.996 48V0H48Zm0 95.996A47.996 47.996 0 0 0 .004 48v48h95.993V48A47.996 47.996 0 0 0 48 95.996Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h96v96H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { Star };
