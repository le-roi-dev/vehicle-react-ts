import React from "react";
import { Link } from "react-router-dom";

export default function EmailSent() {
    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            <div className="w-10 h-10 bg-[#06bf00] rounded-full flex justify-center items-center">
                <svg className='w-5 h-5' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.369 78.369" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path> </g> </g></svg>
            </div>
            <div className="text-xl font-bold py-6">Link Sent Successfully</div>
            <div className="text-sm">Reset password link sent on your mail.</div>
            <div className="text-sm">You can reset your password by this link</div>
            <Link to={'/auth/resetpassword'} className='block bg-orange-400 w-full py-4 text-center text-white mt-10 rounded-2xl'>Ok</Link>
        </div>
    );
}
