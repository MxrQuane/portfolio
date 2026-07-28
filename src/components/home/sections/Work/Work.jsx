import Section from "../../utils/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../../data/projects";
import SectionTitle from "../../utils/SectionTitle";

export const Work = () => {
    return (
        <Section id="work" className="h-500! sm:h-680! md:h-400!" >
            <SectionTitle title="work" subTitle="things I've built" x="top-4 sm:top-6 lg:top-8 xl:top-16" y="left-4 sm:left-6 lg:left-8 xl:left-14" />
            <div className="absolute flex flex-col gap-16 inset-0 p-5 pt-50 z-60" >
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

            </div>
            
        </Section>
    );
};
