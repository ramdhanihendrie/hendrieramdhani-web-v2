import LandingLayout from "@/Layouts/LandingLayout";
import Hero from "./Section/Hero";
import About from "./Section/About";

export default function Landing() {
    return (
        <LandingLayout>
            <div className="container mx-auto py-3">
                <Hero />
                <About />
            </div>
        </LandingLayout>
    );
}
