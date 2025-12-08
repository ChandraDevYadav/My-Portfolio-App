import React from "react";

const experiences = [
  {
    title: "Web Developer",
    company: "IR Mediatech PVT LTD",
    date: "30/04/2025 - Current",
    location: "Kathmandu",
    responsibilities: [
      "Develop and maintain full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Create responsive and dynamic user interfaces using React, reusable components, and modern UI libraries.",
      "Build secure and scalable RESTful APIs with Node.js and Express, including authentication and role-based access.",
      "Design and optimize MongoDB databases with efficient modeling and performance tuning.",
      "Debug, test, and deploy applications using Git, Postman, and cloud platforms (Vercel, Render).",
    ],
  },
  {
    title: "Web Developer",
    company: "Freelancing",
    date: "Current",
    location: "Remote",
    responsibilities: [
      "Develop custom full-stack MERN applications based on client requirements.",
      "Create modern and user-friendly React interfaces with optimized UX.",
      "Build secure backend APIs with payment integration, authentication, and admin dashboards.",
      "Design and manage MongoDB databases for performance and reliability.",
      "Provide end-to-end delivery including requirements, development, testing, deployment & support.",
    ],
  },
  {
    title: "Web Developer",
    company: "Careti Cooperation Pvt Ltd (Zil)",
    date: "09/04/2023 - 30/11/2025",
    location: "Remote, Nepal",
    responsibilities: [
      "React.js developer focusing on performance, timing, and cost efficiency.",
      "Built and designed the service-providing web app for Zil.",
      "Monitored and led the team for successful deployment.",
      "Collaborated with UI and backend teams to complete the project.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Matinsoftech",
    date: "04/05/2022 - 05/01/2023",
    location: "Biratnagar, Nepal",
    responsibilities: [
      "Frontend developer focused on designing and creating web pages.",
      "Built web pages for Matin Softech projects.",
      "Collaborated with UI and backend teams for project completion.",
      "Implemented advanced CSS animations to enhance UI experience.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="w-full py-14">
      <div className="px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
          Work Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#7c66e3] p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 text-right">
                  <p>{exp.date}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((res, rIndex) => (
                  <li key={rIndex}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
