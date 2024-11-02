// import Hero from "@/components/hero";
import Image from "next/image";
import transparency from "../../public/assets/transparency.png";
import googleplay from "../../public/svg/googleplay.svg";
import appstore from "../../public/svg/appstore.svg";
export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="bg-[#27CD40] grid grid-cols-2 place-items-center lg:gap-4 p-20 md:p-10 sm:p-4">
        <Image src={transparency} alt="transparency" />
        <div className="text-white space-y-8 md:space-y-4 sm:space-y-2">
          <h1 className="font-bold text-4xl md:text-3xl sm:text-2xl">
            Experience our transparent budget spending process
          </h1>
          <p className="font-medium text-base">
            designed to eliminate waste and promote efficiency. By incorporating
            empiricism and lean thinking, we ensure your budget is optimized and
            effectively managed throughout your project.
          </p>
          <div className="flex gap-4 ">
            <Image
              src={googleplay}
              alt={"googleplay"}
              className="md:w-32 sm:w-24"
            />
            <Image
              src={appstore}
              alt={"appstore"}
              className="md:w-32 sm:w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
