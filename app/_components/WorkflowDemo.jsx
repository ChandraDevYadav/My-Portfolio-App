"use client";
import { useState } from "react";
import { ArrowRight, Bot, Database, FileText, UserRound } from "lucide-react";

const demos = {
  support: { title: "Support assistant", input: "A customer asks about billing.", output: "Agent retrieves policy context, drafts an answer, and routes exceptions to the right teammate." },
  knowledge: { title: "Knowledge assistant", input: "A teammate asks how a process works.", output: "Agent retrieves the relevant documents, synthesizes a sourced answer, and suggests a next action." },
  operations: { title: "Operations workflow", input: "A new request enters the system.", output: "Agent classifies it, gathers missing details, updates the workflow, and flags items requiring human approval." },
};

export default function WorkflowDemo() {
  const [active, setActive] = useState("support");
  const demo = demos[active];
  return <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-10"><div className="flex flex-wrap gap-2">{Object.entries(demos).map(([key, item]) => <button key={key} onClick={() => setActive(key)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === key ? "bg-cyan-300 text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}>{item.title}</button>)}</div><div className="mt-10 grid items-center gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr]"><div className="rounded-2xl border border-white/10 p-5"><UserRound className="h-5 w-5 text-indigo-300" /><p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Signal</p><p className="mt-2 text-slate-200">{demo.input}</p></div><ArrowRight className="mx-auto h-5 w-5 rotate-90 text-cyan-300 md:rotate-0" /><div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5"><div className="flex gap-2"><Bot className="h-5 w-5 text-cyan-300" /><Database className="h-5 w-5 text-cyan-300" /><FileText className="h-5 w-5 text-cyan-300" /></div><p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-200">Agent + context</p><p className="mt-2 text-slate-200">Understand, retrieve, decide.</p></div><ArrowRight className="mx-auto h-5 w-5 rotate-90 text-cyan-300 md:rotate-0" /><div className="rounded-2xl border border-white/10 p-5"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Useful outcome</p><p className="mt-3 leading-relaxed text-slate-200">{demo.output}</p></div></div></section>;
}
