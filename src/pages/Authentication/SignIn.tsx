import { Link } from 'react-router-dom';
import LoginForm from '../../components/Auth/LoginForm';
import LogLeftBar from '../../components/Auth/LogLeftBar';

export default function Signin() {
    return (
        <div className='flex flex-wap'>
            <div className='w-4/7 bg-[#f0f9ff] px-10 flex flex-col min-h-[100vh]'>
                <LogLeftBar />
            </div>
            <div className='w-3/7  bg-white px-12 min-h-[100vh]'>
                <div className='h-20 flex items-center flex-row-reverse gap-4'>
                    <Link to='/auth/signup' className='w-[90px] py-2 text-sm bg-white text-orange-400 rounded-full flex justify-center border my-border-orange'>Sign Up</Link>
                    <div className='w-[90px] py-2 text-sm bg-orange-400 text-white rounded-full flex justify-center'>Login</div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}