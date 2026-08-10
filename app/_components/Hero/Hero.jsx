"use client";
import React from 'react'
import './Hero.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className='hero-container pt-12 pb-24'>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-slate-100">Building Digital Experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Inspire</span></h2>
        <p className="text-lg text-slate-300">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-2xl font-semibold'>AI Agent Builder & Full Stack Developer</span> 
          <br/> Transforming Ideas into Seamless, Intelligent, and Visually Stunning Solutions
        </p>
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
