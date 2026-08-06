import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyExpertise from "@/components/MyExpertise";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative bg-[#22333B]">
        <Hero />
        <div className="relative z-20 bg-[#22333B]">
          <MyExpertise />
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
