import { WhitePixels } from "./components/whitepixels";

function Footer() {
  return (
    <footer className="w-full h-screen bg-foreground text-background">
      <WhitePixels />
      <div className="flex flex-col justify-between">
        <div className="h-fit font-black text-[230px]">9 BITS SYSTEMS</div>
      </div>
    </footer>
  );
}

export { Footer };
