import { useRef, useState } from "react";
import GetInTouchButton from "../../utils/GetInTouchButton";
import { Undo } from "lucide-react";
import { Steps } from 'antd';
import { steps, stepInputs, stepRequiredFields } from '../../../../data/getInTouch';
import GetInTouchStep from "./GetInTouchStep";

const GetInTouch = () => {
    const [displayGIT, setDisplayGIT] = useState(false);
    const gitRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [form, setForm] = useState({
        whoAreYou: {
            name: '',
            company: '',
            email: '',
        },
        whatDoYouNeed: {
            projectType: '',
            description: '',
        },
        scopsAndLogistics: {
            budget: '',
            timeline: '',
            designExisting: false,
        },
        anyElse: '',
    });
    steps.forEach((step, index) => {
        step.styles = {
            title: {
                color: current === index ? 'var(--color-primary)' : 'var(--color-primary-500)',
                textDecoration: current > index ? 'line-through' : 'none',
            },
            icon: {
                background: current === index ? 'var(--color-primary)' : 'var(--color-primary-500)'
            }
        };
    });

    const handleGetInTouch = () => {
        setDisplayGIT(true);
    }

    const handleClose = () => {
        gitRef.current.classList.add('animate-out');
        setTimeout(() => {
            setCurrent(0);
            setDisplayGIT(false);
        },500)
    }
    return (
        <>
        <GetInTouchButton className="mt-10 md:mt-20" onClick={handleGetInTouch} />
        {displayGIT &&
            <div className="git-container" ref={gitRef} >
                <div className="git-background fixed top-0 inset-x-0 h-[30%] bg-primary z-499" />
                <div className="git-foreground fixed bottom-0 inset-x-0 h-[70%] bg-background p-12 flex flex-col z-500" >
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default GetInTouch;