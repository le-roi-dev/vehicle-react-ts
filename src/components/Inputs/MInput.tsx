import { TextField } from '@mui/material';

interface InputProps {

}


const MInput = () => {
    return (
        <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none'
                    },
                    p: '4px 8px'
                },
                borderRadius: '16px',
                '& .MuiInputLabel-root': {
                    color: '#fa913c', // Change this to your desired color
                    p: '4px 8px'
                },
                '& .MuiInputLabel-shrink': {
                    color: '#fa913c !important', // Color when the label is active
                },
                boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)'
            }}
        />
    );
}

export default MInput;