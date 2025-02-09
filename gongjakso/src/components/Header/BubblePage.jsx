import React, { useEffect, useState } from 'react';
import * as S from './Bubble.Styled';
import { getMyInfo } from '../../service/profile_service';
import { logout } from '../../service/auth_service';
import useCustomNavigate from '../../hooks/useNavigate';

const BubblePage = () => {
    const [data, setProfileData] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken'),
    );
    const goToPage = useCustomNavigate();

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
    }, []);

    const handleLogout = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            await logout(accessToken);
            setIsLoggedIn(false);
            goToPage('/');
        }
    };

    const truncatedMajor =
        data?.major && data.major.length > 10
            ? `${data.major.slice(0, 10)}···`
            : data?.major;

    return (
        <S.PageContainer>
            <S.BoxContainer>
                <S.InfoBox>
                    <S.InfoText>마이페이지</S.InfoText>
                    <S.ProfileDetail>
                        <S.ProfileImage />
                        <S.ProfileInfo>
                            <S.InfoDetail>
                                <S.NameTitle>{data?.name} 님</S.NameTitle>
                                <S.MajorTitle>{truncatedMajor}</S.MajorTitle>
                            </S.InfoDetail>
                            <S.MypageImg onClick={() => goToPage('/profile')} />
                        </S.ProfileInfo>
                    </S.ProfileDetail>
                </S.InfoBox>
                <S.ItemBox>
                    <S.InfoText>메뉴</S.InfoText>
                    <S.SubTitle onClick={() => goToPage('/recruitedTeam')}>
                        <span>{data?.name}님의 모집 기록</span>
                        <S.ArrowImage />
                    </S.SubTitle>
                    <S.SubTitle onClick={() => goToPage('/appliedTeam')}>
                        <span>{data?.name}님의 지원 기록</span>
                        <S.ArrowImage />
                    </S.SubTitle>
                    <S.SubTitle onClick={() => goToPage('/participatedTeam')}>
                        <span>{data?.name}님의 참여 기록</span>
                        <S.ArrowImage />
                    </S.SubTitle>
                    <S.SubTitle onClick={() => goToPage('/scrap')}>
                        <span>{data?.name}님의 스크랩</span>
                        <S.ArrowImage />
                    </S.SubTitle>
                </S.ItemBox>
                <S.LoginButton onClick={handleLogout}>
                    {isLoggedIn ? '로그아웃' : '로그인'}
                </S.LoginButton>
            </S.BoxContainer>
        </S.PageContainer>
    );
};

export default BubblePage;
