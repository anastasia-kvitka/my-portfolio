import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Intro = () => {
  return (
    <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Hi! I am Anastasia</h1>
        <p className="text-base text-gray-700 dark:text-gray-200">
          Dynamic and detail-oriented Product Designer with a strong foundation
          in QA automation and software engineering. Skilled in collaborating
          with cross-functional teams to develop innovative solutions while
          ensuring quality and efficiency throughout the design and development
          process. Experienced in leveraging technical skills to bridge the gap
          between design and engineering, resulting in high-quality products
          that meet user needs.
        </p>
      </div>
      <div>
        <Avatar className="w-40 h-40">
          <AvatarImage src="/images/anastasia.jpg" alt="Anastasia" />
          <AvatarFallback>AE</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Intro;
