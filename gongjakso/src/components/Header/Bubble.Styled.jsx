import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';
import { ReactComponent as defaultProfile } from '../../assets/images/defaultProfile.svg';
import { ReactComponent as Mypage } from '../../assets/images/Mypage.svg';

export const PageContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin-top: 6rem;
`;

export const InfoText = styled.span`
    font-size: 1rem;
    font-family: 'PreBold';
    margin: 0.625rem;
`;

export const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BubbleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 3.438rem;
    width: 25rem;
    right: -3.3rem;
    display: flex;
    border-radius: 1.25rem;
    border: 0.125rem solid #eee;
    background-color: white;
    position: absolute;
    z-index: 100;

    &::before {
        content: '';
        position: absolute;
        border: none;
        width: 1.25rem;
        height: 1.25rem;
        background-color: white;
        border-left: 0.125rem #eee;
        border-top: 0.125rem solid #eee;
        top: -0.75rem;
        right: 17%;
        transform: rotate(45deg);
    }
`;

export const SubTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'PreMedium';
    margin: 0.625rem;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        border-radius: 8px;
        border: 1px solid #d9d9d9;
        width: 21.188rem;
        padding: 1.125rem;
        font-size: 0.875rem;
        margin: 0;
    }
`;

export const ArrowImage = styled(Arrow)`
    width: 0.938rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: auto;
`;

export const ItemBox = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        width: 21.188rem;
        gap: 0.5rem;
        margin-top: 2rem;
    }
`;

export const MypageImg = styled(Mypage)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.25rem;
    height: auto;
    cursor: pointer;
`;

export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 85%;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        flex-direction: column;
        width: 21.188rem;
    }
`;

//이름
export const NameTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-family: 'PreMedium';
    margin: 0.125rem 0;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        font-size: 1rem;
    }
`;

//학과
export const MajorTitle = styled.p`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 0.125rem 0;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        font-size: 0.75rem;
    }
`;

//프로필 이미지
export const ProfileImage = styled(defaultProfile)`
    width: 3.75rem;
    display: flex;
    justify-content: center;
    padding: 0.313rem;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        width: 3.75rem;
        height: 3.75rem;
    }
`;

export const ProfileDetail = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        border: 1px solid #d9d9d9;
        width: 21.188rem;
        padding: 0.938rem 1.125rem;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

export const InfoDetail = styled.div`
    display: flex;
    color: black;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin: 0 0.625rem;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        margin: 0;
        margin-left: 0.1rem;
    }
`;

export const BlueLine = styled.div`
    display: flex;
    width: 100%;
    border-top: 0.044rem solid #c2d6ff;
`;

export const GreyLine = styled.div`
    display: flex;
    width: 100%;
    border-top: 0.044rem solid #dcdcdc;
`;

export const LoginButton = styled.button`
    display: flex;
    cursor: pointer;
    justify-content: baseline;
    font-family: 'PreRegular';
    padding: 0.313rem;
    margin: 0.625rem 0.625rem 0.625rem 1.875rem;
    text-decoration: underline;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        margin-left: 18rem;
    }
`;
