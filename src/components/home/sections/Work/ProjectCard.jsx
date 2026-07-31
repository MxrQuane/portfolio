import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsTouchDevice } from "../../../../hooks/IsTouch"
import { usePageTransition } from "../../../TransitionContext";

// display = L: Landscape
// display = P: Portrait
const ProjectCard = ({ title, subTitle, thumbnail, x, y, display="L" }) => {
    const navigate = useNavigate();
    const { startTransition } = usePageTransition();
    const projectId = title.toLowerCase().replaceAll(" ", "-");
    // 2. 3D Tilt Effect on Card
    const card = useRef();
    const frame = useRef();
    const ROTATION_INTENSITY = 30;
    const SCALE = 1.1;
    const isTouch = useIsTouchDevice();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (card.current) {
            observer.observe(card.current);
        }

        return () => observer.disconnect();
    }, []);


    const handleMouseMove = (e) => {
        if (!card.current || isTouch) return;
        const rect = card.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        
        const rX = (mouseY / (height / 2)) * -ROTATION_INTENSITY;
        const rY = (mouseX / (width / 2)) * ROTATION_INTENSITY;
        
        if (frame.current) {
            frame.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) scale(${SCALE})`;
        }
    };

    const handleMouseLeave = () => {
        if (frame.current) {
            frame.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        }
    };

    const [clickAnimation, setClickAnimation] = useState(false);
    const handleProjectClick = () => {
        setClickAnimation(true);
        // Delay navigation until card animate-out finishes, then start screen sweep
        setTimeout(() => {
            setClickAnimation(false);
            startTransition(() => {
                navigate(`/projects/${projectId}`);
            });
        }, 1000);
    };

    return (
        <div 
            ref={card} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleProjectClick()} 
            className={`md:absolute w-full md:w-fit ${x} ${y} perspective-[1000px] cursor-pointer`}
            id={projectId}
        >
            <div ref={frame} className={`project-card ${clickAnimation ? 'animate-out' : ''} ${isVisible ? 'animate-in' : ''} relative fade-in-left w-full transform-3d transition-transform duration-500 ease-out`}>
                <div
                    className={`card-image relative w-full h-56 sm:h-100 md:w-80 md:h-48 lg:w-100 lg:h-56 bg-white
                        before:content-['']
                        before:absolute before:inset-0 
                        before:bg-[linear-gradient(35deg,rgba(0,0,0,1),transparent_80%)] 
                        after:content-['']
                        after:absolute after:inset-0 
                        after:bg-primary
                        ${display === "P" && "w-62! h-110!"}`}
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                </div>
                <div className="card-text absolute translate-z-6 flex flex-col gap-2 -left-2 xl:-left-10 bottom-6
                    after:content-['']
                    after:absolute
                    after:-inset-1
                    after:bg-[#0E0B37]
                    after:z-100">
                    <h1 className="text-4xl font-semibold capitalize text-primary-foreground underline underline-offset-12">{title}</h1>
                    <p className="text-xl text-secondary-foreground" >{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;