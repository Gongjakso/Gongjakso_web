import styled from 'styled-components';
import backGroundImage from '../../assets/images/backgroundImg.svg';
import arrow from '../../assets/images/whiteArrow.svg';
import homeImg from '../../assets/images/Homepage.png';
import contestimg from '../../assets/images/Contestpage.svg';
import leftBubble from '../../assets/images/LeftBubble.svg';
import teambuilding1 from '../../assets/images/Teambuilding1.svg';
import teambuilding2 from '../../assets/images/Teambuilding2.png';
import contestDetail from '../../assets/images/ContestDetail.svg';
import rightBubble from '../../assets/images/rightBubble.svg';
import portfolio from '../../assets/images/Portfolio.png';
import portfolioPage from '../../assets/images/PortfolioPage.svg';

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
    gap: 20px;
    margin-top: 10rem;
`;

export const TitleWrapper1 = styled(TitleWrapper)`
    gap: 3px;
`;

export const Title = styled.span`
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 900;
    line-height: 30px;
    text-align: center;
    color: #212121;
`;

export const SubTitle = styled.span`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
    text-align: center;
    color: #7b7b7b;
`;

export const Title1 = styled(Title)`
    font-size: ${({ theme }) => theme.fontSize.l};
`;
export const LoginBtn = styled.div`
    margin-top: 5rem;
    cursor: pointer;
    display: flex;
    padding-left: 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 22rem;
    height: 4rem;
    border-radius: 15px;
    background: ${({ theme }) => theme.box1};
    font-family: 'PreMedium';
    color: white;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 700;
    line-height: 21.48px;
    text-align: center;
`;

export const Arrow = styled.div`
    background: url(${arrow});
    width: 1.5rem;
    height: 1.17rem;
    margin-left: 15px;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const PageImg = styled.div`
    display: flex;
    background: url(${homeImg});
    width: 82.8rem;
    height: 59.7rem;
    position: absolute;
    margin-top: 4rem;
    transform: scale(0.7);
    background-repeat: no-repeat;
`;

export const ContestImg = styled.div`
    background: url(${contestimg});
    width: 38rem;
    height: 25rem;
    position: absolute;
    right: 0;
    background-repeat: no-repeat;
    transform: scale(0.9);
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 58rem;
    padding: 0;
    position: relative;
`;

export const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 66rem;
    height: 35rem;
    padding: 2rem 0;
    flex-direction: row;
    position: relative;
`;

export const Bubble = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 31rem;
    height: 5.8rem;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    padding-top: 15px;
    transform: scale(0.8);
    background-repeat: no-repeat;
    background: url(${leftBubble});
`;

export const Text = styled.div`
    display: flex;
    top: 8rem;
    left: 14rem;
    font-family: 'PreMedium';
    line-height: 25.06px;
    text-align: right;
    width: 14rem;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.m};
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
    top: 12.5rem;
    background-repeat: no-repeat;
    left: 18.5rem;
    z-index: 1;
    width: 16rem;
    background-size: cover;
    height: 15rem;
`;

export const RightBubble = styled(Bubble)`
    background: url(${rightBubble});
    right: 0;
    background-repeat: no-repeat;
`;

export const RightBubble1 = styled(RightBubble)`
    position: absolute;
    left: 4.5rem;
    top: 5.5rem;
`;

export const Section2 = styled(Section1)`
    width: 70rem;
    height: 35rem;
    position: relative;
`;

export const Section3 = styled(Section1)`
    width: 72rem;
    height: 40rem;
    margin-bottom: 30rem;
    position: relative;
`;

export const ContestDetail = styled(ContestImg)`
    background: url(${contestDetail});
    position: absolute;
    left: 0;
    height: 30rem;
    background-repeat: no-repeat;
`;

export const TextContainer1 = styled(TextContainer)`
    right: 0;
`;

export const TextContainer2 = styled(TextContainer)`
    left: 0;
`;

export const Bubble1 = styled(Bubble)`
    position: absolute;
    right: 4.5rem;
    top: 5.5rem;
`;

export const Bubble2 = styled(Bubble)`
    position: absolute;
    left: 0;
    top: 0;
`;

export const Text1 = styled(Text)`
    text-align: left;
    top: 20rem;
    left: -20px;
    width: 23rem;
`;

export const Text2 = styled(Text)`
    text-align: right;
    top: 27rem;
    left: 11rem;
    width: 30rem;
`;
export const TeamImg2 = styled(TeamImg)`
    background: url(${teambuilding2});
    width: 16rem;
    height: 15rem;
    background-size: cover;
    left: 17.5rem;
    top: 14.5rem;
`;

export const PortfolioImg = styled(TeamImg)`
    background: url(${portfolio});
    width: 16rem;
    height: 15rem;
    background-size: cover;
    left: 21rem;
    top: 12rem;
    transform: scale(0.9);
`;

export const PortfolioDetail = styled(ContestImg)`
    background: url(${portfolioPage});
    position: absolute;
    right: 0;
    top: 6.5rem;
    width: 37.7rem;
    height: 28rem;
`;
