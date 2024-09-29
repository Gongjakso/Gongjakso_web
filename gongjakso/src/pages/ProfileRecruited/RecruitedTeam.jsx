import React, { useEffect, useState } from 'react';
import * as S from './RecruitedTeam.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyInfo, getMyRecruiting } from '../../service/profile_service';

const RecruitedTeam = () => {
    const [data, setProfileData] = useState();
    const [postContent1, setPostContent1] = useState([]);

    useEffect(() => {
        getMyRecruiting(0, 6).then(response => {
            setPostContent1(response?.data.content);
        });
    }, []);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

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
                        postId={postContent1?.postId}
                    />
                ))}
            </S.BoxDetail>
        </div>
    );
};

export default RecruitedTeam;
