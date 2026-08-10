"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 text-slate-400">
        Loading GitHub contributions...
      </div>
    ),
  }
);

export default function GithubCalendarSection() {
  // Use explicit tailwind colors for the theme instead of just 'dark'
  const explicitTheme = {
    light: ['#1e293b', '#3730a3', '#4f46e5', '#6366f1', '#818cf8'], // using slate-800 as base, and indigo shades
    dark: ['#1e293b', '#312e81', '#3730a3', '#4f46e5', '#6366f1'],
  };

  return (
    <section className="py-20 relative overflow-hidden" id="github-contributions">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Contributions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Consistently writing code and building projects.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GitHubCalendar 
            username="ChandraDevYadav2000" 
            blockSize={14}
            blockMargin={6}
            colorScheme="dark"
            theme={explicitTheme}
            fontSize={14}
          />
        </motion.div>
      </div>
    </section>
  );
}
