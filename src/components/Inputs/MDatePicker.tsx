import { FormControl, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface MDatePickerProps {

}


const MDatePicker = () => {
    return (
        <FormControl fullWidth>
            <DatePicker
                label="Date of Incident"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none'
                        },
                        p: '4px 8px'
                    },
                    '& .MuiInputLabel-root': {
                        color: '#fa913c', // Change this to your desired color
                        p: '4px 8px'
                    },
                    '& .MuiInputLabel-shrink': {
                        color: '#fa913c !important', // Color when the label is active
                    },
                    borderRadius: '16px',
                    boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)'
                }}
            />
        </FormControl>
    );
}

export default MDatePicker;