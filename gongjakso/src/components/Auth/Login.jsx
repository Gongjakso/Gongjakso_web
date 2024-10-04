import React from 'react';
import * as S from '../Auth/Login.Styled';

const Login = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const handleLogin = () => {
        // 여기서 다른 작업을 수행할 수도 있습니다.
        // /login 부분을 제외한 앞부분만 가져옴
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

        window.location.replace(`${KAKAO_AUTH_URL}`);
    };

    return (
        <S.LoginContent>
            <S.LoginInfo>
                3초만에 로그인하고 <br /> 공모전을 시작해보세요!
                <S.Button onClick={handleLogin} />
            </S.LoginInfo>
            <S.Image />
        </S.LoginContent>
    );
};

export default Login;
