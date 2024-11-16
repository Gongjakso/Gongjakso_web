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
`;

export const ContestDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const ContestInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
`;

export const ContestTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    text-align: left;
`;

export const ContestInfoTop = styled.h1`
    display: flex;
    justify-content: space-between;
`;

export const ContestImg = styled.img`
    width: 22rem;
    height: 29.5rem;
`;
export const RemainDate = styled.div`
    width: auto;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.Purple};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
    background-color: ${({ theme }) => theme.Purple};
    padding: 0.5rem 1rem;
`;

export const SpanP = styled.p`
    width: auto;
    min-width: 4rem;
`;

export const FireImage = styled(Fire)`
    width: 1.5rem;
    align-items: center;
    margin-right: 4px;
`;

export const Organization = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 700;
    line-height: 28.64px;
    text-align: left;
    margin-bottom: 2rem;
    padding-left: 0.5rem;
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
`;
export const InfoSpan = styled.p`
    // font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    line-height: 23.87px;
    text-align: left;
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
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    border-radius: 12px;
    margin: 1rem;
    padding: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;

    img {
        margin-left: 0.2rem;
        width: 1.3rem;
    }
`;
export const TeamBuildBtn = styled.button`
    background-color: ${({ theme }) => theme.box1};
    width: 24%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    border-radius: 12px;
    margin: 1rem;
    padding: 1.2rem;
    color: ${({ theme }) => theme.mainFont2};
    font-size: ${({ theme }) => theme.fontSize.md};
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
    width: 14rem;
    border-radius: 6px;
    border: 1.5px solid #c4c4c4;
    padding: 12px 18px;
    display: flex;
    align-items: center;
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
