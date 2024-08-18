import appleIcon from '../../../images/icons/apple.svg';
import googleIcon from '../../../images/icons/google.svg';
import facebookIcon from '../../../images/icons/facebook.svg';
import emailIcon from '../../../images/icons/email.svg';
import CustomizedInput from '../../CustomizedComponent/CustomizedInput';


interface EmailSendProps {
    setSent: (param: boolean) => void;
}
const EmailSend = ({ setSent }: EmailSendProps) => {
    return (
        <div className='mt-20'>
            <CustomizedInput
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                startIcon={<img src={emailIcon} alt="Email" />}
            />
            <button onClick={() => setSent(true)} className='block bg-orange-400 w-full py-4 text-center text-white mt-10 rounded-2xl'>Reset Password</button>
            <div className="py-14 flex items-center text-xs before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or login with</div>
            <div className='flex gap-10 items-center justify-center'>
                <div className='p-4 border rounded-full'>
                    {<img src={appleIcon} alt="appleIcon" />}
                </div>
                <div className='p-4 border rounded-full'>
                    {<img src={googleIcon} alt="googleIcon" />}
                </div>
                <div className='p-4 border rounded-full'>
                    {<img src={facebookIcon} alt="facebookIcon" />}
                </div>
            </div>
        </div>
    );
}

export default EmailSend;