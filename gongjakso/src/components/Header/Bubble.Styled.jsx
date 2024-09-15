import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';
import { ReactComponent as defaultProfile } from '../../assets/images/defaultProfile.svg';
import { ReactComponent as Mypage } from '../../assets/images/Mypage.svg';

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
    top: 55px;
    width: 370px;
    right: -50px;
    display: flex;
    border-radius: 20px;
    border: 2px solid #eee;
    background-color: white;
    position: absolute;
    z-index: 100;

    &::before {
        content: '';
        position: absolute;
        border: none;
        width: 20px;
        height: 20px;
        background-color: white;
        border-left: 2px solid #eee;
        border-top: 2px solid #eee;
        top: -12px;
        right: 17%;
        transform: rotate(45deg);
    }
`;
export const SubTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'PreMedium';
    margin: 10px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowImage = styled(Arrow)`
    width: 15px;
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
`;

export const MypageImg = styled(Mypage)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: auto;
    cursor: pointer;
`;

export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 85%;
`;

//이름
export const NameTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-family: 'PreMedium';
    margin: 2px 0px;
`;

//학과
export const MajorTitle = styled.p`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 2px 0px;
`;

//프로필 이미지
export const ProfileImage = styled(defaultProfile)`
    width: 60px;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const ProfileDetail = styled.div`
    display: flex;
    flex-direction: row;
`;
export const InfoDetail = styled.div`
    display: flex;
    color: black;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin: 0 10px;
`;

export const BlueLine = styled.div`
    display: flex;
    width: 100%;
    border-top: 0.7px solid #c2d6ff;
`;

export const GreyLine = styled.div`
    display: flex;
    width: 100%;
    border-top: 0.7px solid #dcdcdc;
`;

export const LoginButton = styled.button`
    display: flex;
    cursor: pointer;
    justify-content: baseline;
    font-family: 'PreRegular';
    padding: 5px;
    margin: 10px 10px 10px 30px;
    text-decoration: underline;
`;
