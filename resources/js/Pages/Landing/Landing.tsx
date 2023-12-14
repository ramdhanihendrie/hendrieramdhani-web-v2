import LandingLayout from "@/Layouts/LandingLayout";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Projects from "./Section/Projects";
import Contact from "./Section/Contact";
import { PageProps } from "@/types";

export default function Landing({ auth }: PageProps) {
    return (
        <LandingLayout user={auth.user}>
            <div className="container mx-auto py-3 scroll-smooth">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </LandingLayout>
    );
}
