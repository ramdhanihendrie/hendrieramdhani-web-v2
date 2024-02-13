import LandingLayout from "@/Layouts/LandingLayout";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Projects from "./Section/Projects";
import Contact from "./Section/Contact";
import { PageProps } from "@/types";
import axios from "axios";
import { useEffect } from "react";
import { setData } from "@/redux/features/landingSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function Landing({ auth }: PageProps) {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        axios.get('/api/landing').then(response => {
            dispatch(setData(response.data))
        })
    }, []);

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
