import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div``;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 60px;
    margin-right: 15px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.borderline};
    border-color: ${props =>
        props.$isError ? ({ theme }) => theme.borderline : 'red'};
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.subFont};
    padding-left: 15px;
    z-index: 99;
    position: relative; /* Add relative position */

    .rightDown {
        margin-left: 70px;
        color: ${({ theme }) => theme.mainFont};
        font-size: 25px;
    }

    span {
        display: inline-block;
        width: 200px;
        margin-bottom: 10px;
        font-size: ${({ theme }) => theme.fontSize.base};
        font-family: 'PreMedium';
        font-weight: 100;
        color: ${({ theme }) => theme.borderline};
    }

    &:hover {
        border: 1.5px solid rgba(0, 0, 0, 0.1);
    }

    &:hover .arrow_box {
        display: block;
    }
`;

export const P = styled.p`
    .arrow_box {
        display: none;
        position: absolute;
        width: 180px; /* Adjust width as needed */
        padding: 8px;
        top: 65px; /* Adjust top as needed */
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        background: #333;
        color: #fff;
        font-size: 14px;
        text-align: center; /* Center text */
    }

    .arrow_box:after {
        position: absolute;
        top: -10px; /* Adjust top as needed */
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -10px;
        border: solid transparent;
        border-color: rgba(51, 51, 51, 0);
        border-bottom-color: #333;
        border-width: 10px;
        pointer-events: none;
        content: ' ';
    }
`;

export const Span = styled.div`
    display: flex;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.borderline};
    font-family: 'PreMedium';
    font-weight: 100;
`;

export const SelectQty = styled.div`
    position: relative; /* Change absolute to relative */
    display: ${props => (props.$isDisplay ? 'flex' : 'none')};
    flex-direction: column;
    text-align: center;
    width: 21.5rem;
    background-color: white;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.borderline};
    border-radius: 14px;
    margin-top: 10px; /* Adjust this value as needed */
`;

export const SelectAdultTitle = styled.div`
    margin: 0px 0px 30px;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.border};
`;

export const SelectAdultNum = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Title = styled.span`
    display: flex;
    font-size: 16px;
    font-family: 'PreMedium';
    color: ${({ theme }) => theme.mainFont};
`;

export const CountBtn = styled.div`
    display: flex;
    align-items: center;
`;
export const Button = styled.div`
    background: none;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    font-family: 'PreMedium';
    text-align: center;
    border: 0.7px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.mainFont};
    font-size: 1.2rem;
    margin: 0px 10px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    color: ${({ disabled }) => (disabled ? 'gray' : theme.Main1)};
    border-color: ${({ disabled }) => (disabled ? 'gray' : theme.Main1)};
`;

export const ManNum = styled.p`
    width: 0.6rem;
    margin: 0 10px;
    color: ${props => (props.$props === 0 ? theme.Grey : theme.box1)};
`;
export const ApplysetBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const ApplyBtn = styled.div`
    color: ${props => (props.$isApply ? theme.mainFont : theme.mainFont2)};
    width: 100%;
    background-color: ${props => (props.$isApply ? theme.Grey : theme.box1)};
    cursor: pointer;
    border-radius: 2rem;
    padding: 0.5rem 0;
`;

export const UpdateBtn = styled.div`
    position: relative;
    text-align: center;
    border-radius: 5px;
    color: white;
    background-color: ${({ theme }) => theme.mainFont};
    width: 100px;
    padding: 10px;
    left: 190px;
    font-size: 16px;
    cursor: pointer;
`;

export const ApplyButton = styled.div`
    width: 100%;
    font-family: 'PreMedium';
`;
