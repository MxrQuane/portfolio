import { useRef, useState } from "react";
import GetInTouchButton from "../../../utils/GetInTouchButton";
import { Undo } from "lucide-react";
import { Steps } from 'antd';
import { steps, stepInputs, stepRequiredFields, initialForm } from '../../../../../data/getInTouch';
import GetInTouchStep from "./GetInTouchStep";

export const GetInTouch = () => {
    const [displayGIT, setDisplayGIT] = useState(false);
    const gitRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [form, setForm] = useState(initialForm);
    steps.forEach((step, index) => {
        step.styles = {
            title: {
                color: current === index ? 'var(--color-primary)' : 'var(--color-primary-700)',
                textDecoration: current > index ? 'line-through' : 'none',
            },
            icon: {
                background: current === index ? 'var(--color-primary)' : 'var(--color-primary-700)'
            },
        };
    });

    const handleGetInTouch = () => {
        setDisplayGIT(true);
    }

    const handleClose = () => {
        gitRef.current.classList.add('animate-out');
        setTimeout(() => {
            setCurrent(0);
            setForm(initialForm);
            setDisplayGIT(false);
            setSubmitted(false);
        },500)
    }

    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = async () => {
        // skip if website field is filled
        if (form?.whoAreYou?.website) return;

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.whoAreYou.name,
                    email: form.whoAreYou.email,
                    company: form.whoAreYou.company,
                    projectType: form.whatDoYouNeed.projectType,
                    description: form.whatDoYouNeed.description,
                    budget: form.scopsAndLogistics.budget,
                    timeline: form.scopsAndLogistics.timeline,
                    anyElse: form.anyElse,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // success — show confirmation UI
            setSubmitted(true);
            setTimeout(() => {
                handleClose();
            }, 5000)
        } catch (error) {
            console.error('EmailJS error:', error);
            // show an error state, maybe with a fallback "email me directly" link
        }
    }
    
    return (
        <>
        <GetInTouchButton className="mt-10 md:mt-20" onClick={handleGetInTouch} />
        {displayGIT &&
            <div className="git-container" ref={gitRef} >
                <div className="git-background fixed top-0 inset-x-0 h-[30%] bg-primary z-499" />
                <div className="git-foreground fixed bottom-0 inset-x-0 h-[70%] bg-background p-12 flex flex-col z-500" >
                    {submitted ? (
                        <>
                        <div className={`closing-load-bar ${submitted ? 'animate-out' : ''} absolute inset-x-0 top-0 h-2 bg-primary-500`} />
                        <div className="confirmation-message flex flex-col gap-2" >
                            <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground" >
                                Thanks <span className="capitalize text-primary-500" >{form.whoAreYou.name}</span>!
                            </h3>
                            <p className="text-2xl md:text-4xl font-semibold text-secondary-foreground" >
                                Your message is in my inbox. I'll get back to you as soon as possible — usually within 24-48 hours.
                            </p>
                        </div>
                        </>
                    ) : (
                    <>
                    <button 
                        className="go-back p-4 bg-muted rounded-full cursor-pointer self-end text-secondary-muted hover:bg-primary hover:text-primary-foreground"
                        onClick={handleClose}
                    >
                        <Undo  size={20} />
                    </button>
                    <div className="flex gap-10" >
                        <Steps
                            orientation="vertical"
                            styles={{
                                item: {
                                    paddingBottom: '32px'
                                },
                                itemIcon: {
                                    color: 'var(--color-primary-foreground)'
                                }
                            }}
                            current={current}
                            items={steps}
                        />

                        <div className="steps-content-container">
                            <GetInTouchStep
                                currentStep={current} 
                                setCurrentStep={setCurrent} 
                                title={steps[current]?.title}
                                subtitle={steps[current]?.subtitle}
                                inputs={stepInputs[current]}
                                steps={steps}
                                form={form}
                                setForm={setForm}
                                stepRequiredFields={stepRequiredFields[current]}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                    </>
                    )}
                </div>
            </div>
        }
        </>
    );
};