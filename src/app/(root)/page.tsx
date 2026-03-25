import Hero from "@/section/Hero";
import Features from "@/section/Features";
import ComponentPreview from "@/section/ComponentPreview";
import CTA from "@/section/CTA";
import Footer from "@/section/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <Hero />
        <ComponentPreview />
        
        <Features />
        <Footer />
    </div>
  );
}
