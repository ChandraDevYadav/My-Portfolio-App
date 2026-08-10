"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, BrainCircuit, Workflow, Zap, Code2 } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
    title: "Custom LLM Integration",
    description: "Integrating powerful Large Language Models into your existing systems to enhance decision making and automate complex tasks."
  },
  {
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
    title: "Autonomous AI Agents",
    description: "Building intelligent agents capable of understanding context, planning, and executing multi-step workflows autonomously."
  },
  {
    icon: <Workflow className="w-8 h-8 text-purple-400" />,
    title: "RAG Systems",
    description: "Developing Retrieval-Augmented Generation architectures so your AI can securely chat with your proprietary data."
  },
  {
    icon: <Cpu className="w-8 h-8 text-pink-400" />,
    title: "AI-Powered Workflows",
    description: "Streamlining business operations by embedding AI microservices that reduce manual effort and boost productivity."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Prompt Engineering",
    description: "Crafting and optimizing complex prompts to ensure AI responses are accurate, safe, and aligned with your brand voice."
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    title: "Full Stack AI Apps",
    description: "End-to-end development of modern web applications with deeply integrated AI features using Next.js and Node.js."
  }
];

export default function AiAgentBuilder() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="ai-agent-builder">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            AI Agent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Builder</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Leveraging cutting-edge artificial intelligence to build smart, autonomous, and highly efficient digital solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
