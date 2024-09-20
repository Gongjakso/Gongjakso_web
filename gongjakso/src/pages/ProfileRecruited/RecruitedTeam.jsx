import React, { useEffect, useState } from 'react';
import * as S from './RecruitedTeam.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyRecruiting } from '../../service/profile_service';

const RecruitedTeam = () => {
    const [page, setPage] = useState(1);
    const [postContent1, setPostContent1] = useState([]);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        getMyRecruiting(page, 6).then(response => {
            setPostContent1(response?.data.content);
            setTotalPage(response?.data?.totalPages);
        });
    }, [page]);

    const loadRecruitedPosts = page => {
        getMyRecruiting(page, 6).then(response => {
            setPostContent1(response?.data.content);
            setTotalPage(response?.data?.totalPages);
        });
    };

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent1?.map(postContent1 => (
                    <TeamBox
                        key={postContent1?.postId}
                        showMoreDetail={true}
                        showWaitingJoin={false}
                        showSubBox={true}
                        postContent={postContent1}
                        isMyParticipation={false}
                        postId={postContent1?.postId}
                    />
                ))}
                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadRecruitedPosts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default RecruitedTeam;
