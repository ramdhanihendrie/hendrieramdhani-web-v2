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
    <div className="bg-gray-700 rounded p-3 flex flex-col">
      <img  src={image}/>
      <h4 className="text-indigo-500 text-xl font-semibold mt-3">{title}</h4>
      <p className="text-justify text-white">{desc}</p>
      <div className="flex mt-auto justify-between gap-2 pt-2">
        <a className="bg-indigo-500 border-indigo-500 border-2 border-solid  hover:bg-[#2a1a86] text-white font-bold py-2 px-4 rounded basis-1/2 text-center" href={link} target="_blank" rel="noreferrer">View Live</a>
        <a className="border-indigo-500 border-2 border-solid hover:border-[#2a1a86] text-white font-bold py-2 px-4 rounded basis-1/2 text-center" href={repo} target="_blank" rel="noreferrer">Repository</a>
      </div>
    </div>
  );
}
