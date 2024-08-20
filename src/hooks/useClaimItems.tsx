import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import CLAIMITEM from '../types/claimItem';

const useClaimItem = (): [CLAIMITEM, React.Dispatch<React.SetStateAction<CLAIMITEM>>] => {
    const [claimItem, setClaimItem] = useLocalStorage('claimItems', {});

    return [claimItem, setClaimItem];
};

export default useClaimItem;