import { BentoHero } from "@/section/BentoHero";
import Hero from "@/section/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        
       <Hero></Hero>
       <div>
        
       <BentoHero />
       </div>
    </div>
  );
}
