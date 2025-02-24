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
import BlueBubble from '../../assets/images/BlueBubble.svg';

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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 16.4rem;
        margin-top: 9.375rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 30rem;
    }
`;

export const TitleWrapper1 = styled(TitleWrapper)`
    gap: 0.438rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        margin-top: 14.938rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 30rem;
        margin-top: 20rem;
    }
`;

export const Title = styled.span`
    font-family: 'PreMedium';
    font-size: ${({ theme }) => theme.fontSize.xxlg};
    font-weight: 900;
    line-height: 2.188rem;
    text-align: center;
    color: #212121;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.75rem;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.9rem;
    }
`;

export const SubTitle = styled.span`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 600;
    text-align: center;
    color: #7b7b7b;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.938rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.25rem;
    }
`;

export const SubTitle1 = styled(SubTitle)`
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 12.6rem;
        span {
            display: block;
        }
    }
`;

export const SubTitle2 = styled(SubTitle)`
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 10.7rem;
        span {
            display: block;
        }
    }
`;

export const Title1 = styled(Title)`
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.9rem;
    }
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
    border-radius: 10px;
    background: ${({ theme }) => theme.box1};
    font-family: 'PreMedium';
    color: white;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 700;
    line-height: 1.343rem;
    text-align: center;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 13.313rem;
        height: 2.875rem;
        font-size: 0.938rem;
        margin-top: 3.3rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 18rem;
        height: 4rem;
        font-size: 1.25rem;
        margin-top: 3.5rem;
    }
`;

export const Arrow = styled.div`
    background: url(${arrow});
    width: 1.5rem;
    height: 1.17rem;
    margin-left: 0.938rem;
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 0.8rem;
        height: 0.6rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 1.2rem;
        height: 0.8rem;
    }
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
        transform: scale(0.8);
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 24rem;
        height: 22rem;
        margin-top: 9.5rem;
        background-size: contain;
        transform: scale(1);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
        height: 30rem;
        margin-top: 0rem;
        background-size: contain;
        transform: scale(1);
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

    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.5rem;
        height: 13.563rem;
        transform: scale(1);
        background-size: contain;
        position: absolute;
        bottom: 0;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
        height: 25rem;
        transform: scale(1);
        background-size: contain;
        position: absolute;
        bottom: 0;
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
    @media (max-width: 1270px) {
        height: 70rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 27.875rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        height: 47rem;
    }
`;

export const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 72rem;
    height: 45rem;
    padding: 4rem 0;
    flex-direction: row;
    position: relative;

    @media (max-width: 1270px) {
        max-width: 66rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        flex-direction: column;
        max-width: 20.5rem;
        height: 24.188rem;
        padding-top: 1.125rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        flex-direction: column;
        max-width: 35rem;
        height: 40rem;
        padding-top: 2.5rem;
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 16.313rem;
        height: 4rem;
        transform: scale(1);
        padding-bottom: 1.3rem;
        background-size: contain;
        font-size: 0.75rem;
        background-repeat: no-repeat;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 22rem;
        height: 5rem;
        transform: scale(1);
        padding-bottom: 1.3rem;
        background-size: contain;
        font-size: 1.1rem;
        background-repeat: no-repeat;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
`;

export const TeamImg = styled.div`
    display: flex;
    background: url(${teambuilding1});
    position: absolute;
    top: 16rem;
    background-repeat: no-repeat;
    left: 21rem;
    z-index: 1;
    width: 18rem;
    background-size: cover;
    height: 16rem;
    @media (max-width: 1270px) {
        left: 17rem;
        top: 11.5rem;
        transform: scale(0.9);
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        left: 6rem;
        top: -15rem;
        width: 8.75rem;
        height: 8.75rem;
        transform: scale(1.5);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        left: 13rem;
        top: -19rem;
        width: 10rem;
        height: 10rem;
        transform: scale(1.5);
    }
`;

export const RightBubble = styled(Bubble)`
    background: url(${rightBubble});
    right: 0;
    position: absolute;
    background-repeat: no-repeat;
    @media (max-width: 1270px) {
        transform: scale(0.8);
        margin-top: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 15.155rem;
        right: 1rem;
        position: absolute;
        transform: scale(1);
        background-size: contain;
        margin: 0;
        padding: 0;
        padding-bottom: 0.7rem;
        font-size: 0.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 22rem;
        height: 5rem;
        right: 1rem;
        position: absolute;
        transform: scale(1);
        background-size: contain;
        margin: 0;
        padding: 0;
        padding-bottom: 0.3rem;
        font-size: 1.1rem;
    }
`;

export const SkyBlueBubble = styled.div`
    display: flex;
    top: 7.5rem;
    left: 6rem;
    font-weight: 600;
    width: 24.5rem;
    height: 9rem;
    background: url(${BlueBubble});
    color: white;
    font-family: 'PreMedium';
    text-align: right;
    align-items: center;
    justify-content: center;
    padding-top: 0.938rem;
    line-height: 2.5rem;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.lg};
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 1270px) {
        transform: scale(0.8);
        top: 5.5rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 12.125rem;
        height: 4.438rem;
        top: 4rem;
        left: 8.3rem;
        padding-top: 0.5rem;
        font-size: 0.75rem;
        transform: scale(1);
        line-height: 1.125rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 16rem;
        height: 6rem;
        top: 5rem;
        transform: scale(1);
        left: 19rem;
        padding-top: 0.5rem;
        font-size: 1.1rem;
        line-height: 2rem;
    }
`;

export const SkyBlueBubble1 = styled(SkyBlueBubble)`
    top: 14rem;
    left: 47rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    width: 36rem;
    padding-right: 2rem;
    height: 13rem;
    @media (max-width: 1270px) {
        transform: scale(0.8);
        left: 36rem;
        top: 12rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 17.688rem;
        position: absolute;
        left: 3rem;
        top: 7rem;
        height: 7.25rem;
        padding-right: 0;
        background-position: center;
        font-size: 0.75rem;
        transform: scale(1);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 30rem;
        position: absolute;
        left: 5rem;
        top: 9.5rem;
        height: 11rem;
        padding-right: 0;
        background-position: center;
        font-size: 1.1rem;
        transform: scale(1);
    }
`;

export const SkyBlueBubble2 = styled(SkyBlueBubble)`
    top: 14rem;
    left: 3rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    width: 37rem;
    padding-right: 2rem;
    height: 13rem;
    @media (max-width: 1270px) {
        transform: scale(0.8);
        top: 10.5rem;
        left: -3rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 17.688rem;
        height: 6.25rem;
        top: 7.5rem;
        left: 3rem;
        font-size: 0.75rem;
        background-position: center;
        padding: 0;
        transform: scale(1);
        padding-top: 0.938rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 25rem;
        height: 9rem;
        top: 10.5rem;
        left: 10rem;
        transform: scale(1);
        background-position: center;
        padding: 0;
        padding-top: 0.938rem;
        font-size: 1.1rem;
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        position: absolute;
        transform: scale(1);
        top: 3.5rem;
        left: 5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        position: absolute;
        transform: scale(1);
        top: 5rem;
        left: 12rem;
    }
`;

export const Section2 = styled(Section1)`
    max-width: 80rem;
    width: 100%;
    height: 45rem;
    position: relative;
    @media (max-width: 1270px) {
        max-width: 68rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 37.125rem;
        max-width: 20.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        max-width: 35rem;
        height: 52rem;
    }
`;

export const Section3 = styled(Section1)`
    max-width: 80rem;
    width: 100%;
    height: 40rem;
    margin-bottom: 30rem;
    position: relative;
    @media (max-width: 1270px) {
        max-width: 66rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 37.125rem;
        max-width: 20.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        max-width: 35rem;
        height: 52rem;
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.5rem;
        height: 15.313rem;
        top: 17rem;
        left: 0;
        transform: scale(1);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
        height: auto;
        top: 26rem;
        left: 0;
        transform: scale(1);
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 15.155rem;
        position: absolute;
        top: 3.5rem;
        left: 0;
        transform: scale(1);
        background-size: contain;
        margin: 0;
        padding: 0;
        padding-bottom: 0.7rem;
        font-size: 0.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 22rem;
        position: absolute;
        top: 5rem;
        left: 0;
        transform: scale(1);
        background-size: contain;
        margin: 0;
        padding: 0;
        padding-bottom: 0.3rem;
        font-size: 1.1rem;
    }
`;

export const Bubble2 = styled(Bubble)`
    position: absolute;
    left: 0;
    top: 0;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 15.155rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: scale(1);
        background-size: contain;
        margin: 0;
        padding: 0;
        padding-bottom: 0.7rem;
        font-size: 0.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 22rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: scale(1);
        background-size: contain;
        margin: 0;
        padding: 0;
        padding-bottom: 0.3rem;
        font-size: 1.1rem;
    }
`;

export const TeamImg2 = styled(TeamImg)`
    background: url(${teambuilding2});
    width: 19rem;
    height: 17rem;
    position: absolute;
    background-size: cover;
    left: 73.5rem;
    top: 18.5rem;
    @media (max-width: 1440px) {
        left: 29.5rem;
        top: 15rem;
        transform: scale(0.9);
    }
    @media (max-width: 1270px) {
        left: 25.5rem;
        top: 14rem;
        transform: scale(0.9);
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        left: 6rem;
        position: relative;
        top: -16rem;
        width: 8.75rem;
        height: 8.75rem;
        transform: scale(1.4);
        background-size: contain;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        left: 13rem;
        position: relative;
        top: -18rem;
        width: 10rem;
        height: 10rem;
        transform: scale(1.4);
        background-size: contain;
    }
`;

export const PortfolioImg = styled(TeamImg)`
    background: url(${portfolio});
    width: 16rem;
    height: 15rem;
    background-size: cover;
    left: 35rem;
    top: 22rem;
    @media (max-width: 1270px) {
        left: 19rem;
        transform: scale(0.8);
        top: 18rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        left: 6rem;
        position: relative;
        top: -17rem;
        width: 8.75rem;
        height: 8.75rem;
        transform: scale(1.4);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        left: 13rem;
        position: relative;
        top: -19rem;
        width: 10rem;
        height: 10rem;
        transform: scale(1.4);
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
    /* @media (max-width: 1270px) {
        top: 7.2rem;
        transform: scale(0.8);
    } */
    @media screen and (min-width: 375px) and (max-width: 549px) {
        position: absolute;
        width: 20.5rem;
        height: 15.313rem;
        top: 16.5rem;
        left: 0;
        transform: scale(1);
        font-size: 0.75rem;
        background-position: center;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        position: absolute;
        width: 35rem;
        height: auto;
        top: 22rem;
        left: 0;
        transform: scale(1);
        font-size: 0.75rem;
        background-position: center;
    }
`;
