import CustomizedInput from "../../CustomizedComponent/CustomizedInput";
import CustomizedSelect from "../../CustomizedComponent/CustomizedSelect";

import userIcon from '../../../images/icons/user.svg';
import phoneIcon from '../../../images/icons/phone.svg';
import emailIcon from '../../../images/icons/email.svg';

import locationIcon from '../../../images/icons/location.svg';
import clockIcon from '../../../images/icons/clock.svg';
import calendarIcon from '../../../images/icons/calendar.svg';

interface QuestionProps {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const vehicleMake = {
    title: 'Vehicle Make',
    values: ['Make1', 'Make2', 'Make3'],
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fa913c" className='w-6 h-6'>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path> <rect fill="none" width="24" height="24"></rect> </g>
    </svg>
}

const vehicleModel = {
    title: 'Vehicle Model',
    values: ['Model1', 'Model2', 'Model3'],
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fa913c" className='w-6 h-6'>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path> <rect fill="none" width="24" height="24"></rect> </g>
    </svg>
}


const Question5 = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    return (
        <>
            <div className="text-2xl font-medium py-8">Select Incident Reasons</div>

            <div className="grid grid-cols-3 gap-8 py-10">
                <CustomizedInput
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    startIcon={<img src={userIcon} alt="user1" />}
                />
                <CustomizedInput
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    startIcon={<img src={userIcon} alt="user2" />}
                />
                <CustomizedInput
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    startIcon={<img src={phoneIcon} alt="phone" />}
                />
                <CustomizedInput
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    startIcon={<img src={emailIcon} alt="email" />}
                />
                <CustomizedInput
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                    startIcon={<img src={locationIcon} alt="location" />}
                />
                <CustomizedSelect
                    title={vehicleMake.title}
                    values={vehicleMake.values}
                    icon={vehicleMake.icon}
                />
                <CustomizedSelect
                    title={vehicleModel.title}
                    values={vehicleModel.values}
                    icon={vehicleModel.icon}
                />

            </div>

            <button className="border-dashed border-2 border-orange-400 bg-orange-50 text-orange-500 px-16 py-3 rounded-2xl">Add People</button>
            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-15 py-2 text-lg mt-8 text-white rounded-2xl'>Next</button>
            </div>
        </>
    );
}

export default Question5;

