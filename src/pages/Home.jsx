import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/home/Header";
import About from "../components/home/sections/About";
import Contact from "../components/home/sections/Contact";
import Hero from "../components/home/sections/Hero";
import Services from "../components/home/sections/Services";
import Work from "../components/home/sections/Work";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = decodeURIComponent(location.hash.replace("#", ""));
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", window.location.pathname + window.location.search);
                    return;
                }
            }, 100);
        } else {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
        }
    }, [location]);

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