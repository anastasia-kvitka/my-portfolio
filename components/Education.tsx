import React from "react";
interface EducationItem {
  startDate: string;
  endDate: string;
  collegeName: string;
  facultyName: string;
  major: string;
  description: string[];
}

const educationData: EducationItem[] = [
  {
    startDate: "September 2014",
    endDate: "June 2016",
    collegeName:
      "National Technical University of Ukraine “Kyiv Polytechnic Institute”",
    facultyName: "Faculty of Informatics and Computer Engineering",
    major: "Master of Science",
    description: ["Software Engineering Professional. System Software."],
  },
  {
    startDate: "September 2010",
    endDate: "June 2014",
    collegeName:
      "National Technical University of Ukraine “Kyiv Polytechnic Institute”",
    facultyName: "Faculty of Informatics and Computer Engineering",
    major: "Bachelor of Science",
    description: ["Software Engineering"],
  },
];
const Education = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold z-10">Education</h1>

      <ol className="relative border-s border-gray-300 dark:border-gray-600">
        {educationData.map((item, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.major} at {item.collegeName}
            </h3>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">
              {item.facultyName}
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

export default Education;
