import Link from "next/link";
import PageIntro from "../_components/PageIntro";
const items = [
  ["Building", "AI-powered web products, agent workflows, and scalable MERN applications."],
  ["Learning", "Better patterns for RAG systems, agent orchestration, product design, and reliable deployment."],
  ["Open to", "Select freelance work, product collaborations, and teams building practical AI experiences."],
];
export const metadata = { title: "Now | Chandra Dev Yadav", description: "What Chandra Dev Yadav is building and learning now." };
export default function NowPage() { return <main className="min-h-screen px-6 py-20"><PageIntro eyebrow="Now" title="What I&apos;m focused on right now.">A living snapshot of the work and skills I&apos;m investing in.</PageIntro><div className="mx-auto max-w-4xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.035] px-8">{items.map(([label, text]) => <section key={label} className="grid gap-3 py-8 sm:grid-cols-[10rem_1fr]"><h2 className="font-mono text-sm text-cyan-300">{label}</h2><p className="leading-relaxed text-slate-300">{text}</p></section>)}</div><div className="mx-auto mt-10 max-w-4xl"><Link href="/availability" className="rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">Work together</Link></div></main>; }
