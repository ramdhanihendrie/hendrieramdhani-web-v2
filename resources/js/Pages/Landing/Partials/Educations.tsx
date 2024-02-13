import { EducationProps } from "@/interface/landing";
import { useAppSelector } from "@/redux/hooks";

export default function Educations() {
  const education = useAppSelector((state) => state.landing.data.education);

  return (
    <div>
      <h3 className="mt-20 text-2xl font-semibold text-indigo-500">
        {education.title} :
      </h3>
      <p className="mt-3 text-justify leading-7 tracking-wide">
        {education.description}
      </p>
      {education.educationList.map((edu: EducationProps) => {
        return (
          <div key={edu.school}>
            <li className="mt-3 text-xl font-bold">{edu.school}</li>
            <p className="ml-7 leading-loose">{edu.description}</p>
          </div>
        );
      })}
    </div>
  );
}
