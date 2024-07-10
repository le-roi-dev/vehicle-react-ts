import React, { useState } from "react";
import clsx from 'clsx';
import carImg from '../../images/vehicle/car.jpg';
export default function DashboardTabs() {
    const [selectedTab, setSelectedTab] = useState('Accepted');

    const handleChange = (newValue: string) => {
        setSelectedTab(newValue);
    };

    interface TabButtonProps {
        value: string;
    }

    const TabButton = (props: TabButtonProps) => {
        const { value } = props;

        return (
            <button
                onClick={() => handleChange(value)}
                className={clsx('flex-1 text-center py-4',
                    {
                        'border-b-4 border-orange-400': selectedTab == value,
                        'border-b-2 border-slate-100': selectedTab != value
                    }
                )}
            >
                {value}
            </button >
        )
    }

    const CarCard = () => {
        return (
            <div className="flex flex-col gap-4 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <img src={carImg} className="w-15 h-15 rounded-lg" />
                        <div>
                            <div className="text-lg font-bold">Suzuki Cultus <span className="text-sm">(Year: 2023)</span></div>
                            <div className="text-base text-slate-400">Vehicle Number: AX ER 2313</div>
                        </div>
                    </div>
                    <button className="text-4xl font-bold text-slate-600">:</button>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <div className="text-base">Claim Date</div>
                        <div className="text-lg font-medium">23/02/2023</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-base">Claim Number</div>
                        <div className="text-lg font-medium">XCSRE1313XFD</div>
                    </div>
                    <div className="flex-1">
                        <div className="text-base">Policy Number</div>
                        <div className="text-lg font-medium">XCSRE1313XFD</div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <div className="text-base">Insurance Company</div>
                        <div className="text-lg font-medium">Akko Insurance Pvt.Ltd</div>
                    </div>
                    <button className="bg-orange-400 text-white text-lg flex justify-center items-center px-6 rounded-lg">View Report</button>
                </div>
            </div>
        )
    }

    return (
        <div className=''>
            <div className='flex'>
                <TabButton value="Accepted" />
                <TabButton value="Pending" />
                <TabButton value="Under Review" />
                <TabButton value="In Progress" />
                <TabButton value="Completed" />
                <TabButton value="Drafts" />
            </div>
            <div className="p-4 grid grid-cols-2 gap-4 flex-1">
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
        </div>
    );
}

