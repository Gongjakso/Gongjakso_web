import React, { useEffect, useState } from 'react';
import * as S from './ParticipatedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import Pagination from '../../components/Pagination/Pagination';
import { getMyInfo, getMyParticipated } from '../../service/profile_service';

const TeamPart = () => {
    const [page, setPage] = useState(1);
    const [data, setProfileData] = useState();
    const [postContent3, setPostContent3] = useState();
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        getMyParticipated(page, 6).then(response => {
            setTotalPage(response?.data?.totalPages);
            setPostContent3(response?.data.content);
        });
    }, [page]);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
    }, []);

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
                <S.Title>{data?.name}님의 참여 기록</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent3?.map(postContent3 => (
                    <TeamBox
                        key={postContent3?.id}
                        showMoreDetail={false}
                        borderColor={
                            postContent3?.postStatus !== 'ACTIVE' //활동 완료인 경우 테두리 검정색
                                ? 'rgba(111, 111, 111, 1)'
                                : postContent3.postType === true
                                  ? 'rgba(231, 137, 255, 0.5)'
                                  : 'rgba(0, 163, 255, 0.5)'
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
