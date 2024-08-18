import { Link } from "react-router-dom";
import CustomizedInput from "../CustomizedComponent/CustomizedInput";
import security from '../../images/icons/security.svg';
import invisibleEye from '../../images/icons/invisibleEye.svg';

export default function ResetPasswordForm() {
    return (
        <form>
            <div className='text-4xl mt-8 font-medium'>Reset Password</div>
            <div className='h-[5px] w-[270px] mt-2 rounded-full bg-orange-400'></div>
            <div className='mt-12 flex flex-col gap-4'>
                <CustomizedInput
                    type="password"
                    id="password1"
                    name="password1"
                    placeholder="Create Password"
                    startIcon={<img src={security} alt="Password1" />}
                    endIcon={<img src={invisibleEye} alt="InvisibleEye1" />}
                />

                <CustomizedInput
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    startIcon={<img src={security} alt="Password2" />}
                    endIcon={<img src={invisibleEye} alt="InvisibleEye2" />}
                />

                <Link to='/auth/signin' className='block bg-orange-400 w-full py-4 text-center text-white mt-10 rounded-2xl'>Reset Password</Link>

            </div>

        </form>
    );
}
