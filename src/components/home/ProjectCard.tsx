import React from "react";
import { Project } from "../../utils/types";


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative group w-80 h-96 overflow-hidden rounded-2xl shadow-lg" data-aos="zoom-out">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.description}</p>
      </div>

      {/* Hover Details */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 text-center px-4">
          {project.technologies.join(", ")}
        </p>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
