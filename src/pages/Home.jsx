import Header from "../components/home/Header";
import Hero from "../components/home/sections/Hero";
import Services from "../components/home/sections/Services";

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <Hero />
                <Services />
            </div>
        </div>
    );
};

export default Home;