import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './ContestDetailPage.Styled';
import Multilevel from '../../components/common/Input/Multilevel';
import { SelectInput } from '../../components/common/Input/Input';
import HomeLink from '../../assets/images/blackLink.svg';
import { useForm } from 'react-hook-form';
import TeamBox from '../TeamBox/TeamBox';
import NoContents from '../../features/NoContents/NoContents';
import useCustomNavigate from '../../hooks/useNavigate';
import {
    getContestDetail,
    getContestTeamList,
} from '../../service/post_service';
import Pagination from '../../components/Pagination/Pagination';

const ContestDetailPage = () => {
    const location = useLocation();
    const contestData = location.state?.contestData;
    const [selectedCityData, setSelectedCityData] = useState('');
    const [selectedTownData, setSelectedTownData] = useState('');
    const [sortBy, setSortBy] = useState('');
    const navigate = useCustomNavigate();
    const [contestId, setContestId] = useState(contestData?.id);
    const [contestPosts, setContestPosts] = useState();
    const [contestDetail, setContestDetail] = useState();
    const [contentHtml, setContentHtml] = useState('');
    const [page, setPage] = useState(1);
    const [contestTeamTotalPage, setContestTeamTotalPage] = useState();

    useEffect(() => {
        setPage(1);
    }, [sortBy]);

    const loadContestTeam = (
        contestId,
        selectedCityData,
        selectedTownData,
        page,
        sortBy,
    ) => {
        getContestTeamList(
            contestId,
            selectedCityData,
            selectedTownData,
            page,
            sortBy,
        ).then(res => {
            setContestPosts(res?.data.content);
            setContestTeamTotalPage(res?.data.totalPages);
        });
    };

    useEffect(() => {
        getContestDetail(contestId).then(res => {
            setContestDetail(res?.data);
            // const formattedContent = res?.data.body.replace(/\n/g, '<br>');
            setContentHtml(res?.data.body);
        });
        loadContestTeam(
            contestId,
            selectedCityData,
            selectedTownData,
            page,
            sortBy,
        );
    }, [contestId, page, selectedCityData, selectedTownData, sortBy]);

    // const [contestPosts, setContestPosts] = useState();

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

    const handleSelectChange = selectedValue => {
        //선택한 정렬 방식으로 반환
        if (selectedValue === '인기순') {
            setSortBy('scrap,desc');
        } else if (selectedValue === '최신순') {
            setSortBy('createdAt');
        } else {
            setSortBy('createdAt');
        }
    };
    const handleTeamBuildClick = () => {
        navigate('/teambuild', { contestDetail, contestData });
    };

    const handlegotoHomePage = () => {
        window.open(contestDetail?.contestLink, '_blank');
    };

    return (
        <>
            <S.MainContent>
                <S.ContestDetail>
                    <S.ContestImg src={contestDetail?.imgUrl} />
                    <S.ContestInfo>
                        <S.ContestInfoTop>
                            <S.ContestTitle>
                                {contestDetail?.title}
                            </S.ContestTitle>
                            <S.RemainDate>
                                <S.FireImage />
                                <S.SpanP>{contestDetail?.dayState}</S.SpanP>
                            </S.RemainDate>
                        </S.ContestInfoTop>
                        <S.Organization>
                            {contestDetail?.institution}
                        </S.Organization>
                        <S.InfoContent>
                            조회수 :
                            <S.InfoSpan>
                                {contestDetail?.viewCount}회
                            </S.InfoSpan>
                        </S.InfoContent>
                        <S.InfoContent>
                            <p>진행기간</p>
                            <S.InfoSpan>
                                {contestDetail?.startedAt}~
                                {contestDetail?.finishedAt}
                            </S.InfoSpan>
                        </S.InfoContent>
                        <S.Headline />
                        <S.InfoContent>설명글</S.InfoContent>
                        <S.InfoSpan
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />
                        {/* <S.InfoSpan>{contestDetail?.body}</S.InfoSpan> */}
                    </S.ContestInfo>
                </S.ContestDetail>
                <S.ContestButtonOption>
                    <S.GotohomeBtn onClick={handlegotoHomePage}>
                        홈페이지 바로가기
                        <img src={HomeLink} alt="homepage-link" />
                    </S.GotohomeBtn>
                    <S.TeamBuildBtn onClick={handleTeamBuildClick}>
                        팀빌딩하기
                    </S.TeamBuildBtn>
                </S.ContestButtonOption>
                <S.ContestInfo>
                    <S.ContestTitle>
                        '{contestDetail?.title}' 의 팀 찾기
                    </S.ContestTitle>
                    <S.Organization>
                        현재 {contestPosts?.length}명이 팀을 모집하고 있어요
                    </S.Organization>
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
                    {contestPosts && contestPosts.length > 0 ? (
                        <>
                            <S.ContestContent>
                                {contestPosts?.map(contest => (
                                    <React.Fragment key={contest?.id}>
                                        <Link
                                            to={`/contest/${contestData?.id}/team/${contest?.id}`}
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
                                    </React.Fragment>
                                ))}
                            </S.ContestContent>
                            <Pagination
                                total={contestTeamTotalPage}
                                page={page}
                                setPage={setPage}
                                loadPosts={loadContestTeam}
                            />
                        </>
                    ) : (
                        <S.ContestContent>
                            <NoContents
                                mainTxt={
                                    '아직 팀을 모집하고 있는 사람이 없어요'
                                }
                                subTxt={'첫 팀빌딩의 주인공이 되어보세요!'}
                            />
                        </S.ContestContent>
                    )}
                </S.ContestInfo>
            </S.MainContent>
        </>
    );
};

export default ContestDetailPage;
