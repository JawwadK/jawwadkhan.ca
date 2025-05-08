import React from "react";
import SlideUp from "./SlideUp";

const experienceData = [
  {
    title: "Technical IT Consultant",
    company: "Ministry of Children, Community and Social Services",
    date: "06/2024 - Present",
    achievements: [
      "Created detailed process maps to enhance workflow understanding and identify pain points",
      "Collaborated with team members and other departments to understand business needs and implement automation solutions, increasing productivity by 20%",
      "Evaluated automation and gen-AI software, providing consultation to enhance business processes",
      "Led a program modernization initiative, replacing paper binders with iPads in training programs, achieving $8,000 reduction in annual expenses",
      "Developed and delivered digitized training program materials with a focus on accessibility and educational methods to create engaging content",
    ],
  },
  {
    title: "Software Developer",
    company: "Avasta Inc.",
    date: "01/2022 - 12/2023",
    achievements: [
      "Constructed data mining applications for regression analysis of big data using Python, Pandas and SKlearn, optimizing analysis processes and reducing data cluster process time by 22%",
      "Collaborated with clients and cross-functional teams to resolve technical issues and fulfill user requirements",
      "Served as consultant for technological acquisitions and communication regarding data modeling, architecture, integrity security and management policies",
      "Developed documentation standards and procedures for testing data integrity, security and troubleshooting data mining applications",
      "Setup MS Azure Tenant, MDM, MFA/SSO & CA policies increasing Microsoft Secure Score by 32%",
    ],
  },
  {
    title: "Application Developer",
    company:
      "Cyber Security Division, Ministry of Public & Business Service Delivery",
    date: "05/2021 - 09/2021",
    achievements: [
      "Led front-end development of custom code modules and style widgets for web LMS systems using JavaScript and SCSS, significantly enhancing UI experience",
      "Developed Cyber Security learning materials using custom JavaScript puzzles and quizzes, to enhance learning proficiency of students",
      "Enhanced user experience by implementing responsive design in Moodle LMS across multiple platforms, leading to a 26% increase in user engagement metrics",
      "Worked in agile development cycle, set up automated deployment via CI/CD practices with regular scrums and code review",
    ],
  },
  {
    title: "Technology Analyst",
    company: "Strategy and Innovation Branch, Royal Canadian Mounted Police",
    date: "10/2020 - 05/2021",
    achievements: [
      "Reviewed over 35 technical reports on API security best practices, providing reports to stakeholders",
      "Used DevOps practices, transferring legacy system infrastructure to the cloud with AWS Cloud Migration",
      "Developed new features to improve API call speed, using Docker to test APIs before execution",
      "Tested scalability of CRS (Criminal Record System) Programs using Container and Orchestration software (Kubernetes)",
    ],
  },
  {
    title: "Data Analyst",
    company: "Avasta Inc.",
    date: "05/2020 - 09/2020",
    achievements: [
      "Performed regression analysis of large data sets to aid decision-making by leadership teams",
      "Conducted data security and integrity analysis of company processes",
      "Implemented Jira for project management, reducing project completion times by 30%",
      "Researched open-source machine learning libraries such as TensorFlow and Keras",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-4xl mb-8">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>

        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <SlideUp key={index} offset="-300px 0px -300px 0px">
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gray-100 dark:bg-zinc-700 px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-zinc-600">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {experience.company}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600">
                      {experience.date}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
