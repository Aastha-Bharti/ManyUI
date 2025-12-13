import HeroButton from "@/components/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="  text-white h-screen   w-full">
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      /> */}
      <div className="relative z-10 text-white h-full w-full  flex flex-col justify-center items-center gap-y-10 text-2xl">
        <h1 className="text-6xl font-bold text-textcolor text-shadow-sm ">
          Build Beautiful UI Faster
        </h1>
        <p className="text-sm font-normal max-w-xl text-textcolor text-center leading-tight text-shadow-2xs">
          Launch sleek, responsive UIs in minutes using ready‑to‑use components
          built for speed, simplicity, and scalability.
        </p>
        <div className="flex gap-x-5">
         <Link href="/docs"> <HeroButton className="dark:bg-neutral-100 bg-neutral-800 dark:text-neutral-900">
            Explore Components
          </HeroButton></Link>
          <Link href="/components"><HeroButton className="text-textcolor">Explore Components</HeroButton></Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
