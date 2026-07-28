
const Header = () => {
    const navLinks = ["home", "services", "work", "about", "contact"];
    return (
        <div className="fixed inset-x-0 top-0 bg-black flex items-center justify-start gap-6 sm:gap-12 p-4 z-100" >
            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl" >
                <span className="font-primary text-primary">&lt;</span>
                <a className="font-logo text-primary-foreground" href="#home">MARO</a>
            </div>
            <div className="flex items-center gap-4 sm:gap-6" >
                {navLinks.map((navLink, i) => {
                    return (
                        <a
                            key={i}
                            className="text-xs sm:text-s md:text-m xl:text-lg hover:text-primary-foreground active:text-primary capitalize"
                            href={`#${navLink}`}
                        >
                            {navLink}
                        </a>
                    )
                })}
                <div className="relative flex items-center gap-1">
                    <span className="font-primary text-primary transform translate-y-px">/</span>
                    <span className="font-primary text-primary">&gt;</span>
                </div>
            </div>
        </div>
    );
};

export default Header;