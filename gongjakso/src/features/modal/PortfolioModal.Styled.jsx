import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    position: relative;
    padding: 20px;
    border-radius: 2.189rem;
    border: 0.206rem solid ${({ theme }) => theme.box1};
    max-width: 53rem;
    max-height: 26rem;
    height: 100%;
    width: 100%;
    gap: 1.2rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        max-height: 16rem;
        max-width: 21.125rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        max-height: 20rem;
        max-width: 35rem;
    }
`;

export const ModalTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreMedium';
    font-weight: 700;
    margin-bottom: 1.2rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.125rem;
        margin-bottom: 0;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.5rem;
        margin-bottom: 0;
    }
`;

export const PortfolioBtn = styled.button`
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.box1};
    padding: 1.188rem 1.813rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 30rem;
    height: 4.228rem;
    cursor: pointer;
    text-align: left;
    border-radius: 9px;
    &:hover {
        background-color: ${({ theme }) => theme.box1};
        color: white;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 17.188rem;
        justify-content: center;
        height: 3.063rem;
        font-size: 1rem;
        font-weight: 700;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 18rem;
        justify-content: center;
        height: 3.063rem;
        font-size: 1rem;
        font-weight: 700;
    }
`;

export const BtnInfo = styled.span`
    color: #565656;
    font-size: ${({ theme }) => theme.fontSize.base};
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.8rem;
    }
`;

export const Backbtn = styled.img`
    position: absolute;
    width: 1rem;
    height: 1rem;
    right: 10%;
    top: 15%;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 0.938rem;
        height: 0.938rem;
        top: 10%;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        top: 10%;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 0.5rem;
`;

export const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 3.5rem;
    padding: 1.5rem 2rem;
    gap: 7px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
    font-weight: 700;
    cursor: pointer;
    border-radius: 12px;
    color: white;
    background-color: ${({ theme }) => theme.box1};
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 13.5rem;
        height: 3rem;
        font-size: 1rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.8rem;
    }
`;

export const ModalDesc = styled.span`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
    text-align: center;
    font-weight: 700;
    line-height: 21.48px;
    width: 70%;
    margin: 2.5rem 0;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        margin: 1rem 0;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.8rem;
    }
`;
