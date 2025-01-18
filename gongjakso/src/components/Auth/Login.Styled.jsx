import styled from 'styled-components';
import kakaoLogin from '../../assets/images/kakao_login.svg';
import GoogleLogin from '../../assets/images/Google_Login.svg';
import NaverLogin from '../../assets/images/Naver_Login.svg';
import macbookImage from '../../assets/images/macBookImage.svg';

export const KakaoButton = styled.button`
    cursor: pointer;
    width: 25rem;
    height: 3.75rem;
    background: url(${kakaoLogin}) no-repeat;
    background-size: contain;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 3.125rem;
        width: 20rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        height: 4rem;
        width: 26rem;
    }
`;
export const GoogleButton = styled.button`
    cursor: pointer;
    width: 25rem;
    height: 3.75rem;
    background: url(${GoogleLogin}) no-repeat;
    background-size: contain;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 3.125rem;
        width: 20rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        height: 4rem;
        width: 26rem;
    }
`;
export const NaverButton = styled.button`
    cursor: pointer;
    width: 25rem;
    height: 3.75rem;
    background: url(${NaverLogin}) no-repeat;
    background-size: contain;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 3.125rem;
        width: 20rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        height: 4rem;
        width: 26rem;
    }
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 2rem;
    }
`;
export const LoginBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 0.813rem;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6rem;
    @media screen and (max-width: 1023px) {
        flex-direction: column;
    }
`;
export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10rem 0;
    flex-direction: row;
`;
export const Image = styled.div`
    background: url(${macbookImage});
    width: 30rem;
    height: 25rem;
    margin-top: -3rem;
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        padding-bottom: 10rem;
        width: 11.938rem;
        height: 9.813rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        padding-bottom: 10rem;
        width: 20rem;
        height: 20rem;
    }
`;
