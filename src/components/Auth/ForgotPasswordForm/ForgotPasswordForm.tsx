import React from "react";
import { Link } from "react-router-dom";
import EmailSend from "./EmailSend";
import EmailSent from "./EmailSent";

export default function ForgotPasswordForm() {
    const [sent, setSent] = React.useState(false);
    return (
        <form>
            <div className='text-4xl mt-8 font-medium'>Forgot Password</div>
            <div className='h-[5px] w-[280px] mt-2 rounded-full bg-orange-400'></div>
            <div className='text-base mt-3 text-slate-700 font-medium'>We'll send an email to reset your password</div>
            { sent ? <EmailSent /> : <EmailSend setSent={setSent}/> }
        </form>
    );
}
