"use client";
import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "AI District | AI Portal",
    date: "01/06/2025 - Current",
    link: "https://aidistrictagents.com/",
    image: "/e.png",
  },
  {
    title: "NextGen Coach",
    date: "30/04/2025 - 30/06/2025",
    link: "https://nextgencoach.testir.xyz",
    image: "/c.png",
  },
  {
    title: "Zil App",
    date: "09/04/2023 - Current",
    link: "https://zil.com",
    image: "/f.png",
  },
  {
    title: "Hotel Booking (Expedia Clone)",
    date: "01/09/2024 - 01/10/2024",
    link: "https://hotel-booking-hotel-booking.onrender.com",
    image: "/d.png",
  },
  {
    title: "Gyan Sagar (Coursera Clone)",
    date: "01/10/2024 - 17/10/2024",
    link: "https://gyan-sagar-education.onrender.com",
    image: "/g.png",
  },
  {
    title: "Milanbindu Dating App",
    date: "03/07/2024 - 01/08/2024",
    link: "https://milanbindu-dating-app.onrender.com",
    image: "/n.png",
  },
  {
    title: "More Projects",
    date: "01/04/2023 - Current",
    link: "https://github.com/ChandraDevYadav",
    image: "/i.png",
  },
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
          Projects
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-md">
          {/* Carousel */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((p, idx) => (
              <a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="min-w-full bg-white dark:bg-gray-800 p-6 flex flex-col md:flex-row items-center gap-6"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full md:w-1/3 h-48 object-contain rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xl mt-1">
                    {p.date}
                  </p>
                  <p className="mt-2 text-blue-600 dark:text-blue-400 underline">
                    Visit Project →
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-400 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-400 transition"
          >
            &#10095;
          </button>
        </div>

        {/* Dots */}
        {/* <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
