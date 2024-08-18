import ClaimCard_Submission from "../Cards/ClaimCard_Submission";

interface Step5Props {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}


const Step5 = ({ handleNextClick, handlePreviousClick }: Step5Props) => {
    return (
        <>
            <div className="text-4xl font-medium">Application Submission</div>
            <div className='h-[5px] w-[380px] mt-2 rounded-full bg-orange-400'></div>
            <div className="text-2xl pt-2 font-medium">Confirm your application</div>
            <div className="mt-6 grid grid-cols-2 gap-10 flex-1">
                <ClaimCard_Submission />
            </div>
            <div className="flex justify-between">
                <button className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Save As Draft</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-15 py-2 text-lg mt-8 text-white rounded-2xl'>Submit Claim</button>
            </div>
        </>
    );
}

export default Step5;