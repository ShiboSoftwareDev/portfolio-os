import React from "react";

const MyWork = () => {
  return (
    <div className="overflow-scroll h-full w-full">
      <div className="mx-auto max-w-3xl px-4 py-8 ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Software Projects
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Welcome to my portfolio of software projects! Currently, I’m focused
          on contributing to TSCircuit, an open-source project, with plans to
          add more projects as I grow my skills and experience.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🛠️ TSCircuit
          </h2>
          <p className="text-gray-600">
            <strong>Status:</strong> Actively Developing
          </p>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">
            Project Overview:
          </h3>
          <p className="text-gray-600 mt-1">
            TSCircuit is an open-source project that Ive been contributing to
            for over two months now. The goal of TSCircuit is to simplify
            circuit design and simulation, providing an accessible and powerful
            tool for both beginners and advanced users in electronics and
            engineering. My work includes optimizing code, enhancing features,
            and collaborating with the community to ensure a smooth user
            experience.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">
            Tech Stack:
          </h3>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>
              <strong>Programming Languages:</strong> TypeScript, JavaScript
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> Node.js, React (if
              applicable)
            </li>
            <li>
              <strong>Other Tools:</strong> Git, GitHub, VS Code
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">
            Key Contributions So Far:
          </h3>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Improved performance of core functionalities</li>
            <li>Developed new features for more intuitive circuit design</li>
            <li>
              Collaborated with other contributors to resolve issues and review
              code
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-4">
            Next Steps:
          </h3>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Implement additional design tools</li>
            <li>Refine the user interface for better usability</li>
            <li>Expand documentation to support a wider audience</li>
          </ul>

          <p className="mt-4 text-blue-600">
            <a
              href="https://github.com/tscircuit"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Learn More & Contribute: TSCircuit GitHub repository
            </a>
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Future Projects
          </h2>
          <p className="text-gray-600">
            Stay tuned! More projects are coming as I continue my journey in
            software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
