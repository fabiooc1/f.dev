import { DataProjects } from "../../../data/constants/DataProjects";
import { SectionContainer } from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";
import { Carousel } from "./Carousel";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <SectionContainer id="projects">
            <SectionTitle title="Projetos" />

            <Carousel>
                {DataProjects.map((item) => (
                    <ProjectCard key={item.id} {...item} />
                ))}
            </Carousel>
        </SectionContainer >
    );
}