import HeroSection from "@/components/landing/HeroSection";
import MySkills from "@/components/landing/Skills";

export default function HomePage() {
  return (
    <div className="mt-[90px] md:w-[90%] w-full mx-auto">
      <HeroSection />
      <MySkills />
    </div>
  );
}
