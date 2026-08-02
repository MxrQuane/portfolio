import GetInTouchInput from "./GetInTouchInput"
import { ChevronLeft, ChevronRight } from "lucide-react";

const GetInTouchStep = ({
    currentStep,
    setCurrentStep,
    title,
    subtitle,
    inputs,
    steps,
    form,
    setForm,
    stepRequiredFields,
    onSubmit,
}) => {
    const stepKeys = ['whoAreYou', 'whatDoYouNeed', 'scopsAndLogistics', 'anythingElse'];
    const isNextDisabled = stepRequiredFields?.some(
        field => !form[stepKeys[currentStep]][field]
    );

    return (
        <div className="step-content">
            <div className="flex flex-col gap-2 md:gap-4">
                {currentStep === 0 &&
                    <p className="text-lg md:text-xl text-secondary-foreground" >
                        Welcome! To make sure I understand what you're looking for and how I can help, let's start with a few quick questions.
                    </p>
                }
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground" >{title}</h3>
                    <h4 className="text-sm md:text-lg font-semibold text-secondary-muted" >{subtitle}</h4>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                    {inputs?.map((input, index) => (
                        <GetInTouchInput
                            key={index} 
                            required={input.required}
                            label={input.label}
                            type={input.type}
                            id={input.name}
                            value={form[stepKeys[currentStep]][input.name]}
                            onChange={(e) => setForm({ ...form, [stepKeys[currentStep]]: { ...form[stepKeys[currentStep]], [input.name]: e.target.value } })}
                            placeholder={input.placeholder}
                        />
                    ))}
                </div>
                <div className="action-buttons absolute bottom-12 right-16 flex gap-12">
                    {currentStep > 0 &&
                        <button
                            className="back-button relative flex items-center text-primary-500 cursor-pointer"
                            onClick={() => setCurrentStep((prev) => prev - 1)}
                        >
                            <ChevronLeft  size={20} />
                            Back
                        </button>
                    }
                    {currentStep < steps.length - 1 &&
                        <button
                            className={`next-button relative flex items-center ${isNextDisabled ? 'text-muted cursor-default pointer-events-none' : 'enabled-animation text-primary cursor-pointer'}`} 
                            disabled={isNextDisabled}
                            onClick={() => setCurrentStep((prev) => prev + 1)}
                        >
                            Next
                            <ChevronRight  size={20} />
                        </button>
                    }
                    {currentStep === steps.length - 1 &&
                        <button
                            className={`submit-button relative flex items-center ${isNextDisabled ? 'text-muted cursor-default pointer-events-none' : 'enabled-animation text-primary cursor-pointer'}`}
                            disabled={isNextDisabled}
                            onClick={onSubmit}
                            type="submit"
                        >
                            Submit
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default GetInTouchStep