import TechCard from "./TechCard";
import { useAppSelector } from "@/redux/hooks";
import { TechProps } from "@/interface/landing";

export default function Techs() {
  const techList = useAppSelector((state) => state.landing.data.about.techList);

  return (
    <div className="mx-auto my-5 grid w-3/4 grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
      {techList.map((tech: TechProps) => {
        return <TechCard key={tech.id} techName={tech.name} icon={tech.icon} />;
      })}
    </div>
  );
}
