import Section from "../../utils/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../../data/projects";
import SectionTitle from "../../utils/SectionTitle";

export const Work = () => {
    return (
        <Section id="work" className="h-400!" >
            <SectionTitle title="work" subTitle="things I've built" x="top-16" y="left-14" />
            {
                projects.map((project, i) => (
                    <ProjectCard 
                        key={i}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        x={project.x}
                        y={project.y}
                        display={project?.display}
                    />
                ))
            }
            
        </Section>
    );
};
