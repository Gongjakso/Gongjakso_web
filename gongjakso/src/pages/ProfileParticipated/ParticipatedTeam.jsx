import React, { useEffect, useState } from 'react';
import * as S from './ParticipatedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import Pagination from '../../components/Pagination/Pagination';
import { getMyParticipated } from '../../service/profile_service';

const TeamPart = () => {
    const [page, setPage] = useState(1);
    const [postContent3, setPostContent3] = useState();
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        getMyParticipated(page, 6).then(response => {
            setTotalPage(response?.data.totalPages);
            setPostContent3(response?.data?.content);
        });
    }, [page]);

    const loadParticipatedPosts = page => {
        getMyParticipated(page, 6).then(response => {
            setPostContent3(response?.data.content);
            setTotalPage(response?.data?.totalPages);
        });
    };

    return (
        <div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 참여한 공모전/프로젝트</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent3?.map(postContent3 => (
                    <TeamBox
                        key={postContent3?.postId}
                        showMoreDetail={false}
                        borderColor={
                            postContent3?.postStatus !== 'ACTIVE'
                                ? 'rgba(111, 111, 111, 1)' // 활동 완료 -> 테두리 검정색
                                : 'rgba(195, 233, 255, 0.5)' // 활동 중 -> 테두리 파란색
                        }
                        showWaitingJoin={false}
                        showSubBox={false}
                        postContent={postContent3}
                        isMyParticipation={true}
                    />
                ))}
                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadParticipatedPosts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default TeamPart;
