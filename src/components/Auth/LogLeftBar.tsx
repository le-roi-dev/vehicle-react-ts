import logoPicture from '../../images/vehicle/logo.jpg';
const LogLeftBar = () => {

    return (
        <>
            <div className='flex items-center gap-16 min-h-20'>
                <div className='text-base'>Home</div>
                <div className='text-base'>About Us</div>
                <div className='text-base'>Contract</div>
            </div>
            <div className='login-title text-4xl font-medium mt-8'>
                <div>Claim Your <span className='text-orange-400'>Vehicle</span></div>
                <div>Quickly</div>
            </div>
            <div className='mt-4'>Neque porro quisquam est qui dolorem ipsum quia dolor sit</div>
            <div className=''>amet, consectetur, adipisci velit</div>
            <div className='flex-1 flex justify-center items-center'>
                <img src={logoPicture} className='w-[650px] h-auto' />
            </div>
            
        </>
    );
};

export default LogLeftBar;
