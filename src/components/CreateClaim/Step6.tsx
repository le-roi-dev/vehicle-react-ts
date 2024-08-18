import { Link } from "react-router-dom";
import ClaimCard_Submission from "../Cards/ClaimCard_Submission";

interface Step6Props {
    handleNextClick?: () => void;
    handlePreviousClick?: () => void,
}


const Step6 = () => {
    return (
        <>
            <div className="text-4xl font-medium">Application Submission</div>
            <div className='h-[5px] w-[380px] mt-2 rounded-full bg-orange-400'></div>
            <div className="text-2xl pt-2 font-medium">Confirm your application</div>
            <div className="flex flex-col justify-center items-center pt-16">
                <div className="w-10 h-10 bg-[#06bf00] rounded-full flex justify-center items-center">
                    <svg className='w-5 h-5' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.369 78.369" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path> </g> </g></svg>
                </div>
                <div className="text-xl font-bold py-6">Application Submitted Successfully</div>
                <div className="text-sm">Your application has been submitted.</div>
                <div className="text-sm">successfully</div>
                <Link to={'/dashboard'} className="bg-orange-400 text-white px-30 py-3 mt-10 rounded-2xl shadow-lg">Go Back to Dashboard</Link>
            </div>
        </>
    );
}

export default Step6;