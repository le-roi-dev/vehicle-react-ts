
interface QuestionProps {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const Question2 = ({ handleNextClick, handlePreviousClick }: QuestionProps) => {
    return (
        <div className=''>
            <div className="text-2xl font-medium py-8">Please tell about the incident?</div>
            <div className="text-2xl font-medium py-8">Incident Description</div>
            <textarea placeholder="Write here..." className='border-none focus:outline-none rounded-lg bg-[#f3f3f3] w-full p-4' rows={5} />
            <div className="flex justify-between">
                <button onClick={handlePreviousClick} className='text-orange-500 bg-orange-100 px-15 py-2 text-lg mt-8 rounded-2xl'>Previous</button>
                <button onClick={handleNextClick} className='bg-orange-400 px-15 py-2 text-lg mt-8 text-white rounded-2xl'>Next</button>
            </div>
        </div>
    );
}

export default Question2;