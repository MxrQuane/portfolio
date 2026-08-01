import { useNavigate, useParams } from "react-router-dom";
import { Undo } from "lucide-react";
import { projects } from "../data/projects";
import SkillTag from "../components/home/utils/SkillTag";
import PrimaryButton from "../components/home/utils/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { usePageTransition } from "../components/TransitionContext";
import { useRef } from "react";

const ProjectPage = () => {
  const navigate = useNavigate();
  const { id:projectId } = useParams();
  const { startTransition } = usePageTransition();
  const project = projects.find((project) => project.title.toLowerCase().replaceAll(" ", "-") === projectId);
  const infoContainerRef = useRef(null);

  const handleBackClick = () => {
    infoContainerRef.current.classList.add("animate-out");
    setTimeout(() => {
        startTransition(() => {
            navigate(`/#${projectId}`);
        }, true);
    }, 400);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row bg-black">
        <div className="display-container md:w-3/6 lg:w-4/6 h-screen" >
            {project.images && 
                project.images.map((image, i) => (
                    <img key={i} src={image} alt="" />
                ))
            }
        </div>
        <div ref={infoContainerRef} className="info-container md:fixed bg-background right-0 md:w-3/6 lg:w-2/6 h-screen p-10 z-1" >
            <button 
                className="return-btn p-1 w-fit mb-8 bg-primary/90 rounded-full cursor-pointer text-white flex items-center justify-center"
                onClick={handleBackClick}
            >
                <Undo className="text-primary-foreground" size={18} />
            </button>
            <h1 className="title capitalize md:text-4xl text-5xl font-bold" >{project.title}</h1>
            <h2 className="subtitle mx:text-lg text-xl text-secondary-muted" >{project.subTitle}</h2>
            <p className="text-2xl md:text-xl mt-8 text-justify lg:leading-10" >{project.description}</p>
            <div className="tags flex flex-wrap items-center gap-4 mt-12" >
                {project.tags && project.tags.map((tag, i) => (
                    <SkillTag key={i} >{tag}</SkillTag>
                ))}
            </div>
            <div className="actions flex items-center gap-4 mt-20" >
                <PrimaryButton
                    className="px-6!"
                    onClick={() => {}}
                >
                    Download
                </PrimaryButton>
                {project.githubRepo && (
                    <a 
                        href={`https://github.com/${project.githubRepo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg underline text-link"
                    >
                        Github Repo
                        <FontAwesomeIcon icon={faBook} fontSize={14} />
                    </a>
                )}
            </div>
        </div>
    </div>
  );
};

export default ProjectPage;