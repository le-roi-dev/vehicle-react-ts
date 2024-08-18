import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { orange } from '@mui/material/colors';

interface CustomizedRadioProps {
    label: string
}


const CustomizedCheckbox = ({ label }: CustomizedRadioProps) => {

    return (
        <FormControlLabel
            control={
                <Checkbox 
                    style={{
                        color: orange[400],
                    }}
                    sx={{mr: 2}}
                    size='large'
                />
            }
            label={label}
            sx={{
                width: '600px',
                background: orange[50],
                py: 1,
                px: 2,
                borderRadius: '16px'
            }}
        />
    );
}

export default CustomizedCheckbox;