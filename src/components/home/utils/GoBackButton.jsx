import { Undo } from "lucide-react";

const GoBackButton = ({
    onClick,
    className,
    iconSize=20,
}) => {
    return (
        <button 
            className={`${className} go-back p-2 lg:p-4 bg-muted rounded-full cursor-pointer self-end text-secondary-muted hover:bg-primary hover:text-primary-foreground`}
            onClick={onClick}
        >
            <Undo  size={iconSize}/>
        </button>
    );
}

export default GoBackButton