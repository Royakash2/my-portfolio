import React from "react";
import { Project } from "../../utils/types";


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
    className="relative group w-[100%] h-96 overflow-hidden rounded-2xl shadow-lg bg-gray-800"
    data-aos="zoom-out"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${project.image})` }}
    ></div>
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
  
    {/* Content */}
    <div className="absolute bottom-4 left-4 z-10">
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
    </div>
  
    {/* Hover Details */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 space-y-4">
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="text-sm text-gray-300 text-center">
        {project.technologies.join(", ")}
      </p>
      <div className="flex space-x-4">
        {/* Live Project Link */}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
        >
          Live Project
        </a>
  
        {/* GitHub Link */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default ProjectCard;
