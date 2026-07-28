import { useEffect, useRef, useState } from 'react';
import Section from '../utils/Section';
import SectionTitle from '../utils/SectionTitle';
import { services } from '../../../data/services';

const ServiceItem = ({ service }) => {
    const itemRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (itemRef.current) observer.unobserve(itemRef.current);
                }
            },
            { threshold: 0.2 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`
                service-item relative 
                flex flex-col gap-2 max-w-3xl 
                before:content-[''] before:absolute 
                before:-left-14  
                before:w-[calc(100%+4rem)] before:h-[calc(100%+1rem)] 
                before:bg-primary before:skew-x-12 
                before:z-98
                after:content-[''] after:absolute 
                after:-left-12 
                after:-top-2 
                after:w-[calc(100%+3rem)] after:h-[calc(100%+1rem)] 
                after:bg-[#0E0B37] after:skew-x-12 
                after:z-99
                ${isVisible ? 'animate-in' : ''}
            `}
        >
            <div className="service-text-curtain z-100 flex flex-col gap-2">
                <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl">{service.title}</h3>
                <p className="text-secondary-foreground text-sm sm:text-lg lg:text-2xl">{service.description}</p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <Section id="services">
            <SectionTitle title="services" subTitle="what I offer" textAlign="text-end" x="top-4 sm:top-6 lg:top-8 xl:top-16" y="right-4 sm:right-6 lg:right-8" />
            <div className="flex flex-col gap-4 sm:gap-12 mt-16">
                {services.map((service, index) => (
                    <ServiceItem key={index} service={service} />
                ))}
            </div>
        </Section>
    );
};

export default Services;

