import { useEffect, useState } from "react";
import TechCard from "./TechCard";
import axios from "axios";
import * as ReactIcons from 'react-icons/si';

type icon = keyof typeof ReactIcons
interface ITech {
  id: number;
  name: string;
  icon: icon;
}

const defaultTechs:ITech[] = [];

export default function Techs () {
  const [techsList, setTechsList]: [ITech[], (tech: ITech[]) => void] = useState(defaultTechs);
  
  useEffect(() => {
    axios.get<ITech[]>('/api/techs').then(response => {
      setTechsList(response.data)
    })
  }, []);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-5 w-3/4 mx-auto my-5">
      {
        techsList.map((tech) => {
          return (
            <TechCard key={tech.id} name={tech.name} icon={tech.icon} />
          )
        })
      }
    </div>
  );
}
