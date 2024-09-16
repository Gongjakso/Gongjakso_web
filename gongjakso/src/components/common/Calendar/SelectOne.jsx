import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import * as S from './SelectOne.Styled';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { ko } from 'date-fns/locale';

const SelectOne = ({ onApply, placeholder, width }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null); // 초기 값 null로 변경

    const formattedDate = date => {
        if (!date) return ''; // 날짜가 없으면 빈 문자열 반환
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-indexed.
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    const handleOpenCalendar = () => {
        setShowCalendar(true);
    };

    const handleCloseCalendar = () => {
        setShowCalendar(false);
    };

    const handleDateSelect = date => {
        setSelectedDate(date);
    };

    const handleApply = () => {
        onApply({
            date: formattedDate(selectedDate),
        });
        handleCloseCalendar();
    };

    return (
        <S.Container width={width}>
            <S.DateContent onClick={handleOpenCalendar} width={width}>
                {selectedDate ? formattedDate(selectedDate) : placeholder}
                <S.CalendarEmoji />
            </S.DateContent>

            {showCalendar && (
                <S.DateSelect width={width}>
                    <Calendar
                        locale={ko}
                        date={selectedDate || new Date()} // selectedDate가 없으면 오늘 날짜를 기본으로 설정
                        onChange={handleDateSelect}
                    />
                    <S.ButtonContent>
                        <S.Button $isDelete onClick={handleCloseCalendar}>
                            취소
                        </S.Button>
                        <S.Button onClick={handleApply}>선택</S.Button>
                    </S.ButtonContent>
                </S.DateSelect>
            )}
        </S.Container>
    );
};

export default SelectOne;
