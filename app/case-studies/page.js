import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ProjectGallery from "../_components/ProjectGallery";

const studies = [
  {
    name: "MyGentic Brain",
    label: "AI knowledge and automation platform",
    problem: "Teams need a faster way to surface useful context from growing knowledge bases and turn that context into action.",
    approach: "A product direction centred on retrieval-augmented generation, custom LLM integration, and agent-powered workflows - designed so intelligent assistance feels useful rather than complicated.",
    role: "AI product engineering · Full-stack development",
    stack: ["Next.js", "Node.js", "MongoDB", "LLM integration", "RAG"],
    link: "https://app.mygentic.io",
    screenshots: ["/MyGentic-1.png", "/MyGentic-2.png", "/MyGentic-3.png", "/MyGentic-4.png"],
  },
  {
    name: "AI District",
    label: "AI agent portal and marketplace",
    problem: "People exploring AI tools need an understandable way to discover, deploy, and manage agents without navigating a fragmented ecosystem.",
    approach: "A central portal that brings together agent discovery, practical automation use cases, and a clean interface for engaging with AI-powered tools.",
    role: "Full-stack development · AI integration",
    stack: ["React", "Express", "OpenAI API", "Tailwind CSS"],
    link: "https://aidistrictagents.com",
    screenshots: ["/Aidistrict-1.png", "/Aidistrict-2.png", "/Aidistrict-3.png"],
  },
  {
    name: "Zil App",
    label: "Service-provider platform",
    problem: "A service marketplace needs responsive interfaces, scalable features, and close coordination across product, design, and engineering.",
    approach: "A React-based experience built with reusable UI patterns and state management, paired with delivery leadership, performance work, and collaboration across the team.",
    role: "React development · Team coordination",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.zilcommerce.flutter_mainapp&hl=en",
    screenshots: ["/ZIL-1.jpg", "/ZIL-2.jpg", "/ZIL-3.jpg", "/ZIL-4.jpg", "/ZIL-5.jpg", "/ZIL-6.jpg", "/ZIL-7.jpg", "/ZIL-8.jpg", "/zil-play.png"],
  },
];

export const metadata = {
  title: "Case Studies | Chandra Dev Yadav",
  description: "Selected AI and web-product case studies by Chandra Dev Yadav.",
};

export default function CaseStudies() {
  return (
    <div className="relative min-h-screen overflow-hidden py-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <main className="relative z-10 mx-auto max-w-6xl px-6">
        <header className="max-w-3xl py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Selected case studies</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">Products built around real work, not just technology.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">A concise view of the product problems, engineering approach, and responsibilities behind selected work. Specific commercial metrics and internal details remain confidential.</p>
        </header>

        <div className="space-y-8 pb-16">
          {studies.map((study, index) => (
            <article key={study.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
              <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                <div className="border-b border-white/10 bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-transparent p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="font-mono text-xs text-cyan-300">0{index + 1}</p>
                  <p className="mt-10 text-sm font-medium text-slate-400">{study.label}</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">{study.name}</h2>
                  <p className="mt-6 text-sm leading-relaxed text-slate-300">{study.role}</p>
                  <a href={study.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-100">Visit product <ArrowUpRight className="h-4 w-4" /></a>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div><h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Opportunity</h3><p className="mt-3 leading-relaxed text-slate-300">{study.problem}</p></div>
                    <div><h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Approach</h3><p className="mt-3 leading-relaxed text-slate-300">{study.approach}</p></div>
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-6"><p className="text-sm font-semibold text-white">Core tools</p><div className="mt-3 flex flex-wrap gap-2">{study.stack.map((tool) => <span key={tool} className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-100"><CheckCircle2 className="h-3 w-3" />{tool}</span>)}</div></div>
                </div>
              </div>
              <ProjectGallery project={study.name} screenshots={study.screenshots} />
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
