import React, { useState, useEffect } from 'react';
import * as S from './Buttons.styled';
import useCustomNavigate from '../../hooks/useNavigate';
import myPageImage from '../../assets/images/My_page.svg';
import Modal1 from '../../features/modal/LoginModal1';
import Modal2 from '../../features/modal/LoginModal2';
import { logout } from '../../service/auth_service';

const GenericIconButton = ({ type, hover, setHover, active, setActive }) => {
    const authenticated = localStorage.getItem('accessToken');
    const handleNavigate = useCustomNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [path, setPath] = useState();

    const getIconName = () => {
        const iconNames = {
            contest: '공모전 공고',
            project: '프로젝트 공고',
            teambuild: '팀빌딩',
            calendar: '캘린더',
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
            handleNavigate(`/${type}`);
        } else {
            setModal1Open(true);
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
            console.log('User is not logged in.');
        }
    };

    const closeModal1 = () => {
        setModal1Open(false);
    };
    const closeModal2 = () => {
        setModal2Open(false);
    };

    return (
        <>
            <S.IconButton
                type="button"
                name={type}
                $active={active === type}
                $type={active}
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
                    } else if (['project', 'contest'].includes(type)) {
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
                <S.IconNameSpan $hover={hover[type]} $active={active === type}>
                    {type === 'profile' ? (
                        <>
                            <S.ProfileIcon src={myPageImage} />
                            {iconName}
                        </>
                    ) : (
                        iconName
                    )}
                </S.IconNameSpan>
            </S.IconButton>
            {modal1Open && <Modal1 closeModal1={closeModal1} />}
            {modal2Open && <Modal2 goPath={path} closeModal2={closeModal2} />}
        </>
    );
};

export const ContestBtn = props => (
    <GenericIconButton type="contest" {...props} />
);
export const ProjectBtn = props => (
    <GenericIconButton type="project" {...props} />
);
export const TeambuildBtn = props => (
    <GenericIconButton type="teambuild" {...props} />
);
export const CalendarBtn = props => (
    <GenericIconButton type="calendar" {...props} />
);
export const ProfileBtn = props => (
    <GenericIconButton type="profile" {...props} />
);
export const LoginBtn = props => <GenericIconButton type="login" {...props} />;
