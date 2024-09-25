import React, { useEffect, useState } from 'react';
import * as S from './AppliedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyInfo, getMyApplied } from '../../service/profile_service';

const TeamSupport = () => {
    const [data, setProfileData] = useState();
    const [page, setPage] = useState(1);
    const [postContent2, setPostContent2] = useState([]);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        setPage(1);
    }, []);

    useEffect(() => {
        getMyApplied(page, 6).then(response => {
            setTotalPage(response?.data.totalPages);
            setPostContent2(response?.data.content);
        });
    }, [page]);

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

    const loadParticipatedPosts = page => {
        getMyApplied(page, 6).then(response => {
            setPostContent2(response?.data.content);
            setTotalPage(response?.data.totalPages);
        });
    };

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>{data?.name}님의 지원 기록</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent2?.map((postContent2, index) => (
                    <TeamBox
                        key={index}
                        showMoreDetail={false}
                        showWaitingJoin={true}
                        showSubBox={true}
                        postContent={postContent2}
                        isMyParticipation={false}
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

export default TeamSupport;
