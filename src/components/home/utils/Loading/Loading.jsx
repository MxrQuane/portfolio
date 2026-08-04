import "./style.css";

export const Loading = ({ className, iconSize = "24px", animationDuration = "1.5s", animationFunction = "ease", lineThickness = "4px" }) => {
    const styles = {
        '--icon-size': iconSize,
        '--animation-duration': animationDuration,
        '--animation-function': animationFunction,
        '--line-thickness': lineThickness,
    };

    return (
        <div className={`loading-icon-container ${className}`} style={styles}>
            <div className="first-line"></div>
            <div className="second-line"></div>
        </div>
    );
};