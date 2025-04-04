import Link from "next/link";

import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-4 mb-20 z-10">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Want to chat? Just shoot me a dm with a direct question on{" "}
        <Link
          className="text-blue-500"
          href="https://linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        or email me directly at{" "}
        <Link
          className="text-blue-500"
          href="mailto:nasti.carrot@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          nasti.carrot@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default ContactUs;
