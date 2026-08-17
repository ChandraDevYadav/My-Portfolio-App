import { Compass, Layers3, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, number: "01", title: "Clarify the opportunity", text: "Turn business goals and user needs into a focused product scope." },
  { icon: Layers3, number: "02", title: "Design the right system", text: "Shape intuitive interfaces, reliable APIs, and AI workflows that fit the product." },
  { icon: Rocket, number: "03", title: "Ship and improve", text: "Launch with performance, maintainability, and clear next iterations in mind." },
];

export default function BuildProcess() {
  return (
    <section className="py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">How I work</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Product thinking, backed by engineering.</h2><p className="mt-5 max-w-md leading-relaxed text-slate-400">A strong portfolio is proof of a repeatable process, not a collection of technologies. This is the approach I bring to client and team projects.</p></div>
        <ol className="grid gap-4 sm:grid-cols-3">{steps.map(({ icon: Icon, number, title, text }) => <li key={number} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-indigo-300" /><span className="font-mono text-xs text-slate-500">{number}</span></div><h3 className="mt-8 font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p></li>)}</ol>
      </div>
    </section>
  );
}
