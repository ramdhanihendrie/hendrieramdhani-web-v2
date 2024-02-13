import PrimaryButton from "@/Components/PrimaryButton";
import { useAppSelector } from "@/redux/hooks";

export default function Hero() {
  const hero = useAppSelector((state) => state.landing.data.hero);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center py-10 text-center sm:flex-row-reverse sm:justify-around sm:text-left"
    >
      <div>
        <img src={hero.image} alt="Picture of the author" />
      </div>
      <div className="mt-5 sm:mt-0">
        <h2 className="text-3xl font-semibold">{hero.greeting}</h2>
        <h1 className="text-5xl font-semibold">{hero.full_name}</h1>
        <p className="py-6">{hero.position}</p>
        <a href={hero.file} download>
          <PrimaryButton>Download CV</PrimaryButton>
        </a>
      </div>
    </section>
  );
}
