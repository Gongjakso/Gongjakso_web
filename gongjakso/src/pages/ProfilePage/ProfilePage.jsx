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

const MAX_PORTFOLIOS = 3;

const ProfilePage = () => {
    const [data, setProfileData] = useState();
    const [postContent1, setPostContent1] = useState();
    const [postContent2, setPostContent2] = useState();
    const [postContent3, setPostContent3] = useState();
    const [showModal, setShowModal] = useState(false);
    const [portfolioDetails, setPortfolioDetails] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedPortfolioId, setSelectedPortfolioId] = useState(null);
    const [selectedPortfolioName, setSelectedPortfolioName] = useState('');
    const [selectedPortfolioType, setSelectedPortfolioType] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [portfolioExists, setPortfolioExists] = useState(false);
    const [portfolioList, setPortfolioList] = useState([]);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
        getMyRecruiting().then(response => {
            setPostContent1(response?.data?.content.slice(0, 2));
        });
        getMyApplied(1, 2).then(response => {
            setPostContent2(response?.data?.content);
        });
        getMyParticipated(1, 2).then(response => {
            setPostContent3(response?.data?.content);
        });
    }, []);
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
            const details = await getExistPortfolio(portfolioId, type);
            if (details && details.data) {
                const dataType =
                    type === 'file'
                        ? details.data.data.fileUri
                        : details.data.data.notionUri;

                setPortfolioDetails(prevState => ({
                    ...prevState,
                    [portfolioId]: {
                        ...prevState[portfolioId],
                        [type]: dataType,
                    },
                }));
            }
        } catch (error) {
            console.error('Error fetching portfolio details by type:', error);
        }
    };
    const fetchPortfolioDetails = async portfolioId => {
        // 'hybrid' 대신 각각 file과 notion으로 따로 조회
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
                    console.log(portfolios);
                    portfolios.forEach(async portfolio => {
                        if (portfolio.isExistedPortfolio) {
                            try {
                                const details = fetchPortfolioDetails(
                                    portfolio.PortfolioId,
                                );

                                if (details && details.data) {
                                    const { fileUri, notionUri } = details.data;

                                    if (fileUri && notionUri) {
                                        setPortfolioDetails(prevState => ({
                                            ...prevState,
                                            [portfolio.PortfolioId]: {
                                                ...prevState[
                                                    portfolio.PortfolioId
                                                ],
                                                hybrid: details.data,
                                            },
                                        }));
                                    } else if (fileUri) {
                                        setPortfolioDetails(prevState => ({
                                            ...prevState,
                                            [portfolio.PortfolioId]: {
                                                ...prevState[
                                                    portfolio.PortfolioId
                                                ],
                                                file: fileUri,
                                            },
                                        }));
                                    } else if (notionUri) {
                                        setPortfolioDetails(prevState => ({
                                            ...prevState,
                                            [portfolio.PortfolioId]: {
                                                ...prevState[
                                                    portfolio.PortfolioId
                                                ],
                                                notion: notionUri,
                                            },
                                        }));
                                    }
                                }
                            } catch (error) {
                                console.error(
                                    'Error fetching portfolio details:',
                                    error,
                                );
                            }
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

    const handleDeletePortfolio = (portfolioId, portfolioName, type) => {
        setSelectedPortfolioId(portfolioId);
        setSelectedPortfolioName(portfolioName);
        setSelectedPortfolioType(type);
        setShowDeleteModal(true);
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
            if (!selectedPortfolioType) {
                await deletePortfolio(selectedPortfolioId);
            } else {
                await deleteExistPortfolio(
                    selectedPortfolioId,
                    selectedPortfolioType,
                );
            }

            setPortfolioList(prevPortfolios =>
                prevPortfolios.filter(
                    portfolio => portfolio.PortfolioId !== selectedPortfolioId,
                ),
            );
        } catch (error) {
            console.error('Error deleting portfolio:', error);
        } finally {
            setShowDeleteModal(false);
        }
    };
    const handleEditPortfolio = async portfolioId => {
        const portfolioToEdit = portfolioList.find(
            portfolio => portfolio.PortfolioId === portfolioId,
        );
        if (portfolioToEdit) {
            const isExistedPortfolio = portfolioToEdit.isExistedPortfolio;
            const editUrl = isExistedPortfolio
                ? `/profile/useportfolio/${portfolioId}`
                : `/profile/makeportfolio/${portfolioId}`;

            navigate(editUrl);

            if (isExistedPortfolio) {
                let portfolioType = '';

                if (portfolioToEdit.fileUri && portfolioToEdit.notionUri) {
                    portfolioType = 'hybrid';
                } else if (portfolioToEdit.fileUri) {
                    portfolioType = 'file';
                } else if (portfolioToEdit.notionUri) {
                    portfolioType = 'notion';
                }

                if (portfolioType) {
                    const updatedPortfolio = await getExistPortfolio(
                        portfolioId,
                        portfolioType,
                    );

                    setPortfolioDetails(prevDetails => ({
                        ...prevDetails,
                        [portfolioId]: updatedPortfolio.data,
                    }));
                } else {
                    console.error(
                        'Portfolio type is undefined, skipping API call.',
                    );
                }
            }
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
            </S.TopBox>
            <S.GlobalBox>
                <S.BoxDetail>
                    <S.SubTitleContainer>
                        <S.SubTitle>나의 포트폴리오</S.SubTitle>

                        {portfolioList.flatMap(portfolio => {
                            const notionUri =
                                portfolioDetails[portfolio.PortfolioId]?.notion;
                            const fileUri =
                                portfolioDetails[portfolio.PortfolioId]?.file;

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
                    </S.SubTitleContainer>

                    {portfolioExists ? (
                        <S.PortfolioInfo>
                            {portfolioList
                                .flatMap(portfolio => {
                                    const notionUri =
                                        portfolioDetails[portfolio.PortfolioId]
                                            ?.notion;
                                    const fileUri =
                                        portfolioDetails[portfolio.PortfolioId]
                                            ?.file;

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
                    <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
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
                                    : 'rgba(0, 84, 255, 1)'
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
            <DeleteModal
                showModal={showDeleteModal}
                closeModal={() => setShowDeleteModal(false)}
                confirmDelete={confirmDeleteByType}
                title={selectedPortfolioName}
            />
        </div>
    );
};

export default ProfilePage;
