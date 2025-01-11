import React from 'react';
import * as S from '../Auth/Login.Styled';

const Login = () => {
    const STATE = 'test';
    const KAKAO_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    const GOOGLE_AUTH_CLIENT_ID = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

    const NAVER_AUTH_CLIENT_ID = process.env.REACT_APP_NAVER_AUTH_CLIENT_ID;
    const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20profile%20email`;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_AUTH_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
    const handleKakaoLogin = () => {
        window.location.replace(`${KAKAO_AUTH_URL}`);
    };
    const handleNaverLogin = () => {
        window.location.replace(`${NAVER_AUTH_URL}`);
    };
    const handleGoogleLogin = () => {
        window.location.replace(`${GOOGLE_AUTH_URL}`);
    };

    return (
        <S.LoginContent>
            <S.LoginInfo>
                3초만에 로그인하고 <br /> 공모전을 시작해보세요!
                <S.LoginBtn>
                    <S.KakaoButton onClick={handleKakaoLogin} />
                    <S.NaverButton onClick={handleNaverLogin} />
                    <S.GoogleButton onClick={handleGoogleLogin} />
                </S.LoginBtn>
            </S.LoginInfo>
            <S.Image />
        </S.LoginContent>
    );
};

export default Login;
