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
    <div className="xl:w-2/3 flex flex-col mx-auto">
      <div className="mb-8 flex items-start gap-x-8">
        <div className="w-1/4 h-62 border border-border rounded-md"></div>
        <div className="w-3/4">
          <h2>Hi, I&apos;m Gabriele.</h2>
          <p>
            I&apos;m a data engineer and architect with nearly a decade of experience helping teams—from startups to
            fintech firms—build tools they can actually rely on.
            <br />
            <br />I focus on practical solutions that align with your goals, streamline your workflows, and deliver real
            value.
            <br />
            <br />
            If your tech feels like it&apos;s holding you back, I can help untangle the mess and put better systems in
            place—ones that work with you, not against you.
          </p>
        </div>
      </div>
      <div className="w-full xl:h-32 size-full items-center justify-center">
        <p className="w-full mb-4">Some of the technologies I use</p>
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
    </div>
  );
}

export { CustomMarquqee };
