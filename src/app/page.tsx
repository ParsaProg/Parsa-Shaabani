import Experience from "@/components/landing/Expericence";
import GetInTouch from "@/components/landing/getInTouch";
import HeroSection from "@/components/landing/HeroSection";
import MyProjects from "@/components/landing/MyProjects";
import MySkills from "@/components/landing/Skills";

export default function HomePage() {
  return (
    <div className="mt-[90px] [@media(max-width:1200px)]:w-[90%] [@media(min-width:1400px)]:w-[1400px] w-[80%] mx-auto">
      <HeroSection />
      <MySkills />
      <Experience />
      <MyProjects />
      <GetInTouch />
    </div>
  );
}
