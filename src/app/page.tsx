import Experience from "@/components/landing/Expericence";
import GetInTouch from "@/components/landing/getInTouch";
import HeroSection from "@/components/landing/HeroSection";
import MyProjects from "@/components/landing/MyProjects";
import MySkills from "@/components/landing/Skills";

export default function HomePage() {
  return (
    <div className="mt-[90px] md:w-[90%] w-full mx-auto">
      <HeroSection />
      <MySkills />
      <Experience />
      <MyProjects />
      <GetInTouch />
    </div>
  );
}
