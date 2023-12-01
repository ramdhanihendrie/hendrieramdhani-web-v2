import TechCard from "./TechCard";
import { 
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiLaravel,
  SiJquery,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit
} from "react-icons/si";

const techList = [
  {title: "React", Icon: SiReact},
  {title: "Next.js", Icon: SiNextdotjs},
  {title: "Laravel", Icon: SiLaravel},
  {title: "TailwindCSS", Icon: SiTailwindcss},
  {title: "Bootstrap", Icon: SiBootstrap},
  {title: "SASS", Icon: SiSass},
  {title: "TypeScript", Icon: SiTypescript},
  {title: "JavaScript", Icon: SiJavascript},
  {title: "jQuery", Icon: SiJquery},
  {title: "HTML", Icon: SiHtml5},
  {title: "CSS", Icon: SiCss3},
  {title: "Git", Icon: SiGit},
]

export default function Techs () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-5 w-3/4 mx-auto my-5">
      {
        techList.map((tech) => {
          return (
            <TechCard key={tech.title} title={tech.title} Icon={tech.Icon} />
          )
        })
      }
    </div>
  );
}
