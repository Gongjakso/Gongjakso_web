import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-date-range';
import * as S from './SelectOne.Styled';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { ko } from 'date-fns/locale';

const SelectOne = ({ value, onApply, placeholder, componentType }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const calendarRef = useRef(null); // 외부 클릭 감지를 위한 ref
    const isShortComponent = componentType === 'short';

    useEffect(() => {
        // value가 유효한 날짜일 경우에만 selectedDate 업데이트
        if (value && !isNaN(new Date(value).getTime())) {
            setSelectedDate(new Date(value));
        }
    }, [value]);

    const formattedDate = date => {
        if (!date) return ''; // 날짜가 없으면 빈 문자열 반환
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    const handleOpenCalendar = () => {
        setShowCalendar(true);
    };

    const handleCloseCalendar = () => {
        setShowCalendar(false);
    };

    const [width, setWidth] = useState('16rem');

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth <= 768) {
                setWidth('10rem');
            } else if (window.innerWidth <= 1023) {
                setWidth('10rem');
            } else {
                if (isShortComponent) {
                    setWidth('16rem');
                } else {
                    setWidth('28rem');
                }
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [isShortComponent]);

    const handleApply = () => {
        if (selectedDate) {
            onApply(selectedDate); // 부모 컴포넌트로 선택된 날짜 전달
        }
        handleCloseCalendar();
    };

    // 외부 클릭 감지 로직
    useEffect(() => {
        const handleClickOutside = event => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target)
            ) {
                setShowCalendar(false);
            }
        };

        if (showCalendar) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCalendar]);

    return (
        <S.Container width={width} ref={calendarRef}>
            <S.DateContent onClick={handleOpenCalendar} width={width}>
                {selectedDate ? formattedDate(selectedDate) : placeholder}
                <S.CalendarEmoji />
            </S.DateContent>

            {showCalendar && (
                <S.DateSelect width={width}>
                    <Calendar
                        locale={ko}
                        date={selectedDate || new Date()} // 선택된 날짜 또는 기본으로 오늘 날짜 설정
                        onChange={date => setSelectedDate(date)} // 달력에서 선택한 날짜를 selectedDate에 저장
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
