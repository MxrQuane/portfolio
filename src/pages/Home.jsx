import { useEffect } from "react";
import Header from "../components/home/Header";
import About from "../components/home/sections/About";
import Contact from "../components/home/sections/Contact";
import Hero from "../components/home/sections/Hero";
import Services from "../components/home/sections/Services";
import Work from "../components/home/sections/Work";

const Home = () => {
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div>
                <Hero />
                <Services />
                <Work />
                <About />
                <Contact />
            </div>
        </div>
    );
};

export default Home;