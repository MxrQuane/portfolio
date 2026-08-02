const GetInTouchInput = ({ label, type, id, value, onChange, placeholder, required = false }) => {
    if(type === 'yesNo') {
        return (
            <div className="flex gap-4" >
                <label htmlFor={id} className="text-sm md:text-lg font-semibold text-secondary-foreground" >
                    <span className="mr-1 text-primary">{required && "*"}</span>
                    {label}:
                </label>
                <div className="flex gap-2 md:gap-4">
                    <button 
                        className={`git-input text-sm md:text-md w-16 wmd:w-24 outline-none border-b-2 border-b-secondary-muted transition-colors ${value === false ? 'border-b-primary! text-primary!' : ''}`}
                        onClick={() => onChange({ target: { value: false } })}
                    >
                        No
                    </button>
                    <button
                        className={`git-input text-sm md:text-md w-16 outline-none border-b-2 border-b-secondary-muted transition-colors ${value === true ? 'border-b-primary! text-primary!' : ''}`}
                        onClick={() => onChange({ target: { value: true } })}
                    >
                        Yes
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className={`flex gap-4 ${id === 'website' ? 'absolute -left-999 pointer-events-none' : ''}`} >
            <label htmlFor={id} className="text-sm md:text-lg shrink-0 font-semibold text-secondary-foreground" >
                <span className="mr-1 text-primary">{required && "*"}</span>
                {label}:
            </label>
            <input 
                className="git-input text-sm md:text-md w-full max-w-md outline-none border-b-2 border-b-secondary-muted focus:border-b-primary transition-colors"
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default GetInTouchInput;