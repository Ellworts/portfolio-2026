import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyExpertise from "@/components/MyExpertise";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import "../components/general.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col bg-[#22333B]">
        <Hero />
        <MyExpertise />
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
