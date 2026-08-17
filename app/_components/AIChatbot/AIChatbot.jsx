"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Loader2 } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const generateResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("experience") || lower.includes("work")) {
      return "Chandra has 3+ years of frontend experience and 1+ year of full-stack experience. He currently builds MERN and AI-powered products at Industry Rockstar Media Tech.";
    } else if (lower.includes("project")) {
      return "Some of my notable projects include MyGentic Brain (AI Application), AI District, and the Zil App.";
    } else if (lower.includes("skill") || lower.includes("tech")) {
      return "My core stack is React.js, Next.js, Node.js, and MongoDB. Recently, I've been heavily focused on building Custom LLMs, Autonomous Agents, and RAG systems!";
    } else if (lower.includes("education") || lower.includes("degree")) {
      return "I am currently pursuing my B.E. in Computer Engineering at Eastern College Of Engineering in Biratnagar.";
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire")) {
      return "You can reach me directly at yadavchandradev4@gmail.com or call me at (+977) 9805912060.";
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return "Hello! I can help you explore Chandra's public portfolio - ask about experience, projects, skills, or getting in touch.";
    } else {
      return "I can answer questions about Chandra's public portfolio. Try experience, projects, skills, education, or contact.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const botMessage = { id: Date.now() + 1, role: 'assistant', content: generateResponse(userMessage.content) };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/25 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 text-sm">Portfolio concierge</h3>
                  <p className="text-xs text-slate-400">Public profile, projects, and contact</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-slate-400 text-sm mt-8">
                  <p>Hi! I&apos;m Chandra&apos;s portfolio concierge.</p>
                  <p className="mt-2">Ask about his <strong>experience</strong>, <strong>projects</strong>, <strong>skills</strong>, or <strong>contact</strong> information.</p>
                </div>
              )}
              
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    m.role === 'user' ? 'bg-slate-700 text-slate-300' : 'bg-indigo-600 text-white'
                  }`}>
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm ${
                    m.role === 'user' 
                      ? 'bg-slate-800 text-slate-100 rounded-tr-none' 
                      : 'bg-indigo-600/20 text-slate-100 border border-indigo-500/30 rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 rounded-tl-none flex items-center">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:hover:bg-indigo-600"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
