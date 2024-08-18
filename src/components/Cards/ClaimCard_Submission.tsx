
import carImg from '../../images/vehicle/car.jpg';

const ClaimCard_Submission = () => {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg shadow-6 bg-orange-50">
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
                    <div className="text-base">Driver Name</div>
                    <div className="text-lg font-medium">Shahen Shah</div>
                </div>
                <div className="flex-1">
                    <div className="text-base">License Number</div>
                    <div className="text-lg font-medium">XCSRE1313XFD</div>
                </div>
            </div>
        </div>
    )
}

export default ClaimCard_Submission;