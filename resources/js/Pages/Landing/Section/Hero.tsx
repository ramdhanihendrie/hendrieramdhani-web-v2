import PrimaryButton from "@/Components/PrimaryButton";
import axios from "axios";
import { useEffect, useState } from "react";

type IHeroContent = {
  greeting: string
  full_name: string
  position: string
  image: string
  file: string
}

const defaultHeroContent = {
  greeting: "",
  full_name: "",
  position: "",
  image: "",
  file: ""
}

export default function Hero (){
  const [heroContent, setHeroContent]: [IHeroContent, (heroContent: IHeroContent) => void] = useState(defaultHeroContent)

  useEffect(() => {
    axios.get<IHeroContent>('/api/hero').then(response => {
      setHeroContent(response.data)
    })
  }, []);

  return (
    <section id="hero" className="flex flex-col sm:flex-row-reverse justify-center sm:justify-around py-10 text-center sm:text-left items-center">
      <div>
        <img src={heroContent.image} alt="Picture of the author"  />
      </div>
      <div className="mt-5 sm:mt-0">
        <h2 className="text-3xl font-semibold">{heroContent.greeting}</h2>
        <h1 className="text-5xl font-semibold">{heroContent.full_name}</h1>
        <p className="py-6">{heroContent.position}</p>
        <a 
          href={heroContent.file} 
          download
        >
          <PrimaryButton>
            Download CV
          </PrimaryButton>
        </a>
      </div>
    </section>
  );
}
