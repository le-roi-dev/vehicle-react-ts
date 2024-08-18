import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useState } from 'react';

interface MSelectProps {

}


const MSelect = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel
                id="demo-simple-select-label"
                sx={{
                    color: '#fa913c !important',
                    p: '4px 8px'
                }}
            >
                State
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="State"
                onChange={handleChange}
                sx={{
                    '& .MuiSelect-select': {
                        padding: '20px 20px', // Adjust padding here
                    },
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                        border: 0,
                    },
                    borderRadius: '16px',
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        border: 0,
                    },
                    boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)'
                }}
            >
                <MenuItem value="Ten">Ten</MenuItem>
                <MenuItem value="Twenty">Twenty</MenuItem>
                <MenuItem value="Thirty">Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}

export default MSelect;