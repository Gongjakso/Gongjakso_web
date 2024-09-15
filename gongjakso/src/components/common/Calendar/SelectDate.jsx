import React, { useEffect, useState } from 'react';
import * as S from './SelectDate.Styled';
import { Calendar } from 'react-date-range';
import moment from 'moment';
import { ko } from 'date-fns/locale';

const SelectDate = ({ onChange, value, text }) => {
    const [nowDate, setNowDate] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const today = new Date();

    useEffect(() => {
        const today = moment().format('YYYY-MM-DD');
        // setNowDate(today);
    }, []);

    const handleToggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    const handleDateChange = selectedDate => {
        onChange(selectedDate);
        setIsOpen(false);
        setNowDate(moment(selectedDate).format('YYYY-MM-DD'));
    };

    return (
        <S.CalendarContainer>
            <S.DropdownButton onClick={handleToggleCalendar}>
                {nowDate === undefined ? text : nowDate}
            </S.DropdownButton>
            <S.CalendarWrapper $isopen={isOpen.toString()}>
                <Calendar
                    locale={ko}
                    onChange={handleDateChange}
                    value={value}
                    minDate={today}
                ></Calendar>
            </S.CalendarWrapper>
        </S.CalendarContainer>
    );
};

export default SelectDate;
