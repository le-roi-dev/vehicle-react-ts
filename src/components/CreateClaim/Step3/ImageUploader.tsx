import React, { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';

const ImageUploader: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

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

    return (
        <div>
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
            {selectedImage && (
                <div>
                    <img
                        src={selectedImage as string}
                        alt="Selected"
                        style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '300px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
