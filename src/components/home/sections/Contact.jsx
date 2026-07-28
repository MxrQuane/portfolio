import Section from '../utils/Section';
import SectionTitle from '../utils/SectionTitle';
import { socials } from '../../../data/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetInTouchButton from '../utils/GetInTouchButton';

const Contact = () => {
    return (
        <Section id="contact">
            <SectionTitle title="contact" subTitle="have a project in mind?" textAlign="text-end" x="bottom-16" y="right-8" />
            <h2 className="text-primary-foreground text-2xl mt-10 md:mt-20 mb-5">Find me on:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center max-w-5xl">
                {socials.map((social, i) => (
                    <a className="flex text-primary text-sm md:text-lg lg:text-xl items-center gap-2" key={i} href={social.link} target="_blank">
                        <FontAwesomeIcon icon={social.icon} />
                        <h1>{social.text}</h1>
                    </a>
                ))}
            </div>
            <GetInTouchButton className="mt-10 md:mt-20" />
        </Section>
    );
};

export default Contact;