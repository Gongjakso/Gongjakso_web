import styled from 'styled-components';
import backGroundImage from '../../assets/images/backgroundImg.svg';
import arrow from '../../assets/images/whiteArrow.svg';
import homeImg from '../../assets/images/Homepage.svg';
import contestimg from '../../assets/images/ContestImg.svg';
import leftBubble from '../../assets/images/LeftBubble.svg';
import teambuilding1 from '../../assets/images/Teambuilding1.svg';
import teambuilding2 from '../../assets/images/Teambuilding2.png';
import contestDetail from '../../assets/images/ContestDetails.svg';
import rightBubble from '../../assets/images/rightBubble.svg';
import portfolio from '../../assets/images/Portfolio.png';
import portfolioPage from '../../assets/images/PortfolioPg.svg';

export const HomeContent = styled.div`
    display: flex;
    background-image: url(${backGroundImage});
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    margin-top: 10rem;
`;

export const TitleWrapper1 = styled(TitleWrapper)`
    gap: 0.438rem;
`;

export const Title = styled.span`
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.xxlg};
    font-weight: 900;
    line-height: 2.188rem;
    text-align: center;
    color: #212121;
`;

export const SubTitle = styled.span`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 600;
    text-align: center;
    color: #7b7b7b;
`;

export const Title1 = styled(Title)`
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const LoginBtn = styled.div`
    margin-top: 5rem;
    cursor: pointer;
    display: flex;
    padding-left: 0.938rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 25rem;
    position: absolute;
    top: 0;
    height: 4.5rem;
    border-radius: 0.938rem;
    background: ${({ theme }) => theme.box1};
    font-family: 'PreMedium';
    color: white;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 700;
    line-height: 1.343rem;
    text-align: center;
`;

export const Arrow = styled.div`
    background: url(${arrow});
    width: 1.5rem;
    height: 1.17rem;
    margin-left: 0.938rem;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const PageImg = styled.div`
    display: flex;
    background: url(${homeImg});
    width: 82.8rem;
    height: 59.7rem;
    position: absolute;
    margin-top: 5rem;
    background-repeat: no-repeat;
    @media (max-width: 1270px) {
        transform: scale(0.85);
    }
`;

export const ContestImg = styled.div`
    background: url(${contestimg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 38rem;
    height: 25rem;
    position: absolute;
    margin-top: 1rem;
    right: 0;
    background-repeat: no-repeat;
    @media (max-width: 1270px) {
        transform: scale(0.85);
        margin-top: 0;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80rem;
    width: 100%;
    padding: 0;
    position: relative;
`;

export const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 77rem;
    height: 45rem;
    padding: 4rem 0;
    flex-direction: row;
    position: relative;

    @media (max-width: 1270px) {
        max-width: 64rem;
    }
`;

export const Bubble = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 31rem;
    height: 5.8rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding-top: 0.938rem;
    background-repeat: no-repeat;
    background: url(${leftBubble});
    font-weight: 600;
    @media (max-width: 1270px) {
        transform: scale(0.8);
    }
`;

export const Text = styled.div`
    display: flex;
    top: 9.5rem;
    left: 19rem;
    font-family: 'PreMedium';
    line-height: 2.191rem;
    text-align: right;
    font-weight: 600;
    width: 18rem;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.lg};
    @media (max-width: 1270px) {
        left: 12rem;
        top: 8rem;
        font-size: ${({ theme }) => theme.fontSize.md};
    }
`;

export const TextContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
`;

export const TeamImg = styled.div`
    display: flex;
    background: url(${teambuilding1});
    position: absolute;
    top: 14rem;
    background-repeat: no-repeat;
    left: 24.5rem;
    z-index: 1;
    width: 18rem;
    background-size: cover;
    height: 16rem;
    @media (max-width: 1270px) {
        left: 16rem;
        top: 12rem;
        transform: scale(0.9);
    }
`;

export const RightBubble = styled(Bubble)`
    background: url(${rightBubble});
    right: 0;
    background-repeat: no-repeat;
    @media (max-width: 1270px) {
        transform: scale(0.8);
        margin-top: 1rem;
    }
`;

export const RightBubble1 = styled(RightBubble)`
    position: absolute;
    left: 7.5rem;
    top: 6.5rem;
    @media (max-width: 1270px) {
        transform: scale(0.8);
        left: 1.5rem;
        top: 5.5rem;
        margin-top: 0;
    }
`;

export const Section2 = styled(Section1)`
    max-width: 80rem;
    width: 100%;
    height: 45rem;
    position: relative;
    @media (max-width: 1270px) {
        max-width: 64rem;
    }
`;

export const Section3 = styled(Section1)`
    max-width: 80rem;
    width: 100%;
    height: 40rem;
    margin-bottom: 30rem;
    position: relative;
    @media (max-width: 1270px) {
        max-width: 64rem;
    }
`;

export const ContestDetail = styled(ContestImg)`
    background: url(${contestDetail});
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    left: 0;
    height: 30rem;
    background-repeat: no-repeat;
    @media (max-width: 1270px) {
        transform: scale(0.85);
    }
`;

export const TextContainer1 = styled(TextContainer)`
    right: 0;
`;

export const TextContainer2 = styled(TextContainer)`
    left: 0;
`;

export const Bubble1 = styled(Bubble)`
    position: absolute;
    right: 8.5rem;
    top: 6.5rem;
    @media (max-width: 1270px) {
        right: 0.8rem;
    }
`;

export const Bubble2 = styled(Bubble)`
    position: absolute;
    left: 0;
    top: 0;
`;

export const Text1 = styled(Text)`
    text-align: left;
    position: absolute;
    top: 20rem;
    left: -6.875rem;
    width: 30rem;
    @media (max-width: 1270px) {
        left: 2.5rem;
        top: 18rem;
    }
`;

export const Text2 = styled(Text)`
    text-align: right;
    top: 29.5rem;
    left: 8.5rem;
    width: 32rem;
    @media (max-width: 1270px) {
        left: 2rem;
        top: 24rem;
    }
`;

export const TeamImg2 = styled(TeamImg)`
    background: url(${teambuilding2});
    width: 19rem;
    height: 17rem;
    background-size: cover;
    left: 17.5rem;
    top: 14.5rem;
    @media (max-width: 1270px) {
        left: 19.5rem;
        top: 15rem;
        transform: scale(0.7);
    }
`;

export const PortfolioImg = styled(TeamImg)`
    background: url(${portfolio});
    width: 16rem;
    height: 15rem;
    background-size: cover;
    left: 26rem;
    top: 13rem;
    @media (max-width: 1270px) {
        left: 17rem;
        transform: scale(0.8);
        top: 10rem;
    }
`;

export const PortfolioDetail = styled(ContestImg)`
    background: url(${portfolioPage});
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    right: 0;
    top: 9.5rem;
    width: 37.7rem;
    height: 28rem;
    @media (max-width: 1270px) {
        top: 7.2rem;
        transform: scale(0.8);
    }
`;
