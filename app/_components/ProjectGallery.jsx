"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

export default function ProjectGallery({ project, screenshots }) {
  const [selected, setSelected] = useState(0);
  const current = screenshots[selected];

  return (
    <section className="border-t border-white/10 bg-slate-950/40 px-8 py-8 lg:px-10">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Product gallery</p><p className="mt-2 text-sm text-slate-400">Selected screens from {project}.</p></div>
        <span className="font-mono text-xs text-slate-500">{String(selected + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span>
      </div>
      <a href={current} target="_blank" rel="noreferrer" className="group relative block h-[21rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-3 sm:h-[28rem] lg:h-[34rem]">
        <Image src={current} alt={`${project} product screen ${selected + 1}`} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-contain transition duration-500 group-hover:scale-[1.015]" />
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><Maximize2 className="h-3.5 w-3.5" /> Open full size</span>
      </a>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">{screenshots.map((shot, index) => <button key={shot} onClick={() => setSelected(index)} className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition sm:h-20 sm:w-32 ${selected === index ? "border-cyan-300 ring-2 ring-cyan-300/30" : "border-white/10 opacity-60 hover:opacity-100"}`} aria-label={`Show ${project} screen ${index + 1}`}><Image src={shot} alt="" fill sizes="128px" className="object-cover" /></button>)}</div>
    </section>
  );
}
