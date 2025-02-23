export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category:string;
  techStack:string[]
  featured: boolean;
}
 
export interface FormData {
  name: string;
  email: string;
  message: string;
}