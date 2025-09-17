import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./components/marquee";
import GoogleCloud from "./components/icons/gcp";
import Kubernetes from "./components/icons/kubernetes";

const Icons = [GoogleCloud, Kubernetes];

function CustomMarquqee() {
  return (
    <div className="h-32 mt-20 invisible xl:visible xl:col-start-2 xl:col-end-8 flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent pauseOnHover={false} className="border border-neutral-200" autoFill={false}>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <GoogleCloud />
          </MarqueeItem>
          {/* {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem className="h-32 w-32 bg-[url('/bg.jpg')] m-0 px-2" key={index}>
            </MarqueeItem>
          ))} */}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

export { CustomMarquqee };
