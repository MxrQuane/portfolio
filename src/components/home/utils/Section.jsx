
const Section = ({
    id,
    className,
    style,
    children
}) => {
    return (
        <section
            id={id}
            className={`relative w-full h-screen ${className || ""}`}
            style={style}
        >
            <div className="timeline-line absolute left-timeline top-0 bottom-0 w-[0.5px] bg-primary z-50" />
            <div className="absolute left-timeline top-timeline-gap -translate-x-1/2 w-2 h-2 rounded-full bg-background border-2 border-primary z-51" />
            <div className="ml-timeline pt-timeline-gap h-full p-10">
                {children}
            </div>
        </section>
    );
};

export default Section;