import { Input, InputAdornment, IconButton, FormControl } from '@mui/material';
import { useState } from 'react';

interface CustomizedInputProps {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    setValue?: (param: string) => void;
    [key: string]: any;
}


const CustomizedInput = ({ startIcon, endIcon, setValue, ...props }: CustomizedInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    let startIconComponent, endIconComponent;

    if (startIcon) {
        startIconComponent = <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> {startIcon} </div>;
    }
    if (endIcon) {
        endIconComponent = <div className="absolute inset-y-0 end-5 flex items-center ps-4 pointer-events-none">{endIcon}</div>;
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        if (setValue) {
            setValue(value);
        }
    };



    return (
        <div className='relative w-full'>
            {startIconComponent}
            <input
                value={inputValue}
                onChange={handleChange}
                className="border-none focus:outline-0 text-sm rounded-2xl block w-full ps-12 h-[57px] placeholder-slate-700 font-satoshi"
                style={{
                    boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)',
                }}
                {...props}
            />
            {endIconComponent}
        </div>
    );
}

export default CustomizedInput;