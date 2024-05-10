import styled from 'styled-components';
import { ReactComponent as Up } from '../../assets/images/Up.svg';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    flex-grow: 4;
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
`;

export const Spacer = styled.div`
    flex-grow: 6;
`;

export const BoxDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    flex-direction: column;
    margin: 50px 100px 100px 100px;
`;

export const OptionBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
`;
export const Option = styled.div`
    width: 100px;
    padding: 5px 0;
    border-bottom: 1px solid #d9d9d9;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.lg};
    cursor: pointer;
`;
