import { WhitePixels } from "./components/whitepixels";
import { BlackPixels } from "./components/blackpixels";

function Footer() {
  return (
    <footer className="w-full xl:relative overflow-clip bg-foreground">
      <BlackPixels />
      <WhitePixels />
      <div className="h-10" />
      <span className="xl:px-20 text-background">Copyright </span>
    </footer>
  );
}

export { Footer };
