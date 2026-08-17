import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "../_components/PageIntro";

const posts = [
  { title: "What makes an AI assistant genuinely useful?", tag: "AI product design", excerpt: "A practical checklist for creating assistants that know their role, have the right context, and make it easy for a human to stay in control." },
  { title: "Choosing the right shape for a RAG experience", tag: "RAG systems", excerpt: "The interface matters as much as retrieval quality. This note looks at when a chat UI, search experience, or workflow is the better choice." },
  { title: "Shipping polished React products without slowing down", tag: "Frontend engineering", excerpt: "A simple product-engineering mindset for reusable components, performance, and interfaces that stay maintainable as a product grows." },
];
export const metadata = { title: "Writing | Chandra Dev Yadav", description: "Notes on AI products, full-stack engineering, and interface design." };
export default function WritingPage() { return <main className="min-h-screen px-6 py-20"><PageIntro eyebrow="Writing" title="Notes from building products.">Short, practical thoughts on AI systems, web engineering, and building things people can actually use.</PageIntro><div className="mx-auto grid max-w-5xl gap-5">{posts.map((post) => <article key={post.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{post.tag}</p><h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2><p className="mt-4 max-w-3xl leading-relaxed text-slate-400">{post.excerpt}</p><Link href="/contactme" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-100">Discuss this topic <ArrowRight className="h-4 w-4" /></Link></article>)}</div><p className="mx-auto mt-8 max-w-5xl text-sm text-slate-500">Publishing is intentionally lightweight for now: these are topic previews that can become full MDX articles when you are ready to write them.</p></main>; }
