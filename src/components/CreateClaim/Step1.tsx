import { FormControl, RadioGroup } from "@mui/material";
import CustomizedRadio from "../CustomizedComponent/CustomizedRadio";

interface Step2Props {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const items = [
    {
        label: (
            <div className='pl-4'>
                <div className='text-md py-0.5'>2006 TOYOTA SIENNA VAN 2WD</div>
                <div className='text-sm text-[#8f939c]'>VIN: 5TDZA22C26S417956</div>
                <div className='text-sm text-[#8f939c]'>Policy #410683522364</div>
            </div>
        ),
        value: '2006 TOYOTA SIENNA VAN 2WD'
    },
    {
        label: (
            <div className='pl-4'>
                <div className='text-md py-0.5'>2013 NISSAN SENTRA 4D</div>
                <div className='text-sm text-[#8f939c]'>VIN: 3N1AB7AP7DL637398</div>
                <div className='text-sm text-[#8f939c]'>Policy #410693522364</div>
            </div>
        ),
        value: '2013 NISSAN SENTRA 4D'
    },
    {
        label: (
            <div className='pl-4'>
                <div className='text-md py-0.5'>Vehicle is not on policy</div>
            </div>
        ),
        value: 'Vehicle is not on policy'
    },
    {
        label: (
            <div className='pl-4'>
                <div className='text-md py-0.5'>1533 Liatris Dr</div>
                <div className='text-sm text-[#8f939c]'>Policy: $410728790915</div>
            </div>
        ),
        value: '1533 Liatris Dr'
    },
]

const Step2 = ({ handleNextClick, handlePreviousClick }: Step2Props) => {

    return (
        <>
            <div className="text-4xl font-medium">Which item needs a claim?</div>
            <div className='h-[5px] w-[250px] mt-2 mb-4 rounded-full bg-orange-400'></div>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className='flex flex-col gap-6'
                >
                    {
                        items.map(item => <CustomizedRadio label={item.label} value={item.value} />)
                    }
                </RadioGroup>
            </FormControl>
            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-10 py-3 text-lg mt-8 text-white rounded-lg'>Next</button>
            </div>
        </>
    );
}

export default Step2;