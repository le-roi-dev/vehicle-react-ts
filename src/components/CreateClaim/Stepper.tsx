import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import clsx from 'clsx';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#fa913c',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#06bf00',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));


function QontoStepIcon(props: StepIconProps) {
    const { active, completed } = props;
    let mainIcon;
    if (active) mainIcon =
        <div className="w-6 h-6 border-4 border-[#fa913c] rounded-full">

        </div>

    if (completed) mainIcon =
        <div className="w-6 h-6 bg-[#06bf00] rounded-full flex justify-center items-center">
            <svg className='w-3 h-3' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.369 78.369" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path> </g> </g></svg>
        </div>
    if (!active && !completed) mainIcon =
        <div className='w-6 h-6 flex items-center justify-center'>
            <div className="w-2 h-2 bg-slate-400 rounded-full" />
        </div>

    return (
        <>
            {mainIcon}
        </>
    );
}

interface CustomizedSteppersProps {
    activeStep: number,
    steps: string[],
}

const CustomizedSteppers = ({activeStep, steps }: CustomizedSteppersProps) => {
    return (
        <>
            <Stack sx={{ width: '100%' }} spacing={4}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>
                                <span className={clsx('font-medium',
                                    {
                                        'text-[#06bf00]': index < activeStep,
                                        'text-[#fa913c]': index == activeStep,
                                    }
                                )}>{label}</span>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>
            
        </>
    );
}

export default CustomizedSteppers;