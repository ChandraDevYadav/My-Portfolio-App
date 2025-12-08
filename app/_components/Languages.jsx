import React from "react";

const languages = [
  {
    name: "Nepali",
    skills: {
      listening: "Native",
      reading: "Native",
      writing: "Native",
      speaking: "Native",
    },
  },
  {
    name: "English",
    skills: {
      listening: "C1",
      reading: "C1",
      writing: "B2",
      speaking: "B2",
    },
  },
  {
    name: "Hindi",
    skills: {
      listening: "C1",
      reading: "C1",
      writing: "B1",
      speaking: "B2",
    },
  },
];

const Languages = () => {
  return (
    <section className="py-4">
      <div className="px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
          Language Skills
        </h2>

        <div className="space-y-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#7c66e3] border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {lang.name}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {Object.entries(lang.skills).map(([skill, level], i) => (
                  <div key={i} className="text-gray-700 dark:text-gray-300">
                    <p className="capitalize text-sm">{skill}</p>
                    <p className="font-semibold">{level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
