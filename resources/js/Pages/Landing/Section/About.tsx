import { useAppSelector } from "@/redux/hooks";
import Certificates from "../Partials/Certificates";
import Educations from "../Partials/Educations";
import Techs from "../Partials/Techs";

export default function About() {
  const about = useAppSelector((state) => state.landing.data.about);

  return (
    <section id="about" className="container mx-auto py-5 pt-20">
      <h3 className="text-2xl font-semibold text-indigo-500">
        {about.title} :
      </h3>
      <p className="mt-3 text-justify leading-7 tracking-wide">
        {about.description}
      </p>
      <Techs />
      <Educations />
      <Certificates />
    </section>
  );
}
