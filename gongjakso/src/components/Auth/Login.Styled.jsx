import styled from 'styled-components';
import kakaoLogin from '../../assets/images/kakao_login.svg';
import GoogleLogin from '../../assets/images/Google_Login.svg';
import NaverLogin from '../../assets/images/Naver_Login.svg';
import macbookImage from '../../assets/images/macBookImage.svg';

export const KakaoButton = styled.button`
    cursor: pointer;
    width: 450px;
    height: 68px;
    background-size: cover;
    background: url(${kakaoLogin}) no-repeat;
`;
export const GoogleButton = styled.button`
    cursor: pointer;
    width: 450px;
    height: 68px;
    background-size: cover;
    background: url(${GoogleLogin}) no-repeat;
`;
export const NaverButton = styled.button`
    cursor: pointer;
    width: 450px;
    height: 68px;
    background-size: cover;
    background: url(${NaverLogin}) no-repeat;
`;
export const LoginInfo = styled.div`
    align-items: baseline;
    display: flex;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.ll};
    flex-direction: column;
    line-height: 150%;
    font-weight: 700;
    gap: 1.5rem;
`;
export const LoginBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    display: flex;
`;

export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 150px;
    height: 100%;
    background: white;
    flex-direction: row;
`;
export const Image = styled.div`
    background: url(${macbookImage});
    width: 400px;
    margin: 35px;
    height: 450px;
    background-size: contain;
    background-repeat: no-repeat;
`;
