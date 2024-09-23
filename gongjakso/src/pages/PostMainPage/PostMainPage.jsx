import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as S from './PostMainPage.Styled';
import SwiperBanner from '../../components/SwiperBanner/SwiperBanner';
import Pagination from '../../components/Pagination/Pagination';
import { SelectInput } from '../../components/common/Input/Input';
import { getProjectBanner } from '../../service/banner_service';
import TopButton from '../HomePage/TopButton';

import Multilevel from '../../components/common/Input/Multilevel';
import { getContestPosts, getProjectPosts } from '../../service/post_service';
import TeamBox from '../TeamBox/TeamBox';
import Modal2 from '../../features/modal/LoginModal2';
import Modal1 from '../../features/modal/LoginModal1';
import NoContents from '../../features/NoContents/NoContents';

const PostMainPage = () => {
    const authenticated = localStorage.getItem('accessToken');
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);

    const location = useLocation();
    const isProject = location.pathname.includes('/project');
    const isColor = isProject ? '#E789FF' : '#00A3FF';
    const [contestPosts, setContestPosts] = useState();
    const [projectPosts, setProjectPosts] = useState();
    // const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const [banners, setBanners] = useState([]);
    const [links, setLinks] = useState([]);
    const [contestTotalPage, setContestTotalPage] = useState();
    const [sortBy, setSortBy] = useState('createdAt');

    const [selectedLocalData, setSelectedLocalData] = useState('');
    const [selectedCityData, setSelectedCityData] = useState('');
    const [selectedTownData, setSelectedTownData] = useState('');
    const [selectedStack, setSelectedStack] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');

    const [modal1Open, setModal1Open] = useState(false);

    const encodeSpaces = searchKeyword => {
        return searchKeyword?.replace(/ /g, '%20');
    };
    // 띄어쓰기 인코딩 하는 부분

    useEffect(() => {
        setPage(1);
    }, [isProject, sortBy, selectedLocalData]);

    useEffect(() => {
        setSortBy('createdAt');
        setSelectedTownData('');
        setSelectedCityData('');
        setSearchKeyword('');
    }, [isProject]);

    const {
        register,
        handleSubmit,
        setFocus,
        setValue,
        setError,
        clearErrors,
        control,
        trigger,
        formState: { errors, isSubmitted },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {},
    });

    const options = ['전체', '인기순', '최신순'];
    const stackOptions = [
        '사용 언어',
        'REACT',
        'TYPESCRIPT',
        'JAVASCRIPT',
        'NEXTJS',
        'NODEJS',
        'JAVA',
        'SPRING',
        'KOTLIN',
        'SWIFT',
        'FLUTTER',
        'ETC',
    ];

    const ClickSearchBtn = () => {
        loadContestPosts(
            page,
            sortBy,
            selectedCityData,
            selectedTownData,
            searchKeyword,
        );
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            ClickSearchBtn();
        }
    };

    useEffect(() => {
        getProjectBanner().then(res => {
            const imageUrls = res?.data?.map(item => item?.imageUrl);
            setBanners(imageUrls);
            const LinkUrls = res?.data?.map(item => item?.linkUrl);
            setLinks(LinkUrls);
        });
        loadContestPosts(
            page,
            sortBy,
            selectedCityData,
            selectedTownData,
            searchKeyword,
        );
    }, [
        page,
        sortBy,
        selectedStack,
        selectedCityData,
        selectedTownData,
        isProject,
    ]);

    const loadContestPosts = (
        page,
        sort,
        selectedCityData,
        selectedTownData,
        searchKeyword,
    ) => {
        getContestPosts(
            page,
            sort,
            selectedCityData,
            selectedTownData,
            encodeSpaces(searchKeyword),
        ).then(res => {
            setContestPosts(res?.data?.content);
            setContestTotalPage(res?.data?.totalPages);
        });
    };

    const handleSelectChange = selectedValue => {
        //선택한 정렬 방식으로 반환
        if (selectedValue === '인기순') {
            setSortBy('scrap');
        } else if (selectedValue === '최신순') {
            setSortBy('createdAt');
        } else {
            setSortBy(null);
        }
    };

    const handleSelectStack = selectedStack => {
        //기술 스택
        setSelectedStack(selectedStack);
    };

    const handleSelectedDataCity = data => {
        //선택한 지역 반환
        if (data === '지역') {
            setSelectedCityData('');
        } else {
            setSelectedCityData(data);
        }
    };
    const handleSelectedDataTown = data => {
        //선택한 지역 반환
        setSelectedTownData(data);
    };

    const showModal1 = () => {
        setModal1Open(true);
    };

    const closeModal1 = () => {
        setModal1Open(false);
    };

    return (
        <>
            <TopButton />
            <S.MainContent>
                <S.Div>
                    <SwiperBanner BannerImg={banners} BannerLink={links} />
                </S.Div>
                <S.Search>
                    <S.SearchBar>
                        <S.Searchmark>
                            <S.Searchicon onClick={ClickSearchBtn} />
                        </S.Searchmark>
                        <S.SearchUsernameInput
                            type="text"
                            placeholder={
                                isProject
                                    ? '찾고 있는 프로젝트가 있나요? 입력 후 Enter/돋보기를 클릭!'
                                    : '찾고 있는 공모전이 있나요? 입력 후 Enter/돋보기를 클릭!'
                            }
                            value={searchKeyword}
                            onChange={e => setSearchKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </S.SearchBar>
                </S.Search>
                <S.Fillterbox>
                    <Multilevel
                        isPost={false}
                        onItemSelectedCity={handleSelectedDataCity}
                        onItemSelectedTown={handleSelectedDataTown}
                    />

                    <S.Fillter1>
                        <SelectInput
                            id={'sortBy'}
                            error={errors.sortBy}
                            selectOptions={options}
                            placeholder={'정렬'}
                            register={register}
                            onChange={handleSelectChange}
                            scroll={false}
                            case={true}
                        />
                    </S.Fillter1>
                </S.Fillterbox>
                {isProject ? ( //여기는 프로젝트
                    <S.PostContent>
                        {projectPosts && projectPosts.length > 0 ? (
                            projectPosts.map(project => (
                                <React.Fragment key={project?.postId}>
                                    {isLoggedIn ? (
                                        <Link
                                            to={`/project/${project?.postId}`}
                                        >
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(231, 137, 255, 0.5)'
                                                }
                                                showMoreDetail={false}
                                                postContent={project}
                                                isMyParticipation={null}
                                            />
                                        </Link>
                                    ) : (
                                        <button onClick={() => showModal1()}>
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(231, 137, 255, 0.5)'
                                                }
                                                showMoreDetail={false}
                                                postContent={project}
                                                isMyParticipation={null}
                                            />
                                        </button>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <NoContents
                                mainTxt={'찾으시는 내용을 발견하지 못했어요!'}
                                subTxt={'다른 내용을 검색해보세요'}
                            />
                        )}
                    </S.PostContent>
                ) : (
                    //아래는 공모전
                    <S.PostContent>
                        {contestPosts && contestPosts.length > 0 ? (
                            contestPosts.map(contest => (
                                <React.Fragment key={contest?.id}>
                                    {isLoggedIn ? (
                                        <Link
                                            key={contest?.id}
                                            to={`/contest/${contest?.contest_id}/team/${contest?.id}`}
                                        >
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(0, 163, 255, 0.5)'
                                                }
                                                showMoreDetail={false}
                                                postContent={contest}
                                                isMyParticipation={null}
                                            />
                                        </Link>
                                    ) : (
                                        <button onClick={() => showModal1()}>
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(0, 163, 255, 0.5)'
                                                }
                                                showMoreDetail={false}
                                                postContent={contest}
                                                isMyParticipation={null}
                                            />
                                        </button>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <NoContents
                                mainTxt={'찾으시는 내용을 발견하지 못했어요!'}
                                subTxt={'다른 내용을 검색해보세요'}
                            />
                        )}
                    </S.PostContent>
                )}
                <Pagination
                    total={contestTotalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadContestPosts}
                />
            </S.MainContent>
            {modal1Open && <Modal1 closeModal1={closeModal1} />}
        </>
    );
};

export default PostMainPage;
