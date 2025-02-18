import { FaArrowAltCircleDown } from "react-icons/fa";
import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
  const { projects, loading, error } = useProjects(true); // Show only featured projects

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-center text-2xl mt-3 font-bold">Projects</h1>
      <div className="divider w-[70%] mx-auto"></div>
      <div className="primary-gradient h-full w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-5 p-8 rounded-3xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <button className="btn btn-outline btn-wide">
        See all projects <FaArrowAltCircleDown />
      </button>
    </div>
  );
};

export default ProjectShowcase;
