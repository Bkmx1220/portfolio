import React from "react";

// 🔹 Import des images
import banner_background from "../assets/banner_background.jpg";
import inspireReader from "../assets/inspire-reader.png";
import chronoApp from "../assets/chrono-app.png";
import agriculture from "../assets/agriculture.png";
import taskManager from "../assets/task-manager.png";
//import restaurant from "../assets/restaurant.png";
//import streetburger from "../assets/streetburger.jpg"
import resto from "../assets/resto.jpg"

const projects = [
  {
    title: "Plateforme de troc full stack",
    description:
      "Application complète avec Vue.js, Spring Boot et Flutter pour le troc d’objets.",
    tech: "Vue.js • Spring Boot • Flutter",
    link: "https://github.com/Bkmx1220/Plateforme-d-change-TrocSpace",
    image: banner_background, // ✅ import utilisé ici
  },
  {
    title: "Inspire Reader",
    description: "Mini app mobile de citations inspirantes développée avec Flutter.",
    tech: "Flutter",
    link: "https://github.com/Bkmx1220/inspire_reader",
    image: inspireReader,
  },
  {
    title: "Application de chronomètre",
    description: "Application simple de chronométrage réalisée en C#.",
    tech: "C#",
    link: "https://github.com/Bkmx1220/Application-de-chronom-tre",
    image: chronoApp,
  },
  {
    title: "Plateforme d'agriculture",
    description:
      "Mise en relation entre experts et paysans via une plateforme Django.",
    tech: "Django",
    link: "https://github.com/Bkmx1220/Plateforme-agriculture-",
    image: agriculture,
  },
  {
    title: "Application de gestion de tâches",
    description:
      "Application web complète avec authentification et API NestJS.",
    tech: "ReactJS • NestJS",
    link: "https://github.com/Bkmx1220/App-web-de-gestion-de-t-ches-back-et-front-",
    image: taskManager,
  },
  {
    title: "Street Burger",
    description: "Site web (frontend) responsive d’un restaurant moderne qui sert à commander et réserver des burgers",
    tech: "reactJs • Tailwind CSS",
    link: "https://github.com/Bkmx1220/site-web-restaurent-de-burger",
    image: resto,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-purple-800 to-gray-900 text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Mes Projets</h2>
        <p className="text-gray-300">
          Voici quelques réalisations personnelles et académiques, du front au back !
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto max-h-[70vh] px-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={project.image}
              alt={`Aperçu de ${project.title}`}
              className="w-full h-40 object-cover rounded-xl mb-4 border border-purple-500/30"
            />

            <h3 className="text-2xl font-semibold text-purple-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mb-3">{project.description}</p>
            <p className="text-sm text-purple-400 mb-4">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
            >
              Voir sur GitHub 🔗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
