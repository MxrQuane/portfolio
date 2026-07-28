
const SectionTitle = ({ title, subTitle, textAlign="text-center", x="top-16", y="right-8"}) => {
    return (
        <div className={`absolute ${x} ${y} uppercase -z-1`} >
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-muted tracking-tighter -mb-2" >{title}</h1>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${textAlign} text-secondary-muted`} >{subTitle}</h2>
        </div>
    );
};

export default SectionTitle;