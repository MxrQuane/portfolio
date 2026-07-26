import Section from '../utils/Section';

const Services = () => {
    const services = [
        {
            title: "Cystom Desktop Applications",
            description: "Cross-platform apps with Electron + React — local data, native feel, offline-first when needed."
        },
        {
            title: "Full-Stack Web Apps",
            description: "End-to-end React + Node apps, from data model to deployed product."
        },
        {
            title: "Backend & API Development",
            description: "Node.js/Express APIs, database design, auth flows, third-party integrations (OAuth, external APIs, etc.)"
        },
        {
            title: "AI/ML Integration & Prototyping",
            description: "Adding predictive models, automation, or TensorFlow-based features into existing products, not building research models, but making ML usable in a real app."
        }
    ]
    return (
        <Section id="services">
            <div className="absolute top-16 right-8 uppercase" >
                <h1 className="text-9xl font-semibold text-muted" >Services</h1>
                <h2 className="text-4xl font-semibold text-end text-secondary-muted" >what I offer</h2>
            </div>
            <div className="flex flex-col gap-8">
                {services.map((service,index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 max-w-3xl">
                            <h3 className="text-primary text-3xl" >{service.title}</h3>
                            <p className="text-secondary-foreground text-2xl" >{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </Section>
    );
};

export default Services;
