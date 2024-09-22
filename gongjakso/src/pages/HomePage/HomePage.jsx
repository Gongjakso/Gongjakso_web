import React, { useState, useEffect } from 'react';
import * as S from './HomePage.Styled';
import useCustomNavigate from '../../hooks/useNavigate';
import calendarImage from '../../assets/images/calendar.png';
import Modal1 from '../../features/modal/LoginModal1';
import Modal2 from '../../features/modal/LoginModal2';
import SignUpModal from '../../features/modal/SignUpModal';
import TopButton from '../../pages/HomePage/TopButton';
import Banner from './Banner';
import { getMyInfo } from '../../service/auth_service';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const authenticated = localStorage.getItem('accessToken');
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);
    const [modal2Open, setModal2Open] = useState(false);
    const [SignUpModalOpen, setSignUpModalOpen] = useState(false);
    const navigate = useNavigate();
    const [myName, setMyName] = useState();

    useEffect(() => {
        if (isLoggedIn) {
            getMyInfo().then(res => {
                setMyName(res?.data?.name);
                if (!res.data.job) {
                    setSignUpModalOpen(true);
                } else {
                    setSignUpModalOpen(false);
                }
            });
        }
    }, [isLoggedIn]);

    const handleButtonClick = () => {
        if (isLoggedIn) {
            navigate('/contest'); // 로그인 상태일 때 공모전 공고 페이지로 이동
        } else {
            navigate('/login'); // 비로그인 상태일 때 로그인 페이지로 이동
        }
    };

    const showModal2 = () => {
        setModal2Open(true);
    };

    const closeModal2 = () => {
        setModal2Open(false);
    };

    const closeSignUpModal = () => {
        setSignUpModalOpen(false);
    };

    return (
        <>
            <TopButton />
            <S.HomeContent className="home-section">
                <S.TitleWrapper>
                    <S.Title>공모전 팀빌딩을 위한 단 하나의 플랫폼</S.Title>
                    <S.SubTitle>
                        공작소와 함께 공모전 팀빌딩을 시작해보세요
                    </S.SubTitle>
                </S.TitleWrapper>
                <S.Section>
                    {' '}
                    <S.LoginBtn onClick={handleButtonClick}>
                        {isLoggedIn
                            ? '공모전 공고 바로가기'
                            : '공작소 로그인하러가기'}
                        <S.Arrow />
                    </S.LoginBtn>
                    <S.PageImg />
                </S.Section>
                <S.TitleWrapper1>
                    <S.Title1>공모전 팀원이 없어도</S.Title1>
                    <S.SubTitle>
                        아직 혼자라도 금방 팀원을 구할 수 있어요
                    </S.SubTitle>
                </S.TitleWrapper1>
                <S.Section1>
                    <S.TextContainer>
                        <S.Bubble>
                            나가고 싶은 공모전이 있는데, 팀원이 없어요
                        </S.Bubble>
                        <S.Text>
                            공작소에서 공모전을 선택하고, <br /> 팀 모집을
                            시작해보세요!
                        </S.Text>
                        <S.TeamImg />
                    </S.TextContainer>
                    <S.ContestImg />
                </S.Section1>
                <S.TitleWrapper1>
                    <S.Title1>원하는 분야의 팀원을 바로</S.Title1>
                    <S.SubTitle>
                        필요한 팀원을 모집하거나 나에게 맞는 팀에 지원할 수
                        있어요
                    </S.SubTitle>
                </S.TitleWrapper1>
                <S.Section2>
                    <S.ContestDetail />
                    <S.TextContainer1>
                        <S.RightBubble>
                            팀원을 거의 다 모았는데, 딱 1명이 부족해요
                        </S.RightBubble>
                        <S.Bubble1>
                            개발자를 구하는 공모전 팀을 찾고 싶어요
                        </S.Bubble1>
                        <S.Text1>
                            공작소에서는 모집 인원과 파트를 선택할 수 있어요!
                            <br />
                            팀장은 필요한 팀원을 바로 찾아보고,
                            <br /> 팀원은 원하는 팀을 알아볼 수 있어요
                        </S.Text1>
                        <S.TeamImg2 />
                    </S.TextContainer1>
                </S.Section2>
                <S.TitleWrapper1>
                    <S.Title1>포트폴리오까지 한번에</S.Title1>
                    <S.SubTitle>
                        나만의 포트폴리오를 만들어 팀빌딩 확률을 높일 수 있어요
                    </S.SubTitle>
                </S.TitleWrapper1>
                <S.Section3>
                    <S.TextContainer2>
                        <S.Bubble2>
                            팀에 맞는 역량을 가진 팀원이 필요해요
                        </S.Bubble2>
                        <S.RightBubble1>
                            아직 포트폴리오가 없어 지원하기 어려워요
                        </S.RightBubble1>
                        <S.PortfolioImg />
                        <S.Text2>
                            공작소에서는 지원 시 포트폴리오를 첨부할 수 있어요!
                            <br />
                            아직 포트폴리오가 없다면, 공작소에서 도와드릴게요
                        </S.Text2>
                    </S.TextContainer2>
                    <S.PortfolioDetail />
                </S.Section3>
            </S.HomeContent>
            {modal2Open && (
                <Modal2 goPath={'/home'} closeModal2={closeModal2} />
            )}
            {SignUpModalOpen && (
                <SignUpModal
                    closeSignUpModal={closeSignUpModal}
                    name={myName}
                />
            )}
        </>
    );
};

export default HomePage;
