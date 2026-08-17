import { Braces, Cloud, Database, Sparkles } from "lucide-react";
import PageIntro from "../_components/PageIntro";
const groups = [
  { icon: Braces, title: "Build daily", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux / Context"] },
  { icon: Database, title: "Backend & data", items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT authentication", "WebSockets"] },
  { icon: Sparkles, title: "AI product stack", items: ["LLM integration", "AI agents", "Prompt engineering", "RAG", "LangChain / LangGraph", "Vector databases"] },
  { icon: Cloud, title: "Ship & maintain", items: ["GitHub", "Postman", "Vercel", "Render", "Docker basics", "CI/CD practices"] },
];
export const metadata = { title: "Stack | Chandra Dev Yadav", description: "Practical technology stack used by Chandra Dev Yadav." };
export default function StackPage() { return <main className="min-h-screen px-6 py-20"><PageIntro eyebrow="Practical stack" title="Tools chosen for useful, maintainable products.">Technology is a means to a better user experience. These are the tools I use most often.</PageIntro><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">{groups.map(({ icon: Icon, title, items }) => <section key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-8"><Icon className="h-6 w-6 text-cyan-300" /><h2 className="mt-6 text-2xl font-semibold text-white">{title}</h2><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div></section>)}</div></main>; }
