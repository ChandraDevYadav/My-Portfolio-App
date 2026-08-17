import PageIntro from "../_components/PageIntro";
const roles = [
  ["2025 - Present", "MERN Stack Developer", "Industry Rockstar Media Tech · Full-stack product work, AI features, APIs, deployment, and collaboration."],
  ["2023 - 2025", "Web Developer, Zil", "Careti Cooperation · Responsive React application development, UI collaboration, team coordination, and performance work."],
  ["2022 - 2023", "Frontend Developer", "Matin Softech · Client-focused web interfaces with React, HTML, CSS, JavaScript, and modern UI patterns."],
  ["2020 - Present", "Freelance Full-Stack Developer", "End-to-end client work, product delivery, APIs, payments, dashboards, deployments, and post-launch support."],
];
export const metadata = { title: "Timeline | Chandra Dev Yadav", description: "Career timeline for Chandra Dev Yadav." };
export default function TimelinePage() { return <main className="min-h-screen px-6 py-20"><PageIntro eyebrow="Career timeline" title="A path built through shipping.">From frontend foundations to full-stack products and AI-powered experiences.</PageIntro><ol className="mx-auto max-w-4xl border-l border-cyan-400/30 pl-8">{roles.map(([date, title, text]) => <li key={title} className="relative pb-10 last:pb-0"><span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-cyan-300 ring-8 ring-slate-950" /><p className="font-mono text-sm text-cyan-300">{date}</p><h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2><p className="mt-3 leading-relaxed text-slate-400">{text}</p></li>)}</ol></main>; }
