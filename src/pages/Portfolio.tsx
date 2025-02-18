import { useState } from "react";

import "aos/dist/aos.css";
import { useProjects } from "../hooks/useProjects";

const Portfolio = () => {
  

  const { projects } = useProjects();
  const categories = ["All", "React", "WordPress", "Full Stack"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        My Projects
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
