
const Section = ({
    id,
    className,
    style,
    children
}) => {
    return (
        <section
            id={id}
            className={`relative w-full min-h-screen ${className || ""}`}
            style={style}
        >
            <div className="timeline-line absolute left-timeline top-0 bottom-0 w-[0.5px] bg-primary z-50" />
            <div className="absolute left-timeline top-timeline-gap -translate-x-1/2 w-2 h-2 rounded-full bg-background border-2 border-primary z-51" />
            <div className="ml-timeline h-full p-4 sm:p-8 md:p-10 pt-timeline-gap!">
                {children}
            </div>
        </section>
    );
};

export default Section;