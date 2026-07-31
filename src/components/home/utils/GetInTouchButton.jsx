import PrimaryButton from "./PrimaryButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const GetInTouchButton = ({ className }) => {
    return (
        <PrimaryButton
            className={className}
            onClick={() => console.log("get in touch")} 
            icon={faPaperPlane}
        >
            get in touch
        </PrimaryButton>
    );
};

export default GetInTouchButton;