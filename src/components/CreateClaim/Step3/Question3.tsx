
import FormGroup from '@mui/material/FormGroup';
import CustomizedCheckbox from '../../CustomizedComponent/CustomizedCheckbox';

interface QuestionProps {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const Question3 = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    return (
        <div className=''>
            <div className="text-2xl font-medium py-8">Select Incident Reasons</div>
            <div className="text-2xl font-medium py-8">Incident Description</div>
            <FormGroup className='flex flex-col gap-4'>
                <CustomizedCheckbox label="No, my vehicle is not drivable" />
                <CustomizedCheckbox label="No, my vehicle is not drivable" />
                <CustomizedCheckbox label="No, my vehicle is not drivable" />
            </FormGroup>
            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-15 py-2 text-lg mt-8 text-white rounded-2xl'>Next</button>
            </div>
        </div>
    );
}

export default Question3;