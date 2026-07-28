import { useHideOnScroll } from "../../hooks/Scroll";

const Header = () => {
    const NAV_LINKS = ["home", "services", "work", "about", "contact"];
    const hidden = useHideOnScroll(100);

    function smoothScrollTo(targetPosition, duration = 600) {
        const startPosition = window.scrollY || window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Ease in-out cubic
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    function handleNavClick(sectionId) {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const headerHeight = 60;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;

        smoothScrollTo(targetPosition, 600);
    }

    return (
        <div className={`fixed inset-x-0 top-0 bg-linear-to-b from-black via-black to-transparent flex items-center justify-start gap-6 sm:gap-12 p-4 z-100 transition-transform duration-300 ${hidden ? "-translate-y-full hover:translate-y-0" : ""}`} >
            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl" >
                <span className="font-primary text-primary">&lt;</span>
                <a 
                    className="font-logo text-primary-foreground" 
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("home");
                    }}
                >
                    MARO
                </a>
            </div>
            <div className="flex items-center gap-4 sm:gap-6" >
                {NAV_LINKS.map((navLink, i) => {
                    return (
                        <a
                            key={i}
                            className="text-xs sm:text-s md:text-m xl:text-lg hover:text-primary-foreground active:text-primary capitalize transition-colors duration-200"
                            href={`#${navLink}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(navLink);
                            }}
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