export default function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="mx-auto max-w-3xl py-12 text-center sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
      {children && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{children}</p>}
    </header>
  );
}
