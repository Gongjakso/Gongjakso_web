import React, { useState, useEffect, useRef } from 'react';
import * as S from './Bubble.Styled';
import { useMediaQuery } from 'react-responsive';
import useCustomNavigate from '../../hooks/useNavigate';
import { logout } from '../../service/auth_service';
import { getMyInfo } from '../../service/profile_service';

const Bubble = ({ closeBubble }) => {
    const [data, setProfileData] = useState();
    const [open, setOpen] = useState();
    const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });
    const authenticated = localStorage.getItem('accessToken');
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);

    const goToPage = useCustomNavigate();

    const handleButtonClick = path => {
        closeBubble();
        goToPage(path);
    };

    const handleClickOutside = event => {
        // 모달 영역 외의 곳을 클릭했을 때 모달을 닫습니다.
        if (
            !event.target.closest('.modal-content') &&
            !event.target.closest('.profile-button')
        ) {
            closeBubble();
        }
    };

    const handleLogout = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            await logout(accessToken);
            setIsLoggedIn(false);
            window.location.replace('/');
        } else {
            console.error('User is not logged in.');
        }
    };

    const handleLogin = path => {
        if (isLoggedIn) {
            handleLogout();
        } else {
            goToPage(path);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeBubble]);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

    const truncatedMajor =
        data?.major && data.major.length > 10
            ? `${data.major.slice(0, 10)}···`
            : data?.major;

    return (
        <div className="modal-content">
            <S.BubbleContainer>
                <S.BoxContainer>
                    <S.InfoBox>
                        <S.ProfileDetail>
                            <S.ProfileImage />
                            <S.InfoDetail>
                                <S.NameTitle>{data?.name} 님</S.NameTitle>
                                <S.MajorTitle>{truncatedMajor}</S.MajorTitle>
                            </S.InfoDetail>
                        </S.ProfileDetail>
                        <S.MypageImg
                            onClick={() => handleButtonClick('/profile')}
                        />
                    </S.InfoBox>
                    <S.ItemBox>
                        <S.BlueLine />
                        <S.SubTitle
                            onClick={() => handleButtonClick('/recruitedTeam')}
                        >
                            <span>{data?.name}님의 모집 기록</span>
                            <S.ArrowImage />
                        </S.SubTitle>
                        <S.GreyLine />
                        <S.SubTitle
                            onClick={() => handleButtonClick('/appliedTeam')}
                        >
                            <span>{data?.name}님의 지원 기록</span>
                            <S.ArrowImage />
                        </S.SubTitle>
                        <S.GreyLine />
                        <S.SubTitle
                            onClick={() =>
                                handleButtonClick('/participatedTeam')
                            }
                        >
                            <span>{data?.name}님의 참여 기록</span>
                            <S.ArrowImage />
                        </S.SubTitle>
                        <S.GreyLine />
                        <S.SubTitle onClick={() => handleButtonClick('/scrap')}>
                            <span>{data?.name}님의 스크랩</span>
                            <S.ArrowImage />
                        </S.SubTitle>
                        <S.GreyLine />
                    </S.ItemBox>
                </S.BoxContainer>
                <S.LoginButton onClick={() => handleLogin('/login')}>
                    {isLoggedIn ? '로그아웃' : '로그인'}
                </S.LoginButton>
            </S.BubbleContainer>
        </div>
    );
};
export default Bubble;
