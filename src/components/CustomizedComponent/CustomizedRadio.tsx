import { Input, InputAdornment, IconButton, FormControl } from '@mui/material';
import { useState } from 'react';
import { orange } from '@mui/material/colors';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface CustomizedRadioProps {
    label: string | React.ReactNode,
    value: any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const CustomizedRadio = ({ label, value, onChange }: CustomizedRadioProps) => {

    return (
        <FormControlLabel
            value={value}
            control={
                <Radio
                    onChange={onChange}
                    sx={{
                        color: orange[400],
                        '&.Mui-checked': {
                            color: orange[400],
                        },
                        mr: '5px'
                    }} />
            }
            label={label}
            sx={{
                boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)',
                minWidth: '500px',
                p: '8px',
                borderRadius: '16px'
            }}
        />
    );
}

export default CustomizedRadio;