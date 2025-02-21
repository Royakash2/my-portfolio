import { useState } from "react";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/home/ProjectCard";

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
      <h2 className="text-4xl font-extrabold text-center text-white mb-10 uppercase">
        My Projects
      </h2>

      {/* Category Tabs */}
      <div className="flex md:justify-center gap-4 p-2 md:p-0 overflow-x-auto md:overflow-visible scrollbar-hide">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 whitespace-nowrap rounded-md text-xs font-semibold transition-all shadow-md 
              ${
                selectedCategory === category
                  ? "bg-blue-500 text-white scale-105"
                  : "bg-black border border-white text-gray-300 hover:bg-white hover:text-black"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
