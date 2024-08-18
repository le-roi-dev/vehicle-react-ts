import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import VEHICLE from '../types/vehicle';

const InitialVehicle: VEHICLE[] = [
    {
        id: 'initial',
        number: 'Number1',
        model: 'Model1',
        modelYear: '1985',
        ownerName: 'Loi',
        contactInfo: 'loi@perfect.com',
    },
];

const useVehicles = (): [VEHICLE[], React.Dispatch<React.SetStateAction<VEHICLE[]>>] => {
    const [vehicles, setVehicles] = useLocalStorage('vehicles', InitialVehicle);

    return [vehicles, setVehicles];
};

export default useVehicles;
