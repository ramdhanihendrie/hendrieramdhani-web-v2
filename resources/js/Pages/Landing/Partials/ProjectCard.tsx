import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

interface ProjectCardProps {
  title: string,
  desc: string,
  link: string,
  repo: string,
  image: string,
}

export default function ProjectCard ({
  title,
  desc,
  link,
  repo,
  image
} : ProjectCardProps) {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-3 flex flex-col">
      <img  src={image}/>
      <h4 className="text-indigo-500 text-xl font-semibold mt-3">{title}</h4>
      <p className="text-justify">{desc}</p>
      <div className="flex mt-auto justify-between gap-2 pt-2">
        <PrimaryButton className="w-full">
          <a href={link} target="_blank" rel="noreferrer">
              View Live
          </a>
        </PrimaryButton>
        <SecondaryButton className="w-full">
          <a href={repo} target="_blank" rel="noreferrer">
              Repository
          </a>
        </SecondaryButton>
      </div>
    </div>
  );
}
