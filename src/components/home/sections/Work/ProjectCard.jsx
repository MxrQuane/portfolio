import { useRef } from "react";

const ProjectCard = ({ title, description, image, top, left }) => {
    // 2. 3D Tilt Effect on Card
    const card = useRef();
    const frame = useRef();
    const ROTATION_INTENSITY = 30;

    const handleMouseMove = (e) => {
        if (card.current && frame.current) {
            const rect = card.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const normalizedX = (x / rect.width) * 2 - 1;
            const normalizedY = (y / rect.height) * 2 - 1;

            frame.current.style.transform = `rotateY(${normalizedX * -ROTATION_INTENSITY}deg) rotateX(${-normalizedY * -ROTATION_INTENSITY}deg) scale(1.02)`;
        }
    };

    const handleMouseLeave = () => {
        if (frame.current) {
            frame.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        }
    };
    return (
        <div 
            ref={card} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`absolute ${left} ${top} z-60 perspective-[1000px]`}
        >
            <div ref={frame} className="relative transform-3d transition-transform duration-500 ease-out">
                <div className="w-[25rem] h-[14rem] bg-muted" >
                    <img src={image} className="w-full h-full" />
                </div>
                <div className="absolute translate-z-6 flex flex-col gap-2 -left-10 bottom-6">
                    <h1 className="text-4xl font-semibold text-primary-foreground underline underline-offset-12">{title}</h1>
                    <p className="text-xl text-secondary-foreground" >{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;