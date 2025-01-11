import React, { useEffect, useState } from 'react';
import * as S from './Scrap.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyInfo, getMyTeamScrap } from '../../service/profile_service';
import NoContents from '../../features/NoContents/NoContents';

const Scrap = () => {
    const [page, setPage] = useState(1);
    const [data, setProfileData] = useState();
    const [postContent4, setPostContent4] = useState(); //스크랩 공모전
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        getMyTeamScrap(page, 6).then(response => {
            setTotalPage(response?.data.totalPages);
            setPostContent4(response?.data.content);
        });
    }, [page]);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

    const loadScrapedPosts = page => {
        getMyTeamScrap(page, 6).then(response => {
            setTotalPage(response?.data.totalPages);
            setPostContent4(response?.data.content);
        });
    };

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>{data?.name}님의 스크랩</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                <S.SubTitleContainer>
                    {!postContent4 ? (
                        <NoContents
                            mainTxt={'스크랩한 공고를 발견하지 못했어요!'}
                            subTxt={''}
                        />
                    ) : (
                        <>
                            {postContent4?.map(postContent4 => (
                                <TeamBox
                                    key={postContent4?.id}
                                    showMoreDetail={false}
                                    showWaitingJoin={false}
                                    showSubBox={true}
                                    borderColor={'rgba(0, 84, 255, 1)'}
                                    postContent={postContent4}
                                    isMyParticipation={null}
                                    postId={postContent4?.id}
                                />
                            ))}
                        </>
                    )}
                </S.SubTitleContainer>
                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadScrapedPosts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default Scrap;
