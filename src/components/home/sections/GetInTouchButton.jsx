import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const GetInTouchButton = ({ className }) => {
    return (
        <button
            className={`flex items-center gap-2 cursor-pointer font-semibold text-2xl bg-linear-to-r from-primary to-primary-500 rounded-3xl py-2 px-5 hover:scale-104 transition-transform duration-200 ${className}`}
            onClick={() => console.log("hhh")} 
        >
            <FontAwesomeIcon icon={faPaperPlane} />
            get in touch
        </button>
    );
};

export default GetInTouchButton;