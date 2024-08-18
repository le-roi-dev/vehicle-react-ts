import CustomizedInput from "../CustomizedComponent/CustomizedInput";
import CustomizedSelect from "../CustomizedComponent/CustomizedSelect";
import calendarIcon from '../../images/icons/calendar.svg';
import phoneIcon from '../../images/icons/phone.svg';
import userStarIcon from '../../images/icons/userwithstar.svg';


interface Step4Props {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const basicClaimInfo = {
    vehicle: '2006 Toyota Sieena Van 2WD',
    driver: 'Mathew Senna',
    dateAndTime: '02/16/2023 at 3:35 PM',
    location: 'Pakistan, Karachi',
    phoneNumber: '+92 77884455411',
    emailAddress: '2021karachi@gmail.com'
}

const incidentDetails = {
    claimType: 'Collision',
    numberOfVehicleInvolved: '2 Pax',
    damageCausedBy: 'Someone Else',
    vehicleParked: false,
    injuredInvolved: false,
    airbagsDeployed: false,
    damageToVehicle: '2021karachi@gmail.com',
    incidentDescription: 'Test 123',
    textOptIn: false
}

interface rowProps {
    title: string,
    value: string,
    editable?: boolean
}

const MyRow = ({ title, value, editable }: rowProps) => (
    <div className="border-b border-slate-400 flex text-xl font-medium mx-6 py-5 mt-2">
        <div className="flex-1">{title}</div>
        <div className="flex-1 flex justify-between">
            <div className="">{value}</div>
            {
                editable ?
                    <div className="text-orange-400 decoration-slice font-normal underline underline-offset-4 pr-4">Edit</div> : null
            }
        </div>
    </div>
)

const Step4 = ({ handleNextClick, handlePreviousClick }: Step4Props) => {
    return (
        <>
            <div className="text-4xl font-medium">Review Application</div>
            <div className='h-[5px] w-[250px] mt-2 rounded-full bg-orange-400'></div>
            <div className="text-2xl pt-2 font-medium">Review your application</div>

            <div className="mt-6 mb-2 py-4 px-6 text-2xl font-medium bg-orange-50">Basic Claim Information</div>
            <MyRow title='Vehicle' value={basicClaimInfo.vehicle}/>
            <MyRow title='Driver' value={basicClaimInfo.driver}/>
            <MyRow title='Date and Time' value={basicClaimInfo.dateAndTime}/>
            <MyRow title='Location' value={basicClaimInfo.location} editable/>
            <MyRow title='Phone Number' value={basicClaimInfo.phoneNumber} editable/>
            <MyRow title='Email Address' value={basicClaimInfo.emailAddress} editable/>

            <div className="mt-6 mb-2 py-4 px-6 text-2xl font-medium bg-orange-50">Incident Details</div>
            <MyRow title='Claim Type' value={incidentDetails.claimType} editable/>
            <MyRow title='Number of Vehicle Involved' value={incidentDetails.numberOfVehicleInvolved} editable/>
            <MyRow title='Damage Caused By' value={incidentDetails.damageCausedBy} editable/>
            <MyRow title='Vehicle Parked' value={incidentDetails.vehicleParked ? 'Yes' : 'No'} editable/>
            <MyRow title='Injured Involved' value={incidentDetails.injuredInvolved ? 'Yes' : 'No'} editable/>
            <MyRow title='Airbags Deployed' value={incidentDetails.airbagsDeployed ? 'Yes' : 'No'} editable/>
            <MyRow title='Damage to Vehicle' value={incidentDetails.damageToVehicle} editable/>
            <MyRow title='Incident Description' value={incidentDetails.incidentDescription} editable/>
            <MyRow title='Text Opt-in' value={incidentDetails.textOptIn ? 'Yes' : 'No'} editable/>


            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-10 py-3 text-lg mt-8 text-white rounded-lg'>Next</button>
            </div>
        </>
    );
}

export default Step4;