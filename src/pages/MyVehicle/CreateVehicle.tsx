import { Link } from "react-router-dom";
import CustomizedInput from "../../components/CustomizedComponent/CustomizedInput";
import CustomizedSelect from "../../components/CustomizedComponent/CustomizedSelect";
import DefaultLayout from "../../layout/DefaultLayout";
import { useState } from "react";
import useVehicles from "../../hooks/useVehicles";
import { useNavigate } from 'react-router-dom';
import calendarIcon from '../../images/icons/calendar.svg';
import userIcon from '../../images/icons/user.svg';
import phoneIcon from '../../images/icons/phone.svg';

const vehicleNumber = {
    title: 'Vehicle Number',
    values: ['Number1', 'Number2', 'Number3'],
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


const CreateVehicle = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useVehicles();
    const [title, setTitle] = useState('');
    const [model, setModel] = useState('');
    const [modelYear, setModelYear] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const handleSaveBtn = () => {
        setVehicles([
            ...vehicles,
            {
                id: (new Date()).toISOString(),
                number: title,
                model: model,
                modelYear: modelYear,
                ownerName: ownerName,
                contactInfo: contactInfo
            }
        ]);
        setTimeout(() => {
            navigate('/myvehicle');
        }, 1);

    }
    return (
        <DefaultLayout>
            <div className="bg-white rounded-2xl p-16">
                <div className="">
                    <div className='text-4xl font-bold'>My Vehicle</div>
                    <div className='h-[5px] w-[180px] mt-2 rounded-full bg-orange-400'></div>
                </div>
                <div className="text-lg font-bold py-3 px-6 bg-orange-100 mt-6 rounded-lg">Add New Vehicle</div>
                <div className="grid grid-cols-3 gap-8 py-10">
                    <CustomizedSelect
                        setValue={setTitle}
                        title={vehicleNumber.title}
                        values={vehicleNumber.values}
                        icon={vehicleNumber.icon} />
                    <CustomizedSelect
                        setValue={setModel}
                        title={vehicleModel.title}
                        values={vehicleModel.values}
                        icon={vehicleModel.icon} />
                    <CustomizedInput
                        type="text"
                        id="modelYear"
                        name="modelYear"
                        placeholder="Model Year"
                        setValue={setModelYear}
                        startIcon={<img src={calendarIcon} alt="Calendar" />}
                    />
                    <CustomizedInput
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        placeholder="Owner Name"
                        setValue={setOwnerName}
                        startIcon={<img src={userIcon} alt="Calendar" />}
                    />
                    <CustomizedInput
                        type="text"
                        id="contactInfo"
                        name="contactInfo"
                        placeholder="Contact Information"
                        setValue={setContactInfo}
                        startIcon={<img src={phoneIcon} alt="Phone" />}
                    />
                </div>
                <div className="flex justify-between">
                    <Link to={'/myvehicle'} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl flex justify-center items-center'>Cancel</Link>
                    <button onClick={handleSaveBtn} className='bg-orange-400 px-10 py-3 text-lg mt-8 text-white rounded-2xl'>Save</button>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default CreateVehicle;