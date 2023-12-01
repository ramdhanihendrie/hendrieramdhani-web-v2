import { IconType } from "react-icons";

interface TechCardProps {
  Icon: IconType,
  title: string
}

export default function TechCard ({Icon, title}: TechCardProps) {
  return (
    <div className="bg-indigo-500 p-5 text-center flex flex-col text-white justify-center">
      <div className="block mx-auto">
        <Icon size={64}/>
      </div>
      <h5 className="mt-5 font-semibold">{title}</h5>
    </div>
  );
}

