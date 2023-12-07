import axios from "axios";
import ProjectCard from "../Partials/ProjectCard";
import { useEffect, useState } from "react";

interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
}

const defaultProjects:IProject[] = [];

export default function Projects () {
  const [projectsList, setProjectsList]: [IProject[], (project: IProject[]) => void] = useState(defaultProjects);
  
  useEffect(() => {
    axios.get<IProject[]>('/api/projects').then(response => {
      setProjectsList(response.data)
    })
  }, []);

  return (
    <section id="projects" className="container mx-auto pt-20 py-5">
      <h3 className="text-indigo-500 font-semibold text-2xl">Projects:</h3>
      <p className="text-justify tracking-wide leading-7 mt-3">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto justify-center my-5 gap-5 w-3/4">
        {
          projectsList.map((project) => {
            return(
              <ProjectCard 
                key={project.id}
                title={project.title} 
                desc={project.description}
                image={project.image}
                link={project.link}
                repo={project.repo}
              />
            )
          })
        }
      </div>
    </section>
  );
}
