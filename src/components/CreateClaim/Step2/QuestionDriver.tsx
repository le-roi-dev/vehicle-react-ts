
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import CustomizedRadio from '../../CustomizedComponent/CustomizedRadio';

interface QuestionProps {
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
const QuestionDriver = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    return (
        <div>
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
            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-10 py-3 text-lg mt-8 text-white rounded-lg'>Next</button>
            </div>
        </div>
    );
}

export default QuestionDriver;