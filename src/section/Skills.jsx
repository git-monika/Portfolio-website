import { useState } from "react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiSpringboot, SiMysql, SiPostgresql, SiGit, SiVercel, SiPostman 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = {
    Frontend: [
      {
        name: "HTML",
        icon: <SiHtml5 />,
        color: "bg-orange-500",
        description: "Semantic and accessible web structure using modern HTML5."
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        color: "bg-blue-500",
        description: "Responsive layouts, animations, and modern styling techniques."
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "bg-yellow-400",
        description: "ES6+, async programming, DOM manipulation, and APIs."
      },
      {
        name: "React.js",
        icon: <SiReact />,
        color: "bg-cyan-500",
        description: "Component-based UI development using hooks and state management."
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "bg-teal-500",
        description: "Utility-first styling for fast and modern UI design."
      },
    ],

    Backend: [
      {
        name: "Java",
        icon: <FaJava />,
        color: "bg-red-500",
        description: "Object-oriented programming and enterprise application development."
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
        color: "bg-green-500",
        description: "Building REST APIs, microservices, and backend services."
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "bg-indigo-500",
        description: "Relational database design, queries, and optimization."
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "bg-blue-600",
        description: "Advanced relational database with performance tuning."
      },
    ],

    Tools: [
      {
        name: "Git & GitHub",
        icon: <SiGit />,
        color: "bg-gray-700",
        description: "Version control, collaboration, and project management."
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "bg-orange-600",
        description: "API testing and debugging of backend services."
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "bg-black",
        description: "Deployment and hosting for React applications."
      },
    ],
  };

  return (
    <section id="skills" className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-cyan-400 text-xl text-center">My Skills</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Full Stack Developer Toolkit
        </h1>

        {Object.keys(skillCategories).map((category) => (
          <div key={category} className="mt-10">
            <h3 className="text-cyan-400 text-2xl font-semibold mb-6">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillCategories[category].map((skill, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSkill(skill)}
                  className="cursor-pointer bg-gray-900 border border-gray-700 p-6 rounded-lg 
                             flex flex-col items-center justify-center text-center
                             hover:scale-105 transition-transform duration-300 
                             hover:border-cyan-400"
                >
              
                  <div
                    className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center text-white text-3xl mb-3 shadow-md`}
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-gray-200 font-semibold">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center px-6">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-cyan-400 text-2xl font-semibold">
                  {selectedSkill.name}
                </h3>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✖
                </button>
              </div>

              <p className="mt-4 text-gray-300">
                {selectedSkill.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
