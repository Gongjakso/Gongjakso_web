import styled from 'styled-components';
import { ReactComponent as TeamBuildIcon } from '../../assets/images/TeamBuildIcon.svg';
import theme from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    justify-content: center;
    /* align-items: center; */
    margin-top: 160px;
    margin-bottom: 90px;
`;

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 250px;
    border: 1px solid black;
    border-radius: 35px;
    background-color: #0054ff;
    gap: 55px;
`;
export const ImageContent = styled.div`
    width: 100%;
    max-width: 515px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (min-width: 1641px) {
        padding: 150px 0;
    }

    @media (max-width: 1640px) {
        padding: 73px 0;
    }
`;

export const ImageDiv = styled(TeamBuildIcon)`
    width: 100%;
    height: 100%;
    max-width: 340px;
    margin-top: 8%;
    min-width: 120px;
    max-height: 340px;
    min-height: 120px;

    @media (min-width: 1641px) {
        width: 340px; // 화면 폭이 1461px 이상 1920px 이하일 때
        height: 340px; // 화면 높이가 1461px 이상 1920px 이하일 때
    }

    @media (max-width: 1640px) {
        width: 220px; // 화면 폭이 1460px 이하일 때
        height: 220px; // 화면 높이가 1460px 이하일 때
    }
`;

export const BuildDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1641px) {
        padding: 100px 0;
    }

    @media (max-width: 1640px) {
        padding: 50px 0;
    }
`;

export const ButtonSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${props => (props.$isMain === 'main' ? 'black' : '#ffffff')};
    font-weight: 700;
    height: 60px;
    border: 1px solid #ffffff;
    border-radius: 12px;

    &.contest {
        background-color: ${props =>
            props.$isClick === 'contest' ? '#FFFFFF' : ''};
        color: ${props => (props.$isClick === 'contest' ? '#000000' : '')};
    }
    &.project {
        background-color: ${props =>
            props.$isClick === 'project' ? '#FFFFFF' : ''};
        color: ${props => (props.$isClick === 'project' ? '#000000' : '')};
    }
`;

export const Text = styled.p`
    color: ${props =>
        props.$isMain === 'main' ? theme.mainFont : theme.mainFont};
    font-family: 'TheJamsilRegular';
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.fontSize.xlg};
    font-weight: 600;
    line-height: 39.6px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-left: 7.5%;
`;
