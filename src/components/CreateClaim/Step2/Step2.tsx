import CustomizedInput from "../../CustomizedComponent/CustomizedInput";
import CustomizedSelect from "../../CustomizedComponent/CustomizedSelect";
import calendarIcon from '../../images/icons/calendar.svg';
import phoneIcon from '../../images/icons/phone.svg';
import userStarIcon from '../../images/icons/userwithstar.svg';
import { FormControl, RadioGroup } from "@mui/material";
import CustomizedRadio from "../../CustomizedComponent/CustomizedRadio";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import QuestionDriver from "./QuestionDriver";
import QuestionDate from "./QuestionDate";
import useClaimItem from "../../../hooks/useClaimItems";


interface Step2Props {
    handleNextClick: () => void;
    handlePreviousClick: () => void,
}


const Step2 = ({ handleNextClick, handlePreviousClick }: Step2Props) => {
    const [qNum, setQNum] = useState(0);
    const [claimItem, setClaimItem] = useClaimItem();
    const handleNextQuestionClick = () => {
        qNum == questions.length - 1 ? handleNextClick() : setQNum(qNum + 1);
    }

    const handlePreviousQuestionClick = () => {
        qNum == 0 ? handlePreviousClick() : setQNum(qNum - 1);
    }

    const questions = [
        <QuestionDriver handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
        <QuestionDate handleNextClick={handleNextQuestionClick} handlePreviousClick={handlePreviousQuestionClick} />,
    ]

    if (!claimItem.vin) {
        questions.shift();
    }


    return (
        <>
            {questions[qNum]}
        </>
    );
}

export default Step2;