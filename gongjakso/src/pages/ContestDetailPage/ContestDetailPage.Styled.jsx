import styled from 'styled-components';
import { ReactComponent as Fire } from '../../assets/images/Fire2.svg';

export const MainContent = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
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
    line-height: 52.8px;
    text-align: left;
`;

export const ContestInfoTop = styled.h1`
    display: flex;
    justify-content: space-between;
`;

export const ContestImg = styled.img`
    width: 305px;
    height: 384px;
`;
export const RemainDate = styled.div`
    width: auto;
    height: 35px;
    margin-top: 10px;
    margin-left: 10px;
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
    min-width: 50px;
`;

export const FireImage = styled(Fire)`
    width: 20px;
    align-items: center;
    margin-right: 4px;
`;

export const Organization = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 700;
    line-height: 28.64px;
    text-align: left;
    margin-bottom: 25px;
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
    height: 50px;
    border-radius: 12px;
    margin: 15px;
    padding: 20px;
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
    height: 50px;
    border-radius: 12px;
    margin: 15px;
    padding: 20px;
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
    margin-bottom: 30px;
`;
export const Fillter1 = styled.div`
    width: 190px;
    border-radius: 5px;
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
