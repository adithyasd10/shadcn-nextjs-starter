import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
     <HeroSection/>
    </div>
  );
}
