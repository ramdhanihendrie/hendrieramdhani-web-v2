import axios from "axios";
import { useEffect, useState } from "react";

interface IEducation {
  id: number;
  school: string;
  description: string;
}
const defaultEducations:IEducation[] = [];

export default function Educations () {
  const [educationsList, setEducationsList]: [IEducation[], (certificate: IEducation[]) => void] = useState(defaultEducations);
  
  useEffect(() => {
    axios.get<IEducation[]>('/api/educations').then(response => {
      setEducationsList(response.data)
    })
  }, []);
  
  return (
    <div>
      <h3 className="text-indigo-500 font-semibold text-2xl mt-20">Education:</h3>
      <p className="text-justify tracking-wide leading-7 mt-3">I have taken formal education at university and in training, here are some of the educations that I have taken.</p>
      {
        educationsList.map((edu) => {
          return (
            <div key={edu.school}>
              <li className="font-bold text-xl mt-3">{edu.school}</li>
              <p className="ml-7 leading-loose">{edu.description}</p>
            </div>
          )
        })
      }
    </div>
  );
}
