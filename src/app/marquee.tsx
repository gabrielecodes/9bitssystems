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
    <div className="h-32 mt-20 invisible xl:visible xl:col-start-2 xl:col-end-8 flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent pauseOnHover={false} className="border border-neutral-200" autoFill={false}>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <GoogleCloud fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Kubernetes fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Python fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <TypeScript fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Docker fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Postgres fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Bigquery fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Terraform fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Aws fill={"#00000023"} />
          </MarqueeItem>
          <MarqueeItem className="h-fit w-32 m-2 p-2">
            <Gemini fill={"#00000023"} />
          </MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

export { CustomMarquqee };
