import HeroSection from "@/components/landing/HeroSection";
import MySkills from "@/components/landing/Skills";

export default function HomePage() {
  return (
    <div className="mt-[90px] w-[90%] mx-auto">
      <HeroSection />
      <MySkills />
    </div>
  );
}
