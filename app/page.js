import ContactMe from "./_components/ContactMe/ContactMe";
import Education from "./_components/Education";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import Languages from "./_components/Languages";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills/Skills";
import WorkExperience from "./_components/WorkExperince/WorkExperience";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-blue-300 ">
      <div className="container mx-3">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Languages />
        <WorkExperience />
        <ContactMe />
      </div>
    </div>
  );
}
