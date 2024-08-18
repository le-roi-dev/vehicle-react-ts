import CustomizedInput from "../CustomizedComponent/CustomizedInput";
import CustomizedSelect from "../CustomizedComponent/CustomizedSelect";
import calendarIcon from '../../images/icons/calendar.svg';
import phoneIcon from '../../images/icons/phone.svg';
import userStarIcon from '../../images/icons/userwithstar.svg';
import { FormControl, RadioGroup } from "@mui/material";
import CustomizedRadio from "../CustomizedComponent/CustomizedRadio";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import MInput from "../Inputs/MInput";
import MSelect from "../Inputs/MSelect";
import MDatePicker from "../Inputs/MDatePicker";
import MTimePicker from "../Inputs/MTimePicker";


interface Step2Props {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const names = [
    'Srikanth Cuddapah',
    'Deepika Koul',
    'Hanshal Cuddapah',
    'harshiya Cuddapah',
    'No driver in the vehicle',
    'Driver is not on the policy'
]
const Step2 = ({ handleNextClick, handlePreviousClick }: Step2Props) => {
    const [state, setState] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };
    return (
        <>
            <div className="text-4xl font-medium">Who was the driver</div>
            <div className='h-[5px] w-[250px] mt-2 mb-4 rounded-full bg-orange-400'></div>
            <div className="my-4">Please select who was driving the vehicle at the time of the incident</div>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className='flex flex-col gap-6'
                >
                    {
                        names.map(name => <CustomizedRadio label={name} value={name} />)
                    }
                </RadioGroup>
            </FormControl>
            <div className="text-4xl font-medium my-4">When did this happen?</div>
            <div className='h-[5px] w-[250px] mt-2 mb-4 rounded-full bg-orange-400'></div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="grid grid-cols-2 gap-8">
                    <MDatePicker />
                    <MTimePicker />
                    <MInput />
                    <MSelect />
                </div>
            </LocalizationProvider>

            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-10 py-3 text-lg mt-8 text-white rounded-lg'>Next</button>
            </div>
        </>
    );
}

export default Step2;