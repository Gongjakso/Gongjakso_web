import styled, { keyframes } from 'styled-components';
import { ReactComponent as NoMobile } from '../../assets/images/NoMobile.svg';
import { ReactComponent as Circle } from '../../assets/images/CircleGroup.svg';
import theme from '../../styles/theme';

const waviy = keyframes`
  0%, 50%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`;

export const NoMobileIcon = styled(NoMobile)`
    background-size: contain;
`;
export const CircleGroup = styled(Circle)`
    background-size: contain;
`;

export const NoMobileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center; // Optional: ensures the text is centered
`;

export const MobileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;
export const ContentDiv = styled.div``;

export const subTitleP = styled.p`
    font-size: ${theme.fontSize.md};
    font-weight: bolder;
`;
export const MainTitle = styled.h2`
    font-size: ${theme.fontSize.xl};
    font-weight: bolder;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

export const Span = styled.span`
    position: relative;
    display: inline-block;
    animation: ${waviy} 2s infinite;
    animation-delay: calc(0.1s * var(--i));
    white-space: pre; /* 공백 문자를 유지 */
`;
