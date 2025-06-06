import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import TeamBox from '../TeamBox/TeamBox';
import DeleteModal from '../../features/modal/DeleteModal';
import {
    getMyInfo,
    getMyParticipated,
    getMyRecruiting,
    getMyApplied,
} from '../../service/profile_service';
import SelectPortfolio from '../../features/modal/SelectPortfolio';
import {
    getAllPortfolio,
    deletePortfolio,
    getExistPortfolio,
    deleteExistPortfolio,
} from '../../service/portfolio_service';
import MetaTag from '../../components/common/MetaTag/MetaTag';

const MAX_PORTFOLIOS = 3;

const ProfilePage = () => {
    const [data, setProfileData] = useState();
    const authenticated = localStorage.getItem('accessToken');
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);
    const [postContent1, setPostContent1] = useState();
    const [postContent2, setPostContent2] = useState();
    const [postContent3, setPostContent3] = useState();
    const [showModal, setShowModal] = useState(false);
    const [fileDetails, setFileDetails] = useState({});
    const [notionDetails, setNotionDetails] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedPortfolioId, setSelectedPortfolioId] = useState(null);
    const [selectedPortfolioName, setSelectedPortfolioName] = useState('');
    const [selectedPortfolioType, setSelectedPortfolioType] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [portfolioExists, setPortfolioExists] = useState(false);
    const [portfolioList, setPortfolioList] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate(`/`);
        }
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
        getMyRecruiting().then(response => {
            setPostContent1(response?.data?.content.slice(0, 2));
        });
        getMyApplied(1).then(response => {
            setPostContent2(response?.data?.content.slice(0, 2));
        });
        getMyParticipated(1, 2).then(response => {
            setPostContent3(response?.data?.content);
        });
    }, [isLoggedIn]);
    useEffect(() => {
        if (selectedPortfolioId && selectedPortfolioType) {
            fetchPortfolioDetailsByType(
                selectedPortfolioId,
                selectedPortfolioType,
            );
        }
    }, [selectedPortfolioId, selectedPortfolioType]);

    const fetchPortfolioDetailsByType = async (portfolioId, type) => {
        try {
            if (type === 'file' || type === 'hybrid') {
                const fileDetails = await getExistPortfolio(
                    portfolioId,
                    'file',
                );
                const fileUri = fileDetails?.data?.data?.fileUri || null;
                setFileDetails(prevState => ({
                    ...prevState,
                    [portfolioId]: fileUri,
                }));
            }

            if (type === 'notion' || type === 'hybrid') {
                const notionDetails = await getExistPortfolio(
                    portfolioId,
                    'notion',
                );
                const notionUri = notionDetails?.data?.data?.notionUri || null;
                setNotionDetails(prevState => ({
                    ...prevState,
                    [portfolioId]: notionUri,
                }));
            }
        } catch (error) {
            console.error('Error fetching portfolio details by type:', error);
        }
    };

    const fetchPortfolioDetails = async portfolioId => {
        await fetchPortfolioDetailsByType(portfolioId, 'file');
        await fetchPortfolioDetailsByType(portfolioId, 'notion');
    };

    useEffect(() => {
        const fetchPortfolios = async () => {
            setIsLoading(true);
            try {
                const response = await getAllPortfolio();
                const portfolios = response?.data?.data;
                if (portfolios && portfolios.length > 0) {
                    const isAnyRegistered = portfolios.some(
                        portfolio => portfolio.isRegistered,
                    );
                    setPortfolioExists(isAnyRegistered);
                    setPortfolioList(portfolios);
                    portfolios.forEach(async portfolio => {
                        if (portfolio.isExistedPortfolio) {
                            await fetchPortfolioDetails(portfolio.PortfolioId);
                        }
                    });
                } else {
                    setPortfolioExists(false);
                }
            } catch (error) {
                console.error('Error fetching portfolios:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    const openPortfolioModal = () => setShowModal(true);
    const closePortfolioModal = () => setShowModal(false);

    const handleDeletePortfolio = async (
        portfolioId,
        portfolioName,
        clickedType,
    ) => {
        try {
            // 타입 설정
            setSelectedPortfolioId(portfolioId);
            setSelectedPortfolioName(portfolioName);
            setSelectedPortfolioType(clickedType); // 클릭한 타입을 그대로 사용

            // 모달 열기
            setShowDeleteModal(true);
        } catch (error) {
            console.error('Error fetching portfolio details:', error);
        }
    };

    const extractFileName = fileUri => {
        if (fileUri) {
            const fileName = fileUri.split('/').pop();
            const nameAfterUnderscore = fileName.split('_').pop();
            return nameAfterUnderscore;
        }
        return '등록된 파일 없음';
    };
    const confirmDeleteByType = async () => {
        try {
            if (
                selectedPortfolioType === 'file' ||
                selectedPortfolioType === 'notion'
            ) {
                await deleteExistPortfolio(
                    selectedPortfolioId,
                    selectedPortfolioType,
                );

                // 파일 또는 노션만 삭제
                if (selectedPortfolioType === 'file') {
                    setFileDetails(prevDetails => {
                        const updatedDetails = { ...prevDetails };
                        updatedDetails[selectedPortfolioId] = null;
                        return updatedDetails;
                    });
                } else if (selectedPortfolioType === 'notion') {
                    setNotionDetails(prevDetails => {
                        const updatedDetails = { ...prevDetails };
                        updatedDetails[selectedPortfolioId] = null;
                        return updatedDetails;
                    });
                }

                // 상태 업데이트 후 파일과 노션의 존재 여부를 다시 체크
                const fileExists = fileDetails[selectedPortfolioId];
                const notionExists = notionDetails[selectedPortfolioId];

                // 포트폴리오 리스트에서 업데이트된 내용을 반영
                setPortfolioList(prevList =>
                    prevList.map(portfolio => {
                        if (portfolio.PortfolioId === selectedPortfolioId) {
                            return {
                                ...portfolio,
                                file: fileExists || null,
                                notion: notionExists || null,
                            };
                        }
                        return portfolio;
                    }),
                );

                // 남은 정보가 없으면 포트폴리오에서 제거하고 빈 상태 체크
                if (!fileExists && !notionExists) {
                    const updatedPortfolioList = portfolioList.filter(
                        portfolio =>
                            portfolio.PortfolioId !== selectedPortfolioId,
                    );
                    setPortfolioList(updatedPortfolioList);

                    // 빈 리스트일 경우 즉시 포트폴리오가 없다는 상태를 반영
                    if (updatedPortfolioList.length === 0) {
                        setPortfolioExists(false);
                    }
                }
            } else if (selectedPortfolioType === 'basic') {
                // 기본 포트폴리오 삭제 처리
                await deletePortfolio(selectedPortfolioId);
                const updatedPortfolioList = portfolioList.filter(
                    portfolio => portfolio.PortfolioId !== selectedPortfolioId,
                );
                setPortfolioList(updatedPortfolioList);

                // 빈 리스트일 경우 즉시 포트폴리오가 없다는 상태를 반영
                if (updatedPortfolioList.length === 0) {
                    setPortfolioExists(false);
                }
            }
        } catch (error) {
            console.error('Error deleting portfolio:', error);
        } finally {
            setShowDeleteModal(false);
        }
    };

    useEffect(() => {
        if (selectedPortfolioId) {
            const fileExists = fileDetails[selectedPortfolioId];
            const notionExists = notionDetails[selectedPortfolioId];

            setPortfolioList(prevList =>
                prevList.map(portfolio => {
                    if (portfolio.PortfolioId === selectedPortfolioId) {
                        return {
                            ...portfolio,
                            file: fileExists,
                            notion: notionExists,
                        };
                    }
                    return portfolio;
                }),
            );
        }
    }, [fileDetails, notionDetails, selectedPortfolioId]);

    const handleEditPortfolio = async PortfolioId => {
        const portfolioToEdit = portfolioList.find(
            portfolio => portfolio.PortfolioId === PortfolioId,
        );
        if (portfolioToEdit) {
            const isExistedPortfolio = portfolioToEdit.isExistedPortfolio;
            const editUrl = isExistedPortfolio
                ? `/profile/useportfolio/${PortfolioId}`
                : `/profile/makeportfolio/${PortfolioId}`;

            navigate(editUrl);
            const updatedPortfolio = await fetchPortfolioDetails(PortfolioId);
            setFileDetails(prevDetails => ({
                ...prevDetails,
                [PortfolioId]: updatedPortfolio.data,
            }));
            setNotionDetails(prevDetails => ({
                ...prevDetails,
                [PortfolioId]: updatedPortfolio.data,
            }));
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

    const DesktopProfile = ({ data }) => (
        <S.TopBox>
            <S.ProfileImage />
            <S.DetailBox>
                <S.NameWrapper>
                    <S.NameTitle>{data?.name}</S.NameTitle>
                    <Link to={'/myinfo'}>
                        <S.EditImage />
                    </Link>
                </S.NameWrapper>
                <S.MajorTitle>{data?.major}</S.MajorTitle>
            </S.DetailBox>
        </S.TopBox>
    );

    const MobileProfile = ({ data }) => (
        <S.TopBox>
            <S.MobileWrapper>
                <S.ProfileImage />
                <S.MobileInfo>
                    <S.NameTitle>{data?.name}</S.NameTitle>
                    <S.MajorTitle>{data?.major}</S.MajorTitle>
                </S.MobileInfo>
            </S.MobileWrapper>
            <Link to={'/myinfo'}>
                <S.EditImage />
            </Link>
        </S.TopBox>
    );

    const ProfileComponent = ({ data }) => {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 549);

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 549);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return isMobile ? (
            <MobileProfile data={data} />
        ) : (
            <DesktopProfile data={data} />
        );
    };
    return (
        <div style={{ paddingBottom: '10rem' }}>
            <MetaTag
                title="프로필페이지"
                description="내 정보를 확인해봐요."
                keywords="포트폴리오, 스크랩, 팀빌딩, 모집, 참여, 공모전"
                imgsrc="https://opengraph.b-cdn.net/production/images/5585fb04-c501-4717-8122-8c9d3d05f246.png?token=hOfHzJ7eKbz1nuru47epxsiWBHDGHpfIodgv5PB7b0Y&height=557&width=1200&expires=33266696940"
                url="https://gongjakso.xyz/contestList"
            />

            {/* 모바일 사이즈일 때 다른 레이아웃으로 구성 */}
            <ProfileComponent data={data} />
            <S.GlobalBox>
                <S.BoxDetail>
                    <S.SubContainer>
                        <S.SubTitle>나의 포트폴리오</S.SubTitle>

                        {portfolioList.flatMap(portfolio => {
                            const notionUri =
                                notionDetails[portfolio.PortfolioId];
                            const fileUri = fileDetails[portfolio.PortfolioId];

                            const components = [];
                            // isExisted가 true인 경우 데이터 타입별 처리
                            if (portfolio.isExistedPortfolio) {
                                if (notionUri) {
                                    components.push(
                                        <S.PortfolioContainer
                                            key={`notion-${portfolio.PortfolioId}`}
                                        >
                                            <S.PortfolioTitle>
                                                노션 링크 등록 중&nbsp;
                                                <S.LinkDetail>
                                                    {notionUri}
                                                </S.LinkDetail>
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
                                                            portfolio.PortfolioName,
                                                            'notion',
                                                        )
                                                    }
                                                />
                                            </S.PortfolioButtons>
                                        </S.PortfolioContainer>,
                                    );
                                }

                                if (fileUri) {
                                    components.push(
                                        <S.PortfolioContainer
                                            key={`pdf-${portfolio.PortfolioId}`}
                                        >
                                            <S.PortfolioTitle>
                                                PDF 파일 등록 중&nbsp;
                                                <S.LinkDetail>
                                                    {extractFileName(fileUri)}
                                                </S.LinkDetail>
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
                                                            portfolio.PortfolioName,
                                                            'file',
                                                        )
                                                    }
                                                />
                                            </S.PortfolioButtons>
                                        </S.PortfolioContainer>,
                                    );
                                }
                            } else {
                                components.push(
                                    <S.PortfolioContainer
                                        key={`portfolio-${portfolio.PortfolioId}`}
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
                                                        portfolio.PortfolioName,
                                                        'basic',
                                                    )
                                                }
                                            />
                                        </S.PortfolioButtons>
                                    </S.PortfolioContainer>,
                                );
                            }

                            return components;
                        }).length < MAX_PORTFOLIOS && (
                            <S.Plus onClick={openPortfolioModal} />
                        )}
                    </S.SubContainer>

                    {portfolioExists ? (
                        <S.PortfolioInfo>
                            {portfolioList
                                .flatMap(portfolio => {
                                    const notionUri =
                                        notionDetails[portfolio.PortfolioId];
                                    const fileUri =
                                        fileDetails[portfolio.PortfolioId];

                                    const components = [];

                                    if (portfolio.isExistedPortfolio) {
                                        if (notionUri) {
                                            components.push(
                                                <S.PortfolioContainer
                                                    key={`notion-${portfolio.PortfolioId}`}
                                                >
                                                    <S.PortfolioTitle>
                                                        노션 링크 등록 중&nbsp;
                                                        <S.LinkDetail>
                                                            {notionUri}
                                                        </S.LinkDetail>
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
                                                                    portfolio.PortfolioName,
                                                                    'notion',
                                                                )
                                                            }
                                                        />
                                                    </S.PortfolioButtons>
                                                </S.PortfolioContainer>,
                                            );
                                        }

                                        if (fileUri) {
                                            components.push(
                                                <S.PortfolioContainer
                                                    key={`pdf-${portfolio.PortfolioId}`}
                                                >
                                                    <S.PortfolioTitle>
                                                        PDF 파일 등록 중&nbsp;
                                                        <S.LinkDetail>
                                                            {extractFileName(
                                                                fileUri,
                                                            )}
                                                        </S.LinkDetail>
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
                                                                    portfolio.PortfolioName,
                                                                    'file',
                                                                )
                                                            }
                                                        />
                                                    </S.PortfolioButtons>
                                                </S.PortfolioContainer>,
                                            );
                                        }
                                    } else {
                                        components.push(
                                            <S.PortfolioContainer
                                                key={`portfolio-${portfolio.PortfolioId}`}
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
                                                                portfolio.PortfolioName,
                                                                'basic',
                                                            )
                                                        }
                                                    />
                                                </S.PortfolioButtons>
                                            </S.PortfolioContainer>,
                                        );
                                    }

                                    return components;
                                })
                                .slice(0, MAX_PORTFOLIOS)}
                        </S.PortfolioInfo>
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
                    <S.SubContainer>
                        <S.SubTitle>나의 모집 기록</S.SubTitle>
                    </S.SubContainer>
                    <S.SubTitleContainer>
                        {postContent1?.map(post => (
                            <TeamBox
                                key={post?.id}
                                showMoreDetail={true}
                                showWaitingJoin={false}
                                showSubBox={true}
                                postContent={post}
                                isMyParticipation={false}
                                postId={post?.id}
                            />
                        ))}
                    </S.SubTitleContainer>
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubContainer>
                        <S.SubTitle>
                            <span>나의 지원 기록</span>
                            <Link to="/appliedTeam">
                                <S.ArrowImage />
                            </Link>
                        </S.SubTitle>
                    </S.SubContainer>
                    <S.SubTitleContainer>
                        {postContent2?.map(post => (
                            <TeamBox
                                key={post?.id}
                                showMoreDetail={false}
                                showWaitingJoin={true}
                                showSubBox={true}
                                postContent={post}
                                isMyParticipation={false}
                            />
                        ))}
                    </S.SubTitleContainer>
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubContainer>
                        <S.SubTitle>
                            <span>나의 참여 기록</span>
                            <Link to="/participatedTeam">
                                <S.ArrowImage />
                            </Link>
                        </S.SubTitle>
                    </S.SubContainer>

                    <S.SubTitleContainer>
                        {postContent3?.map(post => (
                            <TeamBox
                                key={post?.id}
                                showMoreDetail={false}
                                borderColor={
                                    post?.postStatus !== 'ACTIVE'
                                        ? 'rgba(111, 111, 111, 1)'
                                        : 'rgba(0, 84, 255, 1)'
                                }
                                showWaitingJoin={false}
                                showSubBox={false}
                                postContent={post}
                                isMyParticipation={true}
                            />
                        ))}
                    </S.SubTitleContainer>
                </S.BoxDetail>
            </S.GlobalBox>
            <SelectPortfolio
                showModal={showModal}
                closePortfolioModal={closePortfolioModal}
            />
            <DeleteModal
                showModal={showDeleteModal}
                closeModal={() => setShowDeleteModal(false)}
                confirmDelete={confirmDeleteByType}
                title={selectedPortfolioName}
                type={selectedPortfolioType}
            />
        </div>
    );
};

export default ProfilePage;
