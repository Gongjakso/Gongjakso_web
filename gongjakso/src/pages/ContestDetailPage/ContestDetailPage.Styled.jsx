import styled from 'styled-components';
import { ReactComponent as Fire } from '../../assets/images/Fire2.svg';

export const MainContent = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: 0 auto;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7rem;
    padding: 0 20px 0 20px;
`;

export const ContestDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ContestInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        margin-top: 2rem;
    }
`;

export const ContestTitle = styled.p`
    font-family: 'TheJamsilRegular';
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    text-align: left;
    margin-left: 0.4rem;
    margin-bottom: 0.5rem;
`;

export const ContestTitle2 = styled(ContestTitle)`
    font-family: 'PreBold';
`;

export const ContestInfoTop = styled.h1`
    display: flex;
    justify-content: space-between;
`;

export const ContestImg = styled.img`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30vw;
    max-width: 22rem;
    min-height: 29.5rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        margin: 0 auto;
        max-width: 22rem;
        min-height: 29.5rem;
        margin-top: 2rem;
    }
`;
export const RemainDate = styled.div`
    width: auto;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.Purple};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
    background-color: ${({ theme }) => theme.Purple};
    padding: 0rem 0.5rem;
`;

export const SpanP = styled.p`
    width: auto;
    min-width: 4.5rem;
`;

export const FireImage = styled(Fire)`
    width: 1.5rem;
    align-items: center;
`;

export const Organization = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.mdd};

    line-height: 28.64px;
    text-align: left;
    margin-bottom: 2rem;
    padding-left: 0.5rem;
    font-family: 'PreSemiBold';
`;

export const InfoContent = styled.h3`
    display: flex;
    flex-direction: row;
    // font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 700;
    line-height: 23.87px;
    text-align: left;
    gap: 10px;
    padding-left: 0.5rem;
`;
export const InfoSpan = styled.p`
    // font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    line-height: 23.87px;
    text-align: left;
    padding-left: 0.5rem;
`;

export const ContestButtonOption = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 80px;
`;

export const GotohomeBtn = styled.button`
    background-color: ${({ theme }) => theme.border};
    width: 15.8vw;
    max-width: 228px;
    min-width: 138px;
    max-height: 47px;
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    border-radius: 12px;
    margin: 1rem;
    padding: 1.2rem;
    font-size: clamp(10px, 1.2vw, 20px);
    font-weight: bold;

    img {
        margin-left: 0.2rem;
        width: 1.3rem;
    }
`;
export const TeamBuildBtn = styled.button`
    background-color: ${({ theme }) => theme.box1};
    width: 15.8vw;
    max-width: 228px;
    min-width: 138px;
    max-height: 47px;
    min-height: 36px;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 12px;
    margin: 1rem;
    padding: 1.2rem;
    color: ${({ theme }) => theme.mainFont2};
    font-size: clamp(10px, 1.2vw, 20px);
    font-weight: 500;
`;

export const Headline = styled.hr`
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
    border: 1px solid black;
`;

export const Fillterbox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 1.7rem;
`;
export const Fillter1 = styled.div`
    width: 13.6vw;
    height: 3.5vw;
    max-width: 196px;
    min-width: 93px;
    max-height: 51px;
    min-height: 28px;
    border-radius: 6px;
    border: 1.5px solid #c4c4c4;
    padding: 0.8vw 1.25vw;
    display: flex;
    align-items: center;
    margin-left: 1%;
`;

export const ContestContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
