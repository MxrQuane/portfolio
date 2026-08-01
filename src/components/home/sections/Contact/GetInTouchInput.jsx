const GetInTouchInput = ({ label, type, id, value, onChange, placeholder, required = false }) => {
    return (
        <div className="flex gap-4" >
            <label htmlFor={id} className="text-lg font-semibold text-secondary-foreground" >
                <span className="mr-1 text-primary">{required && "*"}</span>
                {label}:
            </label>
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                className="git-input w-md outline-none border-b-2 border-b-secondary-muted focus:border-b-primary transition-colors"
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default GetInTouchInput;