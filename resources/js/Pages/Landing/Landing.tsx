import LandingLayout from "@/Layouts/LandingLayout";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Projects from "./Section/Projects";
import Contact from "./Section/Contact";

export default function Landing() {
    return (
        <LandingLayout>
            <div className="container mx-auto py-3">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </LandingLayout>
    );
}
