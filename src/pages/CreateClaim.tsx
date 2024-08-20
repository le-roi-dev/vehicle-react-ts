import { useState } from "react";
import DashboardTabs from "../components/Dashboard/ClaimContainer";
import DefaultLayout from "../layout/DefaultLayout";
import CustomizedSteppers from "../components/CreateClaim/Stepper";
import Step1 from "../components/CreateClaim/Step1";
import Step2 from "../components/CreateClaim/Step2/Step2";
import Step3 from "../components/CreateClaim/Step3/Step3";
import Step4 from "../components/CreateClaim/Step4";
import Step5 from "../components/CreateClaim/Step5";
import Step6 from "../components/CreateClaim/Step6";
import useClaimItem from "../hooks/useClaimItems";

const CreateClaim = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedItem, setSelectedItem] = useState<any>('');
    const [claimItem, setClaimItem] = useClaimItem();

    const steps = ['Initial/Vehicle Info', 'Incident/Driver Info', 'Series of Questions', 'Review', 'Submission'];
    const handleNextClick = () => {
        let nextStep = activeStep + 1;
        setActiveStep(nextStep);
        console.log(claimItem);
    }

    const handlePreviousClick = () => {
        let nextStep = activeStep - 1 < 0 ? 0 : activeStep - 1;
        setActiveStep(nextStep);
    }

    let showedStep;
    switch (activeStep) {
        case 0:
            showedStep = <Step1 handleNextClick={handleNextClick} />
            break;
        case 1:
            showedStep = <Step2 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
            break;
        case 2:
            showedStep = <Step3 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
            break;
        case 3:
            showedStep = <Step4 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
            break;
        case 4:
            showedStep = <Step5 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
            break;
        case 5:
            showedStep = <Step6 handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
            break;
    }

    return (
        <DefaultLayout>
            <div className="bg-white p-16">
                <div className="mb-10">
                    <div className="text-4xl font-bold">
                        Add New Claim
                    </div>
                    <div className='h-[5px] w-[200px] mt-2 rounded-full bg-orange-400'></div>
                </div>
                <CustomizedSteppers activeStep={activeStep} steps={steps} />
                <div className="mt-10">
                    {showedStep}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default CreateClaim;
