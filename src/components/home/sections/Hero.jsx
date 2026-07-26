import Section from "../Section";
import heroBg from "../../../assets/images/hero.webp";

const Hero = () => {
    return (
        <Section
            id="home"
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative flex flex-col gap-8">
                <h1 className="text-primary-foreground text-6xl">
                    I build software that actually&nbsp;
                    <span className="text-primary">ships</span>
                </h1>
                <p className="text-secondary-foreground text-4xl max-w-3xl" >
                    Freelance engineer specializing in web & desktop apps, backend systems, and AI integrations — from prototype to production.
                </p>
            </div>
        </Section>
    );
};

export default Hero;