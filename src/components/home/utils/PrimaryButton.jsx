import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrimaryButton = ({ className, children, onClick, icon }) => {
    return (
        <button
            className={`flex items-center gap-2 cursor-pointer font-semibold text-sm md:text-2xl bg-linear-to-r from-primary to-primary-500 rounded-3xl py-2 px-5 hover:scale-104 transition-transform duration-200 ${className}`}
            onClick={onClick} 
        >
            <FontAwesomeIcon icon={icon} />
            {children}
        </button>
    );
};

export default PrimaryButton;