"use client";
import React, { useState, useEffect } from "react";

// Education data with example images
const educationData = [
  {
    title: "B.E. Computer",
    institution: "Eastern College Of Engineering",
    date: "01/01/2020 - Current",
    location: "Biratnagar, Nepal",
    level: "EQF Level 6",
    image: "/b-1.jpeg",
  },
  {
    title: "National Examination Board (NEB)",
    institution: "World Vision Higher Secondary School",
    date: "01/01/2016 - 01/01/2018",
    location: "Biratnagar, Nepal",
    level: "EQF Level 4",
    image: "/b-2.jpeg",
  },
  {
    title: "Secondary Education Examination (SEE)",
    institution: "Everest Residential School",
    date: "01/01/2004 - 01/01/2015",
    location: "Biratnagar, Nepal",
    level: "EQF Level 2",
    image: "/b-3.jpeg",
  },
];

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === educationData.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? educationData.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === educationData.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="py-16">
      <div className="px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
          Education & Training
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* Carousel */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="min-w-full bg-white dark:bg-gray-800 flex flex-col md:flex-row items-center gap-6 p-6"
              >
                {/* Left Image */}
                <img
                  src={edu.image}
                  alt={edu.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md"
                />

                {/* Right Text */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-[#7c66e3] mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.date}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                  <p className="mt-2 text-gray-800 dark:text-gray-200 font-medium">
                    Qualification: {edu.level}
                  </p>
                </div>
              </div>
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
      </div>
    </section>
  );
};

export default Education;
