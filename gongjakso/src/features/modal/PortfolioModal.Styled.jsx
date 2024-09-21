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
    max-height: 25rem;
    height: 100%;
    width: 100%;
    gap: 1.2rem;
`;

export const ModalTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreMedium';
    font-weight: 700;
    margin-bottom: 1.2rem;
`;

export const PortfolioBtn = styled.button`
    background-color: white;
    color: black;
    border: 1px solid ${({ theme }) => theme.box1};
    padding: 1.188rem 1.813rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 30rem;
    height: 4.228rem;
    cursor: pointer;
    text-align: left;
    border-radius: 1rem;
    &:hover {
        background-color: ${({ theme }) => theme.box1};
        color: white;
    }
`;

export const BtnInfo = styled.span`
    color: #565656;
    font-size: ${({ theme }) => theme.fontSize.base};
`;

export const Backbtn = styled.button`
    position: absolute;
    width: 1rem;
    height: 1rem;
    right: 10%;
    top: 15%;
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
`;

export const ModalDesc = styled.span`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
    font-weight: 700;
    line-height: 21.48px;
    width: 70%;
    margin: 2.5rem 0;
`;
