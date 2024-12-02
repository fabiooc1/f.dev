import { DataAboutMe } from "../../../data/constants/DataAboutMe";
import { SectionContainer } from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";
import { AboutMeCard } from "./AboutMeCard";

export function AboutMe() {
    return (
        <SectionContainer id="about-me">
            <SectionTitle title="Sobre mim" />

            <div className="flex flex-col gap-8">
                {DataAboutMe.map((item) => (
                    <AboutMeCard key={item.id} {...item} />
                ))}
            </div>
        </SectionContainer>
    )
}