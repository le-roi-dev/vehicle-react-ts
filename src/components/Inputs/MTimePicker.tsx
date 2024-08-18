import { FormControl, TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface MTimePickerProps {

}

const MTimePicker = () => {
    return (
        <FormControl fullWidth>
            <TimePicker
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

export default MTimePicker;