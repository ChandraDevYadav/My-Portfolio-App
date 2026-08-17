import ContactMe from "./_components/ContactMe/ContactMe";
import Education from "./_components/Education";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import Languages from "./_components/Languages";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills/Skills";
import WorkExperience from "./_components/WorkExperince/WorkExperience";
import GithubCalendarSection from "./_components/GithubCalendar/GithubCalendarSection";
import "./globals.css";
import AiAgentBuilder from "./_components/AiAgentBuilder/AiAgentBuilder";
import ProofStrip from "./_components/ProofStrip";
import BuildProcess from "./_components/BuildProcess";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <ProofStrip />
        <AiAgentBuilder />
        <Skills />
        <Projects />
        <BuildProcess />
        <GithubCalendarSection />
        <Education />
        <Languages />
        <WorkExperience />
        <ContactMe />
      </div>
    </div>
  );
}
