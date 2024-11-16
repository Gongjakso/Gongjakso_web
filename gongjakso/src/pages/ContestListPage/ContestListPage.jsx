import React, { useEffect, useState } from 'react';
import * as S from '../PostMainPage/PostMainPage.Styled';
import TopButton from '../HomePage/TopButton';
import SwiperBanner from '../../components/SwiperBanner/SwiperBanner';
import { getProjectBanner } from '../../service/banner_service';
import { useForm } from 'react-hook-form';
import NoContents from '../../features/NoContents/NoContents';
import { Link } from 'react-router-dom';
import { SelectInput } from '../../components/common/Input/Input';
import ContestListBox from '../ContestListBox/ContestListBox';
import Pagination from '../../components/Pagination/Pagination';
import { getContestList } from '../../service/post_service';
import Modal1 from '../../features/modal/LoginModal1';
import MetaTag from '../../components/common/MetaTag/MetaTag';

const ContestListPage = () => {
    const [banners, setBanners] = useState([]);
    const [links, setLinks] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortBy, setSortBy] = useState('createdAt');

    const options = ['전체', '최신순', '조회순'];

    const [modal1Open, setModal1Open] = useState(false);

    const authenticated = localStorage.getItem('accessToken');
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);

    const [page, setPage] = useState(1);
    const [word, setWord] = useState();
    const [contestListTotalPage, setContestListTotalPage] = useState();

    const [contestListPosts, setContestListPosts] = useState();

    useEffect(() => {
        setPage(1);
    }, [sortBy]);

    useEffect(() => {
        getProjectBanner().then(res => {
            const imageUrls = res?.data?.map(item => item?.imageUrl);
            setBanners(imageUrls);
            const LinkUrls = res?.data?.map(item => item?.linkUrl);
            setLinks(LinkUrls);
        });
        loadContestList(page, searchKeyword, sortBy);
    }, [page, sortBy]);

    const loadContestList = (page, searchKeyword, sort) => {
        if (searchKeyword) {
            getContestList(page, searchKeyword, sort).then(res => {
                setContestListPosts(res?.data.contestList);
                setContestListTotalPage(res?.data.totalPages);
            });
        } else {
            getContestList(page, '', sortBy).then(res => {
                setContestListPosts(res?.data.contestList);
                setContestListTotalPage(res?.data.totalPages);
            });
        }
    };

    const ClickSearchBtn = () => {
        getContestList(page, searchKeyword, sortBy).then(res => {
            setContestListPosts(res?.data.contestList);
            setContestListTotalPage(res?.data.totalPages);
        });
    };

    const handleKeyDown = event => {
        setPage(1);
        if (event.key === 'Enter') {
            ClickSearchBtn();
        }
    };

    const showModal1 = () => {
        setModal1Open(true);
    };

    const closeModal1 = () => {
        setModal1Open(false);
    };

    const {
        register,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {},
    });

    const handleSelectChange = selectedValue => {
        if (selectedValue === '조회순') {
            setSortBy('VIEW');
        } else if (selectedValue === '최신순') {
            setSortBy('createdAt');
        } else {
            setSortBy('createdAt');
        }
    };

    return (
        <>
            <MetaTag
                title="공모전리스트"
                description="다양한 공모전에 참여해보세요."
                keywords="공모전, 참여, 팀빌딩, 기획, 디자인, 개발, IT"
                imgsrc="https://opengraph.b-cdn.net/production/images/5585fb04-c501-4717-8122-8c9d3d05f246.png?token=hOfHzJ7eKbz1nuru47epxsiWBHDGHpfIodgv5PB7b0Y&height=557&width=1200&expires=33266696940"
                url="https://gongjakso.xyz/contestList"
            />
            <TopButton />
            <S.MainContent>
                <S.Div>
                    <SwiperBanner BannerImg={banners} BannerLink={links} />
                </S.Div>
                <S.Search>
                    <S.SearchBar>
                        <S.SearchUsernameInput
                            type="text"
                            placeholder={
                                '찾고 있는 공모전이 있나요? 입력 후 Enter/돋보기를 클릭!'
                            }
                            value={searchKeyword}
                            onChange={e => setSearchKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <S.Searchmark>
                            <S.Searchicon onClick={ClickSearchBtn} />
                        </S.Searchmark>
                    </S.SearchBar>
                </S.Search>
                <S.Fillterbox1>
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
                </S.Fillterbox1>
                <S.ContestContent>
                    {contestListPosts && contestListPosts.length > 0 ? (
                        contestListPosts.map(contest => (
                            <React.Fragment key={contest?.id}>
                                {isLoggedIn ? (
                                    <Link
                                        to={`/contestList/${contest?.id}`}
                                        state={{ contestData: contest }}
                                    >
                                        <ContestListBox
                                            contestTitle={contest.title} // Pass individual props
                                            image={contest.imgUrl}
                                            contestId={contest.id}
                                            remainDate={contest.dayState}
                                            company={contest.institution}
                                        />
                                    </Link>
                                ) : (
                                    <button onClick={() => showModal1()}>
                                        <ContestListBox
                                            contestTitle={contest.title}
                                            image={contest.imgUrl}
                                            contestId={contest.id}
                                            remainDate={contest.dayState}
                                            company={contest.institution}
                                        />
                                    </button>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <S.PostContent>
                            <NoContents
                                mainTxt={'찾으시는 내용을 발견하지 못했어요!'}
                                subTxt={'다른 내용을 검색해보세요'}
                                link={
                                    'https://docs.google.com/forms/d/e/1FAIpQLScZnXxk-CobT5vltnuzdqM7-SWiqsrx7ILB5yW-4kE1D3xrfQ/viewform'
                                }
                                btnLabel={'찾고 있는 공모전 문의하기'}
                            />
                        </S.PostContent>
                    )}
                </S.ContestContent>
                <Pagination
                    total={contestListTotalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadContestList}
                />
            </S.MainContent>
            {modal1Open && <Modal1 closeModal1={closeModal1} />}
        </>
    );
};

export default ContestListPage;
