"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const projects = [
  {
    title: "MyGentic Brain",
    date: "05/06/2026 - Current",
    link: "https://app.mygentic.io",
    image: "/m.png",
    description: "An advanced AI Brain platform designed to automate workflows, provide intelligent assistance, and deploy custom AI agents.",
    tech: ["Next.js", "Node.js", "AI/LLM Integration", "MongoDB"],
    live: true,
    featured: true,
  },
  {
    title: "AI District | AI Portal",
    date: "01/06/2025 - Current",
    link: "https://aidistrictagents.com",
    image: "/e.png",
    description: "A comprehensive AI portal and marketplace for discovering, deploying, and managing custom AI agents and automation tools.",
    tech: ["React.js", "Express.js", "OpenAI API", "Tailwind CSS"],
    live: true,
    featured: true,
  },
  {
    title: "NextGen Coach",
    date: "30/04/2025 - 30/06/2025",
    link: "https://nextgencoach.testir.xyz",
    image: "/e.png",
    description: "An AI-powered coaching and mentorship platform developed to connect users with intelligent, personalized guidance.",
    tech: ["MERN Stack", "AI Integration", "WebSockets", "JWT"],
    live: false,
  },
  {
    title: "Zil App",
    date: "09/04/2023 - Current",
    link: "https://play.google.com/store/apps/details?id=com.zilcommerce.flutter_mainapp&hl=en",
    image: "/zil.png",
    description: "A scalable service-providing platform with responsive interfaces, built to seamlessly connect service providers with customers.",
    tech: ["React.js", "Node.js", "MongoDB", "Redux"],
    live: true,
    featured: true,
  },
  {
    title: "Hotel Booking (Expedia Clone)",
    date: "01/09/2024 - 01/10/2024",
    link: "https://hotel-booking-hotel-booking.onrender.com",
    image: "/Vercel.png",
    description: "A full-stack hotel booking application replicating Expedia's core features, including search, filtering, and secure reservations.",
    tech: ["React.js", "Express.js", "MongoDB", "Stripe API"],
    live: false,
  },
  {
    title: "Gyan Sagar (Coursera Clone)",
    date: "01/10/2024 - 17/10/2024",
    link: "https://gyan-sagar-education.onrender.com",
    image: "/Vercel.png",
    description: "An e-learning platform clone featuring course browsing, video playback, user progress tracking, and enrollment systems.",
    tech: ["MERN Stack", "JWT Auth", "Cloudinary", "Material UI"],
    live: false,
  },
  {
    title: "Milanbindu Dating App",
    date: "03/07/2024 - 01/08/2024",
    link: "https://milanbindu-dating-app.onrender.com",
    image: "/Vercel.png",
    description: "A modern dating web application featuring user matching algorithms, real-time chat, and dynamic profile management.",
    tech: ["React.js", "Socket.io", "Node.js", "MongoDB"],
    live: false,
  },
  {
    title: "More Projects",
    date: "01/04/2023 - Current",
    link: "https://github.com/ChandraDevYadav",
    image: "/git.png",
    description: "Explore my open-source contributions, side hustles, and experimental web applications on my GitHub repository.",
    tech: ["Various", "Open Source", "Web Dev", "UI/UX"],
    live: false,
  },
];

const featuredProjects = projects.filter((project) => project.featured);

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (idx, dir = 1) => {
      setDirection(dir);
      setCurrentIndex(idx);
    },
    []
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  const current = featuredProjects[currentIndex];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.98 }),
  };

  return (
    <section id="featured-work" className="relative w-full scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              A few products I&apos;m proud to have shipped
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm text-zinc-400">
            <span className="text-cyan-400">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-zinc-600">/</span>
            <span>{String(featuredProjects.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Carousel card */}
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-2xl"
        >
          <div className="grid gap-0 md:grid-cols-5">
            {/* Image side */}
            <div className="relative md:col-span-2">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.title}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/5 md:aspect-auto md:h-full"
                >
                  <motion.img
                    src={current.image}
                    alt={current.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full object-contain p-10 md:p-14"
                  />
                </motion.div>
              </AnimatePresence>

              {current.live && (
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  LIVE
                </div>
              )}
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-between p-8 md:col-span-3 md:p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.title + "-content"}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400/80">
                    {current.date}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {current.title}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">
                    {current.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {current.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                  >
                    Visit Project
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="group absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              &#10094;
            </span>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="group absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <span className="transition-transform group-hover:translate-x-0.5">
              &#10095;
            </span>
          </button>
        </div>

        {/* Thumbnail strip / dots */}
        <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {featuredProjects.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
              aria-label={`Go to ${p.title}`}
              className={`group relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all ${
                idx === currentIndex
                  ? "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                className={`h-full w-full object-cover transition-opacity ${
                  idx === currentIndex ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                }`}
              />
              {idx === currentIndex && (
                <motion.div
                  layoutId="active-ring"
                  className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400"
                />
              )}
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">More experiments and open-source work are available on <a className="text-cyan-300 underline-offset-4 hover:underline" href="https://github.com/ChandraDevYadav2000" target="_blank" rel="noreferrer">GitHub</a>.</p>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
