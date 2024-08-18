import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';
import CustomizedSelectWithCheckbox from "../../CustomizedComponent/CustomizedSelectWithCheckbox";
import carSides from "./CarSides";
import ImageUploader from "./ImageUploader";
import { orange } from '@mui/material/colors';

interface QuestionProps {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const selectIncidents = {
    title: 'Select Incidents',
    values: ['Dent', 'Scratch', 'Damage', 'Missing Parts'],
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fa913c" className='w-6 h-6'>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path> <rect fill="none" width="24" height="24"></rect> </g>
    </svg>
}

const Question4 = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    const [selectedSide, setSelectedSide] = useState('Front');
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
    const [circlePos, setCirclePos] = useState<{ x: number; y: number } | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCirclePos({ x, y });
    };
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput')?.click();
    };

    let mainContent;
    if (selectedImage) {
        mainContent = (
            <div className='px-60'>
                <div className='relative'>
                    <img
                        src={selectedImage as string}
                        alt="Selected"
                        className='w-full rounded-3xl h-auto cursor-pointer'
                        onClick={handleClick}
                    />
                    {circlePos && (
                        <div
                            style={{
                                position: 'absolute',
                                left: circlePos.x - 10,
                                top: circlePos.y - 10,
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: orange[600],
                                pointerEvents: 'none',
                                border: '5px solid white'
                            }}
                        />
                    )}
                    <div className='px-10 flex gap-10 mt-10'>
                        <button onClick={() => setSelectedImage(null)} className='bg-orange-50 text-orange-400 flex-1 py-5 text-center text-xl rounded-3xl'>Retake</button>
                        <button onClick={handleNextClick} className='bg-orange-400 text-white flex-1 py-5 text-center text-xl rounded-3xl'>Confirm</button>
                    </div>
                </div>
            </div>
        )
    } else {
        mainContent = (
            <>
                <div className='flex gap-4 text-xs justify-center'>
                    {
                        carSides.map(cs => (
                            <button
                                onClick={() => setSelectedSide(cs.label)}
                                className={clsx('border-2  rounded-lg w-30 h-24 flex flex-col justify-center items-center',
                                    {
                                        'border-blue-800': selectedSide == cs.label,
                                        'border-slate-300': selectedSide != cs.label
                                    }
                                )}
                            >
                                {cs.icon}
                                {cs.label}
                            </button>
                        ))
                    }
                </div>
                <div className='p-10 flex justify-center'>
                    {
                        carSides.find((cs: any) => cs.label == selectedSide)?.icon2
                    }
                </div>
                <div className="text-2xl font-medium py-8">Select Incident Reasons</div>
                <CustomizedSelectWithCheckbox title={selectIncidents.title} values={selectIncidents.values} icon={selectIncidents.icon} />
                <div className="text-2xl font-medium py-8">Upload Photo</div>
                <div className='flex gap-10'>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                    <button onClick={handleButtonClick} className='flex flex-col py-4 px-16 rounded-xl justify-center items-center bg-orange-100 text-orange-400 font-bold'>
                        <svg fill="#fa913c" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13z"></path> </g></svg>
                        Upload
                    </button>
                </div>
                <div className="flex justify-between">
                    <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                    <button onClick={handleNextClick} className='bg-orange-400 px-15 py-2 text-lg mt-8 text-white rounded-2xl'>Next</button>
                </div>
            </>
        )
    }

    return (
        <div className=''>
            <div className="text-2xl font-medium py-8">Select accidental part of your vehicle</div>
            {mainContent}
        </div>
    );
}

export default Question4;