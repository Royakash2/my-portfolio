import React from "react";
import { Project } from "../../utils/types";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative flex flex-col bg-gray-900 p-6 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20 h-full"  data-aos="zoom-in-right">
    {/* Glossy overlay effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500" />
  
    {/* Image container with gradient overlay */}
    <div className="relative w-full h-48 overflow-hidden rounded-xl">
      <img
        src={project.image}
        alt={project.title || "Project Image"}
        className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
    </div>
  
    {/* Tech stack badges */}
    <div className="flex flex-wrap gap-2 mt-4">
      {project.techStack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs font-medium bg-gray-800/50 backdrop-blur-sm rounded-full text-cyan-400 border border-cyan-400/20"
        >
          {tech}
        </span>
      ))}
    </div>
  
    {/* Content - Added flex-1 to grow section */}
    <div className="mt-4 space-y-3 flex-1">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {project.title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-sm">
        {project.description}
      </p>
    </div>

      {/* Action buttons */}
      <div className="mt-6 flex justify-between items-center">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm hover:bg-gradient-to-bl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <FiExternalLink className="w-4 h-4 text-cyan-400" />
            <span className="bg-gradient-to-r text-xs from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Live Demo
            </span>
          </a>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm hover:bg-gradient-to-bl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <FiGithub className="w-4 h-4 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GitHub
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
