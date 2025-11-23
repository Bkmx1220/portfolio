import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiSpringboot, SiFlutter, SiNestjs } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", level: 88, icon: <FaJs className="text-yellow-400" /> },
      { name: "ReactJS", level: 85, icon: <FaReact className="text-cyan-400" /> },
      { name: "Vue.js", level: 80, icon: <FaVuejs className="text-green-400" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", level: 85, icon: <SiDjango className="text-green-600" /> },
      { name: "Spring Boot", level: 75, icon: <SiSpringboot className="text-green-500" /> },
      { name: "NestJS", level: 70, icon: <SiNestjs className="text-red-500" /> },
      { name: "Python", level: 90, icon: <FaPython className="text-yellow-400" /> },
      { name: "Java", level: 80, icon: <FaJava className="text-red-400" /> },
      { name: "SQL / MySQL", level: 85, icon: <FaDatabase className="text-blue-400" /> },
    ],
  },
  {
    category: "Mobile & Outils",
    items: [
      { name: "Flutter", level: 80, icon: <SiFlutter className="text-sky-400" /> },
      { name: "Git / GitHub", level: 90, icon: <FaGitAlt className="text-orange-400" /> },
      { name: "Figma", level: 45, icon: <FaFigma className="text-pink-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🧠 Mes Compétences</h2>
        <p className="text-gray-300">
          Voici un aperçu de mes connaissances techniques et de mon niveau de maîtrise pour chaque technologie.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {skills.map((group, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-6">
              {group.category}
            </h3>
            <div className="space-y-5">
              {group.items.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <p className="text-sm">{skill.name}</p>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-purple-500 h-2.5 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
