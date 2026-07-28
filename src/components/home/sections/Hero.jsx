import Section from "../utils/Section";
import heroBg from "../../../assets/images/hero.webp";

const Hero = () => {
    // Configurable delays for each element (in seconds or ms)
    const TITLE_DELAY = "1.8s";
    const DESCRIPTION_DELAY = "2.4s";
    const SHIPS_COLOR_DELAY = "2.8s";

    return (
        <Section
            id="home"
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative overflow-hidden -ml-4 pl-4 sm:-ml-8 sm:pl-8 md:-ml-10 md:pl-10 p-4 flex flex-col gap-8 mt-20">
                <h1 
                    className="text-primary-foreground font-semibold text-2xl sm:text-5xl md:text-6xl animate-hero-emerge"
                    style={{ animationDelay: TITLE_DELAY }}
                >
                    I build software that actually&nbsp;
                    <span 
                        className="animate-color-primary" 
                        style={{ animationDelay: SHIPS_COLOR_DELAY }}
                    >
                        ships
                    </span>
                </h1>
                <p 
                    className="text-secondary-foreground font-semibold text-xl sm:text-3xl md:text-4xl max-w-3xl animate-hero-emerge"
                    style={{ animationDelay: DESCRIPTION_DELAY }}
                >
                    Freelance engineer specializing in web & desktop apps, backend systems, and AI integrations — from prototype to production.
                </p>
            </div>
        </Section>
    );
};

export default Hero;