import { Link } from "react-router-dom";
import CustomizedInput from "../CustomizedComponent/CustomizedInput";
import userIcon from '../../images/icons/user.svg';
import security from '../../images/icons/security.svg';
import invisibleEye from '../../images/icons/invisibleEye.svg';
import appleIcon from '../../images/icons/apple.svg';
import googleIcon from '../../images/icons/google.svg';
import facebookIcon from '../../images/icons/facebook.svg';

export default function LoginForm() {
    return (
        <form>
            <div className='text-4xl mt-8 font-medium'>Login</div>
            <div className='h-[5px] w-[100px] mt-2 rounded-full bg-orange-400'></div>
            <div className='mt-12 flex flex-col gap-4'>
                <CustomizedInput
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    startIcon={<img src={userIcon} alt="User" />}
                />
                <CustomizedInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    startIcon={<img src={security} alt="Password" />}
                    endIcon={<img src={invisibleEye} alt="InvisibleEye" />}
                />

                <Link to={'/auth/forgotpassword'} className='text-orange-400 text-sm flex justify-end'>Forgot Password?</Link>
                <Link to='/dashboard' className='block bg-orange-400 w-full py-4 text-center text-white mt-10 rounded-2xl'>Login</Link>
                <div className="py-10 flex items-center text-xs before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or login with</div>
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

        </form>
    );
}


