import { FaArrowAltCircleDown, FaProjectDiagram } from "react-icons/fa";
import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import { NavLink } from "react-router";

const ProjectShowcase = () => {
  const { projects, loading, error } = useProjects(true); // Show only featured projects

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-center text-2xl md:text-4xl mt-3 font-bold uppercase">
        Projects
      </h1>
      <div className="divider w-[70%] mx-auto divider-primary"><FaProjectDiagram className="text-7xl" /></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center">
        <NavLink to={"/portfolio"}>
          <button className="btn btn-outline btn-wide mt-6 bg-black rounded-lg">
            See all projects <FaArrowAltCircleDown />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectShowcase;
