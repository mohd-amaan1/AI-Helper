"use client";

import { FaRobot } from "react-icons/fa"; // React Icon for AI

export default function About() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        background: "linear-gradient(to bottom right, #7FB3FF, #203A8E)", // Gradient theme for consistency
      }}
    >
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8 mt-12">
        <div className="flex flex-col items-center">
          <FaRobot className="text-blue-700 text-6xl mb-4" />
          <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
            About AI Helper
          </h1>
        </div>

        <p className="text-gray-700 leading-relaxed text-center">
          AI Helper is your intelligent assistant powered by the Gemini API, designed to simplify tasks and enhance productivity. Whether you need answers, generate content, or explore insights, AI Helper is here to help.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Natural Language Processing for intuitive interactions.</li>
            <li>Seamless content generation with real-time responses.</li>
            <li>Adaptable to a wide range of queries and tasks.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Why Choose AI Helper?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Backed by Gemini API, AI Helper is precise, fast, and easy to use. It&apos;s tailored to enhance decision-making, learning, and productivity for users of all backgrounds.
          </p>
        </div>
      </div>
    </div>
  );
}

About.displayName = "About";
