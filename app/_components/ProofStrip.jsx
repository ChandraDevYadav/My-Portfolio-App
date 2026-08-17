import { Bot, BriefcaseBusiness, Code2, Rocket } from "lucide-react";

const proof = [
  { icon: Code2, value: "3+", label: "years in frontend engineering" },
  { icon: BriefcaseBusiness, value: "1+", label: "year shipping full-stack products" },
  { icon: Bot, value: "AI", label: "agents, RAG, and workflow automation" },
  { icon: Rocket, value: "E2E", label: "from discovery through launch" },
];

export default function ProofStrip() {
  return (
    <section aria-label="Professional highlights" className="py-8 sm:py-12">
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] sm:grid-cols-2 lg:grid-cols-4">
        {proof.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4 border-b border-white/10 p-6 last:border-b-0 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <Icon className="h-5 w-5 shrink-0 text-cyan-300" />
            <div><p className="text-2xl font-bold text-white">{value}</p><p className="mt-1 text-sm leading-snug text-slate-400">{label}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
