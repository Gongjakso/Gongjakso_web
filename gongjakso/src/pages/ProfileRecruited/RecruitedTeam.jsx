import React, { useEffect, useState } from 'react';
import * as S from './RecruitedTeam.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyInfo, getMyRecruiting } from '../../service/profile_service';

const RecruitedTeam = () => {
    const [data, setProfileData] = useState();
    const [postContent1, setPostContent1] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState();

    useEffect(() => {
        getMyRecruiting(page, 6).then(response => {
            setTotalPage(response.data.totalPages);
            setPostContent1(response?.data.content);
        });
    }, [page]);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

    const loadMyRecruiting = page =>
        getMyRecruiting(page, 6).then(res => {
            setPostContent1(res?.data.content);
        });

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>{data?.name}님의 모집 기록</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent1?.map(postContent1 => (
                    <TeamBox
                        key={postContent1?.id}
                        showMoreDetail={true}
                        showWaitingJoin={false}
                        showSubBox={true}
                        postContent={postContent1}
                        isMyParticipation={false}
                        postId={postContent1?.id}
                    />
                ))}
                <Pagination
                    total={totalpage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadMyRecruiting}
                />
            </S.BoxDetail>
        </div>
    );
};

export default RecruitedTeam;
