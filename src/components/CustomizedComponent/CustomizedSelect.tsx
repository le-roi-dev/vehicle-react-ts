
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


interface CustomizedSelectProps {
    title: string,
    values: string[],
    icon: React.ReactNode,
    setValue?: (param: string) => void;
}


const CustomizedSelect = ({ title, values, icon, setValue }: CustomizedSelectProps) => {

    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as string;
        setSelectedValue(value);
        if (setValue) {
            setValue(value);
        }
    };

    return (
        <FormControl className='flex-1'>
            <Select
                labelId="demo-simple-select-label"
                displayEmpty
                value={selectedValue}
                onChange={handleChange}
                defaultValue=""
                renderValue={(selected) => {
                    return (
                        <div className='flex items-center'>
                            {icon}
                            <span className="ml-2 text-sm font-satoshi">
                                {selected == "" ? title : selected}
                            </span>
                        </div>
                    );
                }}
                sx={{
                    borderRadius: '16px',
                    boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    fontSize: '0.875rem',
                    color: '#111827',
                }}
            >
                <MenuItem value="" disabled>
                    {title}
                </MenuItem>
                {
                    values.map(value => (
                        <MenuItem value={value}>{value}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default CustomizedSelect;