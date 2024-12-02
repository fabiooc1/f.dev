import { AppPading } from "../components/AppPadding";
import { Footer } from "../components/Footer";
import { Header } from "../components/header/Header";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/sections/about-me/AboutMe";
import { Contact } from "../components/sections/contact/Contact";
import { Journey } from "../components/sections/journey/Journey";
import { Projects } from "../components/sections/projects/Projects";

export function HomePage() {
    return (
        <>
            <Header />
            <AppPading>
                <Hero />
                <AboutMe />
                <Journey />
                <Projects />
                <Contact />
            </AppPading>
            <Footer />
        </>
    )
}