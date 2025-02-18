import { useEffect, useState } from "react";
import { Project } from "../utils/types";

export const useProjects = (showFeatured: boolean = false) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data: Project[] = await response.json();

        // If `showFeatured` is true, filter only featured projects
        const filteredProjects = showFeatured
          ? data.filter((project) => project.featured)
          : data;

        setProjects(filteredProjects);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [showFeatured]); // React will refetch if the parameter changes

  return { projects, loading, error };
};
