import { FormControl, RadioGroup } from "@mui/material";
import CustomizedRadio from "../CustomizedComponent/CustomizedRadio";
import { useState } from "react";
import useClaimItem from "../../hooks/useClaimItems";
import CLAIMITEM from "../../types/claimItem";

interface Step2Props {
    handleNextClick?: () => void;
    handlePreviousClick?: () => void,
}

const items: CLAIMITEM[] = [
    {
        name: '2006 TOYOTA SIENNA VAN 2WD',
        vin: '5TDZA22C26S417956',
        policy: '#410683522364'
    },
    {
        name: '2013 NISSAN SENTRA 4D',
        vin: '3N1AB7AP7DL637398',
        policy: '#410693522364'
    },
    {
        name: 'Vehicle is not on policy',
    },
    {
        name: '1533 Liatris Dr',
        policy: '#410728790915'
    },
]


const Step2 = ({ handleNextClick, handlePreviousClick }: Step2Props) => {

    const [claimItem, setClaimItem] = useClaimItem();

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const item = items.find(i => i.name == event.target.value);
        setClaimItem(item as CLAIMITEM);
    };

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
                        items.map(item =>
                            <CustomizedRadio
                                onChange={handleRadioChange}
                                label={
                                    <div className='pl-4'>
                                        <div className='text-md py-0.5'>{item.name}</div>
                                        {item.vin && <div className='text-sm text-[#8f939c]'>VIN: {item.vin}</div>}
                                        {item.policy && <div className='text-sm text-[#8f939c]'>Policy: {item.policy}</div>}
                                    </div>
                                }
                                value={item.name}
                            />)
                    }
                </RadioGroup>
            </FormControl>
            <div className="flex justify-between">
                <div></div>
                <button onClick={handleNextClick} className='bg-orange-400 px-10 py-3 text-lg mt-8 text-white rounded-lg'>Next</button>
            </div>
        </>
    );
}

export default Step2;