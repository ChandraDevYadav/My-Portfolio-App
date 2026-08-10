import React from 'react';

const setupItems = [
  {
    title: 'Core Stack',
    items: ['MERN stack', 'Next.js for polished product experiences', 'Node.js for scalable APIs'],
  },
  {
    title: 'AI Toolkit',
    items: ['Cursor', 'GitHub Copilot', 'OpenAI APIs', 'Claude for rapid prototyping'],
  },
  {
    title: 'Hardware',
    items: ['High-refresh display', 'Mechanical keyboard', 'Noise-cancelling headphones', 'Portable workstation'],
  },
  {
    title: 'Editor & Workflow',
    items: ['VS Code', 'Dark theme', 'Terminal-first workflow', 'GitHub + Notion for product thinking'],
  },
];

export default function UsesPage() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Setup</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A quick look at the tools, workflow, and environment I use to build modern products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {setupItems.map((section) => (
            <div key={section.title} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8">
              <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
              <ul className="space-y-3 text-slate-300">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
