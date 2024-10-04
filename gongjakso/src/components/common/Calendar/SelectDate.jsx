import React, { useEffect, useState } from 'react';
import * as S from './SelectDate.Styled';
import { Calendar } from 'react-date-range';
import moment from 'moment';
import { ko } from 'date-fns/locale';

const SelectDate = ({ onChange, value, isOpend, text, minDate }) => {
    const [nowDate, setNowDate] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const nextDayMinDate = moment(minDate).add(1, 'days').format('YYYY-MM-DD');

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
                    minDate={new Date(nextDayMinDate)} // 여기서 하루를 더한 날짜를 사용
                />
            </S.CalendarWrapper>
        </S.CalendarContainer>
    );
};

export default SelectDate;
