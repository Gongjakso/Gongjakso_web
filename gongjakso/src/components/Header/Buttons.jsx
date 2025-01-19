import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as S from './Buttons.styled';
import useCustomNavigate from '../../hooks/useNavigate';
import myPageImage from '../../assets/images/My_page.svg';
import Modal1 from '../../features/modal/LoginModal1';
import Modal2 from '../../features/modal/LoginModal2';
import Bubble from './Bubble';
import { logout } from '../../service/auth_service';
import { useLocation, useNavigate } from 'react-router-dom';

const GenericIconButton = ({ type, hover, setHover, active, setActive }) => {
    const authenticated = localStorage.getItem('accessToken');
    const handleNavigate = useCustomNavigate();
    const navigate = useNavigate();

    const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 }); // 모바일/태블릿 환경 감지
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [bubbleOpen, setBubbleOpen] = useState(false);
    const [path, setPath] = useState();

    const location = useLocation();
    const goToPage = useCustomNavigate();
    const currentPage = location.pathname.substring(1).includes('/')
        ? location.pathname.split('/')[1]
        : location.pathname.substring(1);

    const getIconName = () => {
        const iconNames = {
            contestList: '공모전 리스트',
            contest: '공모전 공고',
            profile: 'MY',
            login: isLoggedIn ? '로그아웃' : '로그인',
        };
        return iconNames[type];
    };

    useEffect(() => {
        setIsLoggedIn(!!authenticated);
    }, [authenticated]);

    const iconName = getIconName();

    const handleProfileClick = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            if (type === 'profile') {
                if (isMobileOrTablet) {
                    // 모바일/태블릿 환경에서는 페이지로 이동
                    goToPage('/bubble');
                } else {
                    // 데스크톱 환경에서는 모달 열기
                    setBubbleOpen(true);
                }
            } else {
                handleNavigate(`/${type}`);
            }
        } else {
            setModal1Open(true); // 로그인 모달 열기
        }
    };

    const handlePostingClick = () => {
        if (authenticated) {
            handleNavigate(`/${type}`);
        } else {
            setModal2Open(true);
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

    const closeModal1 = () => {
        setModal1Open(false);
    };

    const closeModal2 = () => {
        setModal2Open(false);
    };

    const closeBubble = () => {
        setBubbleOpen(false);
    };

    return (
        <>
            <S.IconButton
                type="button"
                name={currentPage}
                $active={currentPage === type}
                $type={currentPage}
                className={`icon-button ${type === 'profile' ? 'profile-button' : ''}`}
                onMouseEnter={() =>
                    setHover(prev => ({ ...prev, [type]: true }))
                }
                onMouseLeave={() =>
                    setHover(prev => ({ ...prev, [type]: false }))
                }
                onClick={() => {
                    setActive(type);
                    if (['profile', 'teambuild', 'calendar'].includes(type)) {
                        handleProfileClick();
                    } else if (
                        ['project', 'contestList', 'contest'].includes(type)
                    ) {
                        setPath(type);
                        handlePostingClick();
                    } else if (type === 'login') {
                        if (isLoggedIn) {
                            handleLogout();
                        } else {
                            handleNavigate('/login');
                        }
                    } else {
                        handleNavigate(`/${type}`);
                    }
                }}
            >
                <S.IconNameSpan
                    $hover={hover[type]}
                    $active={currentPage === type}
                >
                    {type === 'profile' ? (
                        <>
                            <S.ProfileIcon src={myPageImage} />
                        </>
                    ) : (
                        iconName
                    )}
                </S.IconNameSpan>
            </S.IconButton>
            {bubbleOpen && !isMobileOrTablet && (
                <Bubble closeBubble={closeBubble} />
            )}
            {modal1Open && <Modal1 closeModal1={closeModal1} />}
            {modal2Open && <Modal2 goPath={path} closeModal2={closeModal2} />}
        </>
    );
};

export const ContestBtn = props => (
    <GenericIconButton type="contest" {...props} />
);
export const ContestListBtn = props => (
    <GenericIconButton type="contestList" {...props} />
);
export const ProfileBtn = props => (
    <GenericIconButton type="profile" {...props} />
);
export const LoginBtn = props => <GenericIconButton type="login" {...props} />;
