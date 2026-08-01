import PrimaryButton from "./PrimaryButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const GetInTouchButton = ({ className, onClick }) => {
    return (
        <PrimaryButton
            className={className}
            onClick={onClick} 
            icon={faPaperPlane}
        >
            get in touch
        </PrimaryButton>
    );
};

export default GetInTouchButton;