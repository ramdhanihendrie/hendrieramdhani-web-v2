import { useAppSelector } from "@/redux/hooks";
import ProjectCard from "../Partials/ProjectCard";
import { ProjectProps } from "@/interface/landing";

export default function Projects() {
  const project = useAppSelector((state) => state.landing.data.project);

  return (
    <section id="projects" className="container mx-auto py-5 pt-20">
      <h3 className="text-2xl font-semibold text-indigo-500">
        {project.title} :
      </h3>
      <p className="mt-3 text-justify leading-7 tracking-wide">
        {project.description}
      </p>
      <div className="mx-auto my-5 grid w-3/4 grid-cols-1 justify-center gap-5 md:grid-cols-2 xl:grid-cols-3">
        {project.projectList.map((pro: ProjectProps) => {
          return (
            <ProjectCard
              key={pro.id}
              title={pro.title}
              description={pro.description}
              image={pro.image}
              link={pro.link}
              repo={pro.repo}
            />
          );
        })}
      </div>
    </section>
  );
}
