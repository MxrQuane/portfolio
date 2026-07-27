import Section from "../../utils/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../../data/projects";

export const Work = () => {
    return (
        <Section id="work" className="h-400!" >
            <div className="absolute top-16 left-14 uppercase" >
                <h1 className="text-9xl font-semibold text-muted" >Work</h1>
                <h2 className="text-4xl font-semibold text-center text-secondary-muted" >things I've built</h2>
            </div>
            {
                projects.map((project, index) => (
                    <ProjectCard 
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
