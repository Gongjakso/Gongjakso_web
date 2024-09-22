import styled from 'styled-components';
import emoji from '../../../assets/images/calendaremoji.svg';
export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DateContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ width }) => width};
    height: 3.438rem;
    background-color: white;
    border: 1.5px solid var(--system-grey4, #d2d2d7);
    border-radius: 0.688rem;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.subFont};
    padding: 0 15px;
    font-weight: 500;
`;

export const DateSelect = styled.div`
    display: flex;
    align-items: center;
    border: 1.5px solid var(--system-grey4, #d2d2d7);
    padding: 15px 0;
    border-radius: 0.688rem;
    flex-direction: column;
    background-color: white;
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    border-radius: 15px;
    color: ${props => (props.$isDelete ? 'black' : 'white')};
    background-color: ${props =>
        props.$isDelete ? props.theme.subFont2 : props.theme.mainFont};
`;

export const CalendarEmoji = styled.div`
    background: url(${emoji});
    width: 18px;
    height: 16.88px;
`;
