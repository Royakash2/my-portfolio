import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-xl mt-3">Projects</h1>
      <div className="divider w-[70%] mx-auto"></div>
      <div className="primary-gradient h-full w-full flex flex-wrap justify-center items-center space-y-4 md:space-x-5 p-8 rounded-3xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
