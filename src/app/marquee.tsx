import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./components/marquee";

function CustomMarquqee() {
  return (
    <div className="h-32 mt-20 col-start-2 col-end-8 flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent pauseOnHover={false}>
          {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem className="h-32 w-32" key={index}>
              <div className="w-full h-full bg-neutral-300"></div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

export { CustomMarquqee };
