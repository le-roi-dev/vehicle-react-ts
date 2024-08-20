
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CustomizedRadio from '../../CustomizedComponent/CustomizedRadio';
import MDatePicker from "../../Inputs/MDatePicker";
import MTimePicker from "../../Inputs/MTimePicker";
import MInput from "../../Inputs/MInput";
import MSelect from "../../Inputs/MSelect";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface QuestionProps {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const QuestionDate = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    return (
        <div className=''>
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
        </div>
    );
}

export default QuestionDate;