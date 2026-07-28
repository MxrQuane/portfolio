import { useEffect, useRef, useState } from "react";
import { useIsTouchDevice } from "../../../../hooks/IsTouch"

// display = L: Landscape
// display = P: Portrait
const ProjectCard = ({ title, description, image, x, y, display="L" }) => {
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
                    if (card.current) observer.unobserve(card.current);
                }
            },
            { threshold: 0.2 }
        );

        if (card.current) {
            observer.observe(card.current);
        }

        return () => observer.disconnect();
    }, []);


    const handleMouseMove = (e) => {
        if (!isTouch && card.current && frame.current) {
            const rect = card.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const normalizedX = (x / rect.width) * 2 - 1;
            const normalizedY = (y / rect.height) * 2 - 1;

            frame.current.style.transform = `rotateY(${-(normalizedX * ROTATION_INTENSITY)}deg) rotateX(${normalizedY * ROTATION_INTENSITY}deg) scale(${SCALE})`;
        }
    };

    const handleMouseLeave = () => {
        if (!isTouch && frame.current) {
            frame.current.style.transform = 'rotate(0deg) scale(1)';
        }
    };

    return (
        <div 
            ref={card} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`md:absolute w-full md:w-fit ${x} ${y} perspective-[1000px]`}
        >
            <div ref={frame} className={`project-card ${isVisible ? 'animate-in' : ''} relative fade-in-left w-full transform-3d transition-transform duration-500 ease-out`}>
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
                        backgroundImage: `url(${image})`,
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
                    <h1 className="text-4xl font-semibold text-primary-foreground underline underline-offset-12">{title}</h1>
                    <p className="text-xl text-secondary-foreground" >{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;