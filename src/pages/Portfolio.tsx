import { useState } from "react";
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
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">
        My Projects
      </h2>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto md:justify-center gap-4 mb-8 p-2 md:p-0 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 whitespace-nowrap rounded-full text-md font-semibold transition-all shadow-md 
              ${selectedCategory === category ? "bg-blue-500 text-white scale-105" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="relative bg-gray-900 p-5 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
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
