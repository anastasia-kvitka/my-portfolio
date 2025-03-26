import React from "react";

interface WorkExpirienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  projectName?: string;
  jobTitle: string;
  description: string[];
}

const workExpirienceData: WorkExpirienceItem[] = [
  {
    startDate: "August 2024",
    endDate: "Present",
    companyName: "WarpTechnologies",
    jobTitle: "Engineer, Product Designer",
    description: [
      "We are dedicated to creating and producing unmanned aerial systems (UAS) designed for military use.",
    ],
  },
  {
    startDate: "December 2021",
    endDate: "January 2024",
    companyName: "GlobalLogic",
    projectName: "Avid MediaCentral | CloudUX",
    jobTitle: "Product Designer",
    description: [
      "Applied design thinking and user-centered approaches to product development, ensuring products were intuitive and functional.",
      "Collaborated with cross-functional teams to analyze user data, extracting insights to guide product improvements.",
    ],
  },
  {
    startDate: "January 2016",
    endDate: "December 2021",
    companyName: "GlobalLogic",
    projectName: "Avid MediaCentral | CloudUX",
    jobTitle: "QA Automation engineer",
    description: [
      "Automated testing processes to improve product reliability and efficiency.",
      "Strong experience in analytical troubleshooting, identifying system behavior patterns, and ensuring data flow robustness.",
    ],
  },
];

const WorkExpirience = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Work Expirience</h1>

      <ol className="relative border-s border-gray-300 dark:border-gray-600">
        {workExpirienceData.map((item, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.jobTitle} at {item.companyName}
            </h3>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">
              {item.projectName}
            </h4>
            <ol className="text-base text-gray-700 dark:text-gray-300">
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExpirience;
