import Header from "../components/home/Header";
import Hero from "../components/home/sections/Hero";
import Services from "../components/home/sections/Services";
import Work from "../components/home/sections/Work";

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <Hero />
                <Services />
                <Work />
            </div>
        </div>
    );
};

export default Home;