import Section from "../utils/Section";
import SectionTitle from "../utils/SectionTitle";

const About = () => {
    const S = ({children}) => {
        return(
            <span className="text-primary">{children}</span>
        )
    }
    return (
        <Section id="about">
            <SectionTitle title="about" subTitle="why trust me?" x="-top-20" y="left-1/2 -translate-x-1/2" />
            <p className="text-secondary-foreground text-2xl max-w-4xl" >
                I'm <S>Marouane Haine</S>, an engineer who turns <S>messy real-world problems into software that actually works</S>. My projects span AI-powered prediction systems, capable business tools, tools shaped by the problems people actually have.
                <br />
                <br />
                What ties this work together is the same approach: understand the actual problem before writing a single line of code, then build something that holds up end-to-end — <S>not a demo, a shipped product</S>. That's also why I built Zirox, my own task management app, from architecture to beta launch myself. Going through that full cycle — design decisions, integrations, and the boring parts of shipping — is what shapes how I approach client work too.
                <br />
                <br />
                I'm currently finishing a <S>Master's in AI Engineering at the University of 8 Mai 1945 - Guelma</S>, which grounds the AI/ML side of my work.
                <br />
                <br />
                I work best with <S>clear scope, honest timelines</S>, and <S>regular check-ins</S> — not silence until a big reveal. If you've got a real problem that needs real software behind it, I'd like to hear about it.
            </p>
        </Section>
    );
};

export default About;