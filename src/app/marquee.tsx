import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./components/marquee";
import GoogleCloud from "./components/icons/gcp";
import Kubernetes from "./components/icons/kubernetes";
import Python from "./components/icons/python";
import TypeScript from "./components/icons/typescripts";
import Docker from "./components/icons/docker";
import Postgres from "./components/icons/postgres";
import Bigquery from "./components/icons/bigquery";
import Terraform from "./components/icons/terraform";
import Aws from "./components/icons/aws";
import Gemini from "./components/icons/gemini";

function CustomMarquqee() {
  return (
    <div className="xl:w-2/3 w-full xl:h-32 invisible xl:visible flex mx-auto size-full items-center justify-center">
      <Marquee className="bg-transparent">
        <MarqueeFade side="left" className="bg-gradient-to-r from-background" />
        <MarqueeFade side="right" className="bg-gradient-to-l from-background" />
        <MarqueeContent pauseOnHover={false} autoFill={false} speed={20} className="bg-transparent">
          <MarqueeItem className="h-fit w-32 m-2 p-2 bg-transparent">
            <GoogleCloud fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2 bg-transparent">
            <Kubernetes fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Python fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <TypeScript fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Docker fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Postgres fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Bigquery fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Terraform fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Aws fill={"#979797"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Gemini fill={"#979797"} />
          </MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

export { CustomMarquqee };
