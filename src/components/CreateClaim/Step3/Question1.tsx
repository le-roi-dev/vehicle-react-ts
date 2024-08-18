
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import CustomizedRadio from '../../CustomizedComponent/CustomizedRadio';

interface QuestionProps {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const Question1 = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    return (
        <div className=''>
            <div className="text-2xl font-medium py-8">Is your vehicle drivable</div>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className='flex flex-col gap-6'
                >
                    <CustomizedRadio label='Yes, my vehicle is drivable' value={true} />
                    <CustomizedRadio label='No, my vehicle is not drivable' value={false} />
                </RadioGroup>
            </FormControl>
            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-15 py-2 text-lg mt-8 text-white rounded-2xl'>Next</button>
            </div>
        </div>
    );
}

export default Question1;