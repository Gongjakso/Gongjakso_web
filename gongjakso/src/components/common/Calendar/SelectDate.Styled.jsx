import styled from 'styled-components';

export const CalendarContainer = styled.div`
    position: relative;
`;

export const DropdownButton = styled.button`
    width: 160px;
    height: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.borderline};
    border-color: ${props =>
        props.$isError
            ? ({ theme }) => theme.borderline
            : 'red'}; /* border-radius: 15px; */
    /* padding: 15px; */
    color: var(--festie-gray-800, #3a3a3a);
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.subFont};
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-align: start;
    appearance: none;
    background-color: white;
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 12px;
`;

export const CalendarWrapper = styled.div`
    z-index: 15;
    position: absolute;
    top: 100%;
    left: 0;
    display: ${props => (props.$isopen === 'true' ? 'block' : 'none')};

    .rdrCalendarWrapper {
        border: 1px solid #000; /* 원하는 border 스타일로 변경 가능 */
        border-radius: 15px;
    }
`;
