import React from 'react';

export default function CaseStudies() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Studies</span></h1>
          <p className="text-slate-400 text-lg">Deep dives into my top projects, problem-solving, and architecture.</p>
        </div>

        <div className="space-y-12">
          {/* Case Study 1 */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">MyGentic Brain (AI Application)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">The Problem</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Users struggled to find specific context within large corporate knowledge bases. Traditional search methods were inefficient and lacked contextual understanding.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">The Solution</h3>
                <p className="text-slate-300 leading-relaxed">
                  Engineered an advanced AI application using a Retrieval-Augmented Generation (RAG) system. Integrated Custom LLMs to parse and index documents intelligently.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'OpenAI', 'Pinecone', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Zil App</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">The Problem</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Zil's service-providing platform required a highly responsive, scalable web interface that could handle real-time updates and seamless user experience across devices.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">The Solution</h3>
                <p className="text-slate-300 leading-relaxed">
                  Led the development of a React.js based SPA. Implemented robust state management, optimized rendering cycles, and closely collaborated with UI/UX designers to deliver a pixel-perfect, cost-efficient platform.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Redux', 'Material UI', 'Express.js', 'REST APIs', 'Git'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
