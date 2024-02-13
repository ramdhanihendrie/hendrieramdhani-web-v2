import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { ProjectProps } from "@/interface/landing";

export default function ProjectCard({
  title,
  description,
  link,
  repo,
  image,
}: Omit<ProjectProps, "id">) {
  return (
    <div className="flex flex-col rounded-md bg-gray-200 p-3 dark:bg-gray-700">
      <img src={image} />
      <h4 className="mt-3 text-xl font-semibold text-indigo-500">{title}</h4>
      <p className="text-justify">{description}</p>
      <div className="mt-auto flex justify-between gap-2 pt-2">
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
