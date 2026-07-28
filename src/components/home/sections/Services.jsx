import Section from '../utils/Section';
import SectionTitle from '../utils/SectionTitle';
import { services } from '../../../data/services'

const Services = () => {
    return (
        <Section id="services">
            <SectionTitle title="services" subTitle="what I offer" textAlign="text-end" x="top-4 sm:top-6 lg:top-8 xl:top-16" y="right-4 sm:right-6 lg:right-8" />
            <div className="flex flex-col gap-4 sm:gap-8 mt-4">
                {services.map((service,index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 max-w-3xl">
                            <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl" >{service.title}</h3>
                            <p className="text-secondary-foreground text-sm sm:text-lg lg:text-2xl" >{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </Section>
    );
};

export default Services;
