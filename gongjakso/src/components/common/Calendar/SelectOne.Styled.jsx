import styled from 'styled-components';
import emoji from '../../../assets/images/calendaremoji.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    @media screen and (min-width: 1024px) {
        position: relative;
    }
`;

export const DateContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ width }) => width};
    height: 3.438rem;
    background-color: white;
    border: 0.094rem solid var(--system-grey4, #d2d2d7);
    border-radius: 0.688rem;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.subFont};
    padding: 0 0.938rem;
    font-weight: 500;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.938rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        width: 17.2rem;
    }
`;

export const DateSelect = styled.div`
    display: flex;
    align-items: center;
    border: 0.094rem solid #d2d2d7;
    padding: 0.938rem 0;
    border-radius: 0.688rem;
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 110%;
    z-index: 999;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        transform: scale(0.9);
        top: 100%;
        left: -1.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        transform: scale(1);
        top: 120%;
        left: 0;
        width: 100%;
    }
    @media screen and (min-width: 1024px) {
        right: 2rem;
        top: 180%;
        transform: scale(1.19);
    }
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.375rem;
    height: 1.875rem;
    border-radius: 0.938rem;
    color: ${props => (props.$isDelete ? 'black' : 'white')};
    background-color: ${props =>
        props.$isDelete ? props.theme.subFont2 : props.theme.mainFont};
`;

export const CalendarEmoji = styled.div`
    background: url(${emoji});
    width: 1.125rem;
    height: 1.055rem;
    background-repeat: no-repeat;
    background-size: contain;
`;
