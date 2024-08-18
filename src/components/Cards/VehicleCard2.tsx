
import carImg from '../../images/vehicle/car.jpg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';
import useVehicles from '../../hooks/useVehicles';
import { useNavigate } from 'react-router-dom';
import VEHICLE from '../../types/vehicle';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    px: 6,
    pb: 4,
};

interface VehicleCard2Props {
    vehicle: VEHICLE; // Use the defined Vehicle interface here
    deleteVehicle: (param: string) => void
}

const VehicleCard2 = ({ vehicle, deleteVehicle }: VehicleCard2Props) => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useVehicles();
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    

    const handleDeleteBtn = () => {
        deleteVehicle(vehicle.id);
        handleModalClose();
    }

    return (
        <div className="flex flex-col gap-4 p-4 rounded-2xl shadow-6">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={carImg} className="w-15 h-15 rounded-lg" />
                    <div>
                        <div className="text-lg font-bold">{vehicle.model} <span className="text-sm">(Year: {vehicle.modelYear})</span></div>
                        <div className="text-base text-slate-400">Vehicle Number: {vehicle.number}</div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <div className="text-base">Owner name</div>
                    <div className="text-lg font-medium">{vehicle.ownerName}</div>
                </div>
                <div className="flex-1">
                    <div className="text-base">LicenseNumber</div>
                    <div className="text-lg font-medium">XCSRE1313XFD</div>
                </div>
                <div className="flex-1">
                    <div className="text-base">Contact</div>
                    <div className="text-lg font-medium">{vehicle.contactInfo}</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <div className="text-base">Address</div>
                    <div className="text-lg font-medium">Pakistan, Karachi</div>
                </div>
                <div className='flex items-end gap-4'>
                    <button onClick={handleOpen} className="bg-red-600 text-white text-base flex justify-center items-center w-30 py-1 rounded-lg">Remove</button>
                    <button className="bg-orange-400 text-white text-base flex justify-center items-center w-30 py-1 rounded-lg">Edit</button>
                </div>
            </div>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fa913c" className='w-26 h-26'>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path> <rect fill="none" width="24" height="24"></rect> </g>
                    </svg>
                    <div className='text-2xl font-bold text-slate-800'>Delete Application</div>
                    <div className='text-lg text-slate-500 font-medium'>This action can't be undone</div>
                    <div className='mt-4 flex gap-10'>
                        <button onClick={handleModalClose} className='flex-1 flex rounded-xl justify-center items-center py-4 bg-[#edf3fa] text-[#737373]'>Cancel</button>
                        <button onClick={handleDeleteBtn} className='flex-1 flex rounded-xl justify-center items-center py-4 bg-[#f20c0c] text-white'>Delete</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default VehicleCard2;