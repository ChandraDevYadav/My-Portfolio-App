import Link from "next/link";
import { ArrowUpRight, Bot, DatabaseZap, LayoutDashboard, Rocket } from "lucide-react";
import PageIntro from "../_components/PageIntro";

const services = [
  { icon: Bot, title: "AI agents & assistants", text: "Useful, product-ready assistants that retrieve context, guide users, and automate multi-step work.", fit: "Best for teams with repetitive knowledge or support workflows." },
  { icon: DatabaseZap, title: "RAG & knowledge systems", text: "Secure retrieval experiences that help people ask better questions of their documents and internal knowledge.", fit: "Best for knowledge bases, operations, and internal tools." },
  { icon: LayoutDashboard, title: "Full-stack product builds", text: "Responsive Next.js and MERN applications with APIs, authentication, dashboards, payments, and dependable deployment.", fit: "Best for MVPs, SaaS platforms, and customer portals." },
  { icon: Rocket, title: "Product engineering support", text: "Hands-on feature delivery, UI refinement, performance work, and engineering collaboration for an existing product.", fit: "Best for product teams needing focused execution." },
];

export const metadata = { title: "Services | Chandra Dev Yadav", description: "AI product engineering and full-stack development services." };

export default function ServicesPage() {
  return <main className="min-h-screen px-6 py-20"><PageIntro eyebrow="Services" title="From an ambitious idea to a product people can use.">I help teams shape, build, and ship thoughtful AI-powered web experiences.</PageIntro><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">{services.map(({ icon: Icon, title, text, fit }) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:border-cyan-400/30"><Icon className="h-7 w-7 text-cyan-300" /><h2 className="mt-8 text-2xl font-semibold text-white">{title}</h2><p className="mt-4 leading-relaxed text-slate-300">{text}</p><p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-slate-400">{fit}</p></article>)}</div><div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-5 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8"><div><h2 className="text-2xl font-semibold text-white">Have a project in mind?</h2><p className="mt-2 text-slate-300">Start with the customer problem and the outcome you want to create.</p></div><Link href="/availability" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">Discuss a project <ArrowUpRight className="h-4 w-4" /></Link></div></main>;
}
