
const SkillTag = ({children}) => {
    return (
        <div className="skill-tag px-3 py-1 w-fit bg-muted" >
            <span className="text-secondary-muted capitalize" >#{children}</span>
        </div>
    );
};

export default SkillTag;