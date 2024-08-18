import { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';

interface Step3Props {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}

const Step3 = ({ handleNextClick, handlePreviousClick }: Step3Props) => {

    const [qNum, setQNum] = useState(0);

    const handleNextQuestionClick = () => {
        qNum == questions.length - 1 ? handleNextClick() : setQNum(qNum + 1);
    }

    const handlePreviousQuestionClick = () => {
        qNum == 0 ? handlePreviousClick() : setQNum(qNum - 1);
    }

    const questions = [
        <Question1 handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
        <Question2 handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
        <Question3 handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
        <Question4 handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
        <Question5 handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
    ]

    return (
        <>
            <div className="text-4xl font-medium">Questions {qNum + 1}</div>
            <div className='h-[5px] w-[200px] mt-2 rounded-full bg-orange-400'></div>
            {questions[qNum]}
        </>
    );
}

export default Step3;



