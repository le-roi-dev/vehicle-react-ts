import { Link } from 'react-router-dom';
import LogLeftBar from '../../components/Auth/LogLeftBar';
import SignupForm from '../../components/Auth/SignupForm';
export default function LoginPage() {
    return (
        <div className='grid grid-cols-7'>
            <div className='col-span-4 bg-[#f0f9ff] px-10 flex flex-col min-h-[100vh]'>
                <LogLeftBar />
            </div>
            <div className='col-span-3 bg-white pr-12 pl-16 min-h-[100vh]'>
                <div className='h-20 flex items-center flex-row-reverse gap-4'>
                    <div className='w-[90px] py-2 text-sm bg-orange-400 text-white rounded-full flex justify-center'>Sign Up</div>
                    <Link to='/auth/signin' className='w-[90px] py-2 text-sm bg-white text-orange-400 rounded-full flex justify-center border border-orange-400'>Login</Link>
                </div>
                <SignupForm />
            </div>
        </div>
    );
}