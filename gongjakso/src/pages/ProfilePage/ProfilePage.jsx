import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import TeamBox from '../TeamBox/TeamBox';

import {
    getMyInfo,
    getMyParticipated,
    getMyRecruiting,
    getMyApplied,
} from '../../service/profile_service';
import SelectPortfolio from '../../features/modal/SelectPortfolio';
import {
    getAllPortfolio,
    deletePortfolio, // Assuming you have a service for deleting portfolios
    updatePortfolio, // Assuming you have a service for updating portfolios
} from '../../service/portfolio_service';

const MAX_PORTFOLIOS = 3;

const ProfilePage = () => {
    const [data, setProfileData] = useState(); // 프로필 내용
    const [postContent1, setPostContent1] = useState();
    const [postContent2, setPostContent2] = useState();
    const [postContent3, setPostContent3] = useState();
    const [showModal, setShowModal] = useState(false); // 모달 상태
    const navigate = useNavigate();
    const [portfolioExists, setPortfolioExists] = useState(false);
    const [portfolioList, setPortfolioList] = useState([]);

    const mockRecruitingTeams = [
        {
            postId: 1,
            postType: true,
            title: '프로젝트 팀 모집',
            max_person: 5,
            current_person: 3,
            startDate: '2024-01-01',
            endDate: '2024-12-31',
        },
        {
            postId: 2,
            postType: false,
            title: '공모전 팀 모집',
            max_person: 10,
            current_person: 8,
            startDate: '2024-02-01',
            endDate: '2024-11-30',
        },
    ];

    const mockAppliedTeams = [
        {
            postId: 3,
            postType: true,
            title: '지원한 프로젝트',
            max_person: 7,
            current_person: 5,
            startDate: '2024-03-01',
            endDate: '2024-10-31',
        },
    ];

    const mockParticipatedTeams = [
        {
            postId: 4,
            postType: false,
            postStatus: 'ACTIVE',
            title: '참여한 공모전',
            max_person: 4,
            current_person: 4,
            startDate: '2024-01-01',
            endDate: '2024-12-31',
        },
    ];

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });

        // 서버에서 받아온 데이터를 모방하여 설정
        setPostContent1(mockRecruitingTeams);
        setPostContent2(mockAppliedTeams);
        setPostContent3(mockParticipatedTeams);

        /*
        getMyRecruiting().then(response => {
            setPostContent1(response?.data.slice(0, 2));
        });
        getMyApplied(1, 2).then(response => {
            setPostContent2(response?.data.content);
        });
        getMyParticipated(1, 2).then(response => {
            setPostContent3(response?.data.participationLists);
        });
*/
    }, []);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await getAllPortfolio();
                const portfolios = response?.data?.data;

                if (portfolios && portfolios.length > 0) {
                    setPortfolioExists(true);
                    setPortfolioList(portfolios); // 전체 포트폴리오 목록 저장
                } else {
                    setPortfolioExists(false);
                }
            } catch (error) {
                console.error('Error fetching portfolios:', error);
            }
        };

        fetchPortfolios();
    }, []);

    const openPortfolioModal = () => setShowModal(true); // 모달 열기
    const closePortfolioModal = () => setShowModal(false); // 모달 닫기

    const handleDeletePortfolio = async portfolioId => {
        try {
            // Delete the portfolio from the server
            await deletePortfolio(portfolioId);

            setPortfolioList(prevPortfolios =>
                prevPortfolios.filter(
                    portfolio => portfolio.PortfolioId !== portfolioId,
                ),
            );

            if (portfolioList.length === 1) {
                setPortfolioExists(false);
            }
        } catch (error) {
            console.error('Error deleting portfolio:', error);
        }
    };

    const handleEditPortfolio = portfolioId => {
        // Find the portfolio to be edited
        const portfolioToEdit = portfolioList.find(
            portfolio => portfolio.PortfolioId === portfolioId,
        );
        console.log(portfolioId);

        console.log(portfolioToEdit);
        if (portfolioToEdit) {
            navigate(`/profile/makeportfolio/${portfolioId}`);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                overflow-y: hidden;
                width: 100%;`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }

        return () => {
            document.body.style.cssText = '';
        };
    }, [showModal]);

    return (
        <div style={{ paddingBottom: '10rem' }}>
            <S.TopBox>
                <S.InfoBox>
                    <S.DetailBox>
                        <S.NameTitle>{data?.name}</S.NameTitle>
                        <Link to={'/myinfo'}>
                            <S.EditImage />
                        </Link>
                    </S.DetailBox>
                    <S.MajorTitle>{data?.major}</S.MajorTitle>
                </S.InfoBox>
                <S.ProfileImage />
                {/* <Link to="/teamPortfolio">
                    <S.PortfolioBox>나의 포트폴리오</S.PortfolioBox>
                </Link> */}
            </S.TopBox>
            <S.GlobalBox>
                <S.BoxDetail>
                    <S.SubTitleContainer>
                        <S.SubTitle>나의 포트폴리오</S.SubTitle>
                        {portfolioList.length < MAX_PORTFOLIOS && (
                            <S.Plus onClick={openPortfolioModal} />
                        )}
                    </S.SubTitleContainer>
                    {portfolioExists ? (
                        <S.PortfolioList>
                            {portfolioList.map(portfolio => (
                                <S.PortfolioContainer
                                    key={portfolio.PortfolioId}
                                >
                                    <S.PortfolioTitle>
                                        {portfolio.PortfolioName}
                                    </S.PortfolioTitle>
                                    <S.PortfolioButtons>
                                        <S.EditPortfolioButton
                                            onClick={() =>
                                                handleEditPortfolio(
                                                    portfolio.PortfolioId,
                                                )
                                            }
                                        />
                                        <S.DeletePortfolioButton
                                            onClick={() =>
                                                handleDeletePortfolio(
                                                    portfolio.PortfolioId,
                                                )
                                            }
                                        />
                                    </S.PortfolioButtons>
                                </S.PortfolioContainer>
                            ))}
                        </S.PortfolioList>
                    ) : (
                        <S.NoPortfolio>
                            아직 포트폴리오가 없어요! <br />
                            포트폴리오를 채워 팀빌딩 확률을 높여보세요
                            <S.MakePortfolioBtn onClick={openPortfolioModal}>
                                포트폴리오 만들기
                            </S.MakePortfolioBtn>
                        </S.NoPortfolio>
                    )}
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
                    {postContent1?.map(post => (
                        <TeamBox
                            key={post?.postId}
                            showMoreDetail={true}
                            showWaitingJoin={false}
                            showSubBox={true}
                            postContent={post}
                            isMyParticipation={false}
                            postId={post?.postId}
                        />
                    ))}
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubTitle>
                        <span>내가 지원한 팀</span>
                        <Link to="/appliedTeam">
                            <S.ArrowImage />
                        </Link>
                    </S.SubTitle>
                    {postContent2?.map(post => (
                        <TeamBox
                            key={post?.postId}
                            showMoreDetail={false}
                            showWaitingJoin={true}
                            showSubBox={true}
                            borderColor={
                                post.postType === true
                                    ? 'rgba(231, 137, 255, 0.5)'
                                    : 'rgba(0, 163, 255, 0.5)'
                            }
                            postContent={post}
                            isMyParticipation={false}
                        />
                    ))}
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubTitle>
                        <span>내가 참여한 공모전</span>
                        <Link to="/participatedTeam">
                            <S.ArrowImage />
                        </Link>
                    </S.SubTitle>
                    {postContent3?.map(post => (
                        <TeamBox
                            key={post?.postId}
                            showMoreDetail={false}
                            borderColor={
                                post?.postStatus !== 'ACTIVE'
                                    ? 'rgba(111, 111, 111, 1)'
                                    : post.postType === true
                                      ? 'rgba(231, 137, 255, 0.5)'
                                      : 'rgba(0, 163, 255, 0.5)'
                            }
                            showWaitingJoin={false}
                            showSubBox={false}
                            postContent={post}
                            isMyParticipation={true}
                        />
                    ))}
                </S.BoxDetail>
            </S.GlobalBox>

            <SelectPortfolio
                showModal={showModal}
                closePortfolioModal={closePortfolioModal}
            />
        </div>
    );
};

export default ProfilePage;
