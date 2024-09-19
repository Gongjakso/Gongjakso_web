import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './ContestDetailPage.Styled';
import Multilevel from '../../components/common/Input/Multilevel';
import { SelectInput } from '../../components/common/Input/Input';
import { useForm } from 'react-hook-form';
import TeamBox from '../TeamBox/TeamBox';
import NoContents from '../../features/NoContents/NoContents';
import useCustomNavigate from '../../hooks/useNavigate';
import { getContestDetail } from '../../service/post_service';

const ContestDetailPage = () => {
    const location = useLocation();
    const contestData = location.state?.contestData;
    const [selectedCityData, setSelectedCityData] = useState('');
    const [selectedTownData, setSelectedTownData] = useState('');
    const [sortBy, setSortBy] = useState('createdAt');
    const navigate = useCustomNavigate();
    const [contestId, setContestId] = useState(contestData?.id);
    const [contestPosts, setContestPosts] = useState();
    const [contestDetail, setContestDetail] = useState();

    useEffect(() => {
        getContestDetail(contestId).then(res => {
            setContestDetail(res?.data);
        });
    }, [contestId]);

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
            setSortBy('scrapCount');
        } else if (selectedValue === '최신순') {
            setSortBy('createdAt');
        } else {
            setSortBy(null);
        }
    };
    const handleTeamBuildClick = () => {
        navigate('/teambuild');
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
                                {contestDetail?.dayState}
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
                        <S.InfoSpan>{contestDetail?.body}</S.InfoSpan>
                    </S.ContestInfo>
                </S.ContestDetail>
                <S.ContestButtonOption>
                    <S.GotohomeBtn>홈페이지로 바로가기</S.GotohomeBtn>
                    <S.TeamBuildBtn onClick={handleTeamBuildClick}>
                        팀빌딩하기
                    </S.TeamBuildBtn>
                </S.ContestButtonOption>
                <S.ContestInfo>
                    <S.ContestTitle>
                        {contestDetail?.contestTitle}의 팀 찾기
                    </S.ContestTitle>
                    <S.Organization>
                        현재 N명이 팀을 모집하고 있어요
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
                    <S.ContestContent>
                        {contestPosts ? (
                            contestPosts.map(contest => (
                                <React.Fragment key={contest?.postId}>
                                    <TeamBox
                                        showWaitingJoin={false}
                                        showSubBox={true}
                                        borderColor={'rgba(0, 163, 255, 0.5)'}
                                        showMoreDetail={false}
                                        postContent={contest}
                                        isMyParticipation={null}
                                    />
                                </React.Fragment>
                            ))
                        ) : (
                            <NoContents
                                mainTxt={'찾으시는 내용을 발견하지 못했어요!'}
                                subTxt={'다른 내용을 검색해보세요'}
                            />
                        )}
                    </S.ContestContent>
                </S.ContestInfo>
            </S.MainContent>
        </>
    );
};

export default ContestDetailPage;
