"use client";
import React from 'react'
import './Hero.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownRight, Mail, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className='hero-container pt-12 pb-24'>
      <motion.div 
        className="hero-content rounded-3xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-[0_0_60px_rgba(15,23,42,0.25)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          <Sparkles className="h-3.5 w-3.5" /> Available for select AI product work
        </div>
        <p className="mb-4 text-lg font-semibold text-slate-100">Hi, I&apos;m Chandra Dev Yadav.</p>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI products</span> that turn complex workflows into simple experiences.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Full-stack MERN developer and AI agent builder creating reliable web apps, RAG systems, and intelligent automations - from product idea to production launch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#featured-work" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">View selected work <ArrowDownRight className="h-4 w-4" /></a>
          <a href="mailto:yadavchandradev4@gmail.com?subject=Project%20enquiry" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"><Mail className="h-4 w-4" /> Start a conversation</a>
        </div>
      </motion.div>
      <motion.div 
        className="hero-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
            <div className="tech-icon bg-slate-800/50 backdrop-blur-sm border border-slate-700">
            <Image src='/r.png' alt='React' width={50} height={50}/>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-30 animate-pulse"></div>
              <Image className='relative rounded-3xl object-cover' src='/my.jpg' alt='Profile' width={300} height={300}/>
            </div>
        </div>
        <div> 
        <div className="tech-icon bg-slate-800/50 backdrop-blur-sm border border-slate-700">
            <Image src='/js.png' alt='JavaScript' width={50} height={50}/> 
        </div> 
        <div className="tech-icon bg-slate-800/50 backdrop-blur-sm border border-slate-700"> 
            <Image src='/n.png' alt='Next.js' width={50} height={50}/> 
        </div> 
        <div className="tech-icon bg-slate-800/50 backdrop-blur-sm border border-slate-700"> 
            <Image src='/c.png' alt='CSS' width={50} height={50}/> 
        </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
