import React, { useState } from "react";
import clsx from 'clsx';
import ClaimCard from "../Cards/ClaimCard";
export default function ClaimContainer() {
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
                <ClaimCard />
                <ClaimCard />
                <ClaimCard />
                <ClaimCard />
            </div>
        </div>
    );
}

