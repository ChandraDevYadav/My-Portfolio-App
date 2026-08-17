import { Beaker, Code2, Sparkles } from "lucide-react";
import PageIntro from "../_components/PageIntro";
import WorkflowDemo from "../_components/WorkflowDemo";

const experiments = [
  { icon: Sparkles, title: "Agent workflow patterns", text: "Exploring how AI agents can retrieve context, act safely, and keep a human in the loop." },
  { icon: Code2, title: "Product UI experiments", text: "Small interface explorations for dashboards, onboarding, and useful AI interactions." },
  { icon: Beaker, title: "Fast technical prototypes", text: "Testing ideas quickly with React, Next.js, APIs, and pragmatic product constraints." },
];
export const metadata = { title: "Lab | Chandra Dev Yadav", description: "AI product experiments and technical explorations." };
export default function LabPage() { return <main className="min-h-screen px-6 py-20"><PageIntro eyebrow="The Lab" title="Experiments become better product instincts.">A small public space for the ideas, interaction patterns, and AI workflows I am exploring.</PageIntro><div className="mx-auto max-w-6xl"><WorkflowDemo /><div className="mt-8 grid gap-5 md:grid-cols-3">{experiments.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"><Icon className="h-6 w-6 text-indigo-300" /><h2 className="mt-8 text-xl font-semibold text-white">{title}</h2><p className="mt-3 leading-relaxed text-slate-400">{text}</p></article>)}</div></div></main>; }
