import React, { useEffect } from 'react';
import * as S from './KakaoRedirectPage.Styled';
import { getToken } from '../../service/auth_service';

const NaverRedirectPage = () => {
    const REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;
    const code = new URL(window.location.href).searchParams.get('code');
    const type = 'NAVER';

    useEffect(() => {
        getToken(code, REDIRECT_URI, type)
            .then(result => {
                localStorage.setItem('accessToken', result?.accessToken);
                window.location.replace('/');
            })
            .catch(error => {
                console.error('Error occurred while getting token:', error);
            });
    }, [REDIRECT_URI, code]);
    return (
        <S.Container>
            <S.Spinner />
        </S.Container>
    );
};

export default NaverRedirectPage;
