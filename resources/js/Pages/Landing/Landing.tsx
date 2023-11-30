import LandingLayout from "@/Layouts/LandingLayout";
import Hero from "./Section/Hero";

export default function Landing() {
    return (
        <LandingLayout>
            <div className="container mx-auto py-3">
                <Hero />
            </div>
        </LandingLayout>
    );
}
