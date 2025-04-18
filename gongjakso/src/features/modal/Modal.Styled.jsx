import styled from 'styled-components';
import closebuttonimg from '../../assets/images/Close.svg';
import loginmodalimg from '../../assets/images/Loginmodal.png';

export const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    position: fixed;
    top: 30px;
    right: 30px;
    cursor: pointer;
    background: url(${closebuttonimg});
    background-size: cover;
`;

export const Container = styled.div`
    display: flex;
    border: none;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    /* height: 80%; */
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    flex-direction: column;
    padding: 50px 0;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 90%;
        gap: 0.75rem;
        padding: 25px 0;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 60%;
        gap: 0.75rem;
        padding: 25px 0;
    }
`;

export const ModalBg = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

export const Image = styled.div`
    height: 20rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${loginmodalimg});
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 11rem;
        width: 11rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        height: 15rem;
        width: 15rem;
    }
`;

export const Title = styled.div`
    color: black;
    font-family: 'PreBold';
    padding: 3px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.125rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.3rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 90%;
        height: 2.625rem;
        gap: 0.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 80%;
        height: 3.5rem;
        gap: 0.5rem;
    }
`;

export const GreyButton = styled.button`
    background: ${({ theme }) => theme.Grey};
    color: black;
    width: 45%;
    height: 90%;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.base};
    border-radius: 10px;
    text-align: center;
    padding: 18px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 48%;
        font-size: 1rem;
        margin: 0;
        height: 100%;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        margin: 0;
        height: 100%;
    }
`;

export const BlueButton = styled.button`
    background: ${({ theme }) => theme.Main1};
    color: white;
    border-radius: 10px;
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.base};
    width: 45%;
    height: 90%;
    text-align: center;
    padding: 18px;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 48%;
        margin: 0;
        height: 100%;
        font-size: 1rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        margin: 0;
        height: 100%;
    }
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 20px;
    justify-content: baseline;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    position: relative;
    line-height: 25px;
    width: 100%;
    max-width: 550px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
    display: flex;
    align-items: center;
`;

export const SelectField = styled.select`
    width: 320px;
    height: 42px;
    padding: 0 10px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.base};
    background-color: white;
    color: #a3a3a3;

    option {
        background-color: white;
        color: black;
    }
    option:hover {
        background-color: black;
        color: white;
    }
`;

export const PhoneNum = styled.div`
    border: 1px solid black;
    text-align: left;
    display: flex;
    width: 400px;
    padding: 10px;
    border-radius: 7px;
    padding: 10px 19px;
`;

export const Num = styled.input`
    &.Num-first {
        width: 40px;
    }
    &.Num-second {
        width: 60px;
    }
    &.Num-third {
        width: 60px;
    }
    &.Num-first,
    &.Num-second,
    &.Num-third {
        text-align: center;
        border: none;
        border-bottom: 1px solid black;
        font-size: 1.1rem;
    }
`;

export const Hyphen = styled.div`
    width: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Div1 = styled.div`
    height: 45.25px;
    display: flex;
    flex-direction: column;
`;

export const notice = styled.p`
    color: ${({ theme }) => theme.LightGrey};
`;
