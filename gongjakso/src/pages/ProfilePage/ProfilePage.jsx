import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import TeamBox from '../TeamBox/TeamBox';
import {
    getMyInfo,
    getMyParticipated,
    getMyRecruiting,
    getMyApplied,
} from '../../service/profile_service';
import SelectPortfolio from '../../features/modal/SelectPortfolio';

const ProfilePage = () => {
    const [data, setProfileData] = useState(); // 프로필 내용
    const [postContent1, setPostContent1] = useState();
    const [postContent2, setPostContent2] = useState();
    const [postContent3, setPostContent3] = useState();
    const [showModal, setShowModal] = useState(false); // 모달 상태

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });

        getMyRecruiting().then(response => {
            setPostContent1(response?.data?.content.slice(0, 2));
        });
        getMyApplied(1, 2).then(response => {
            setPostContent2(response?.data?.content);
        });
        getMyParticipated(1, 2).then(response => {
            setPostContent3(response?.data?.content);
        });
    }, []);

    const openPortfolioModal = () => setShowModal(true); // 모달 열기
    const closePortfolioModal = () => setShowModal(false); // 모달 닫기

    useEffect(() => {
        if (showModal) {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                overflow-y: hidden;
                width: 100%;`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }

        return () => {
            document.body.style.cssText = '';
        };
    }, [showModal]);

    return (
        <div>
            <S.TopBox>
                <S.InfoBox>
                    <S.DetailBox>
                        <S.NameTitle>{data?.name}</S.NameTitle>
                        <Link to={'/myinfo'}>
                            <S.EditImage />
                        </Link>
                    </S.DetailBox>
                    <S.MajorTitle>{data?.major}</S.MajorTitle>
                </S.InfoBox>
                <S.ProfileImage />
                <Link to="/teamPortfolio">
                    <S.PortfolioBox>나의 포트폴리오</S.PortfolioBox>
                </Link>
            </S.TopBox>
            <S.GlobalBox>
                <S.BoxDetail style={{ gap: '2.375rem' }}>
                    <S.SubTitle>나의 포트폴리오</S.SubTitle>
                    <S.NoPortfolio>
                        아직 포트폴리오가 없어요! <br />
                        포트폴리오를 채워 팀빌딩 확률을 높여보세요
                        <S.MakePortfolioBtn onClick={openPortfolioModal}>
                            포트폴리오 만들기
                        </S.MakePortfolioBtn>
                    </S.NoPortfolio>
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
                    {postContent1?.map(post => (
                        <TeamBox
                            key={post?.id}
                            showMoreDetail={true}
                            showWaitingJoin={false}
                            showSubBox={true}
                            postContent={post}
                            isMyParticipation={false}
                            id={post?.id}
                        />
                    ))}
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubTitle>
                        <span>내가 지원한 팀</span>
                        <Link to="/appliedTeam">
                            <S.ArrowImage />
                        </Link>
                    </S.SubTitle>
                    {postContent2?.map(post => (
                        <TeamBox
                            key={post?.id}
                            showMoreDetail={false}
                            showWaitingJoin={true}
                            showSubBox={true}
                            borderColor={'rgba(0, 163, 255, 0.5)'}
                            postContent={post}
                            isMyParticipation={false}
                        />
                    ))}
                </S.BoxDetail>
                <S.BoxDetail>
                    <S.SubTitle>
                        <span>내가 참여한 공모전</span>
                        <Link to="/participatedTeam">
                            <S.ArrowImage />
                        </Link>
                    </S.SubTitle>
                    {postContent3?.map(post => (
                        <TeamBox
                            key={post?.id}
                            showMoreDetail={false}
                            borderColor={
                                post?.postStatus !== 'ACTIVE'
                                    ? 'rgba(111, 111, 111, 1)'
                                    : post.postType === true
                                      ? 'rgba(231, 137, 255, 0.5)'
                                      : 'rgba(0, 163, 255, 0.5)'
                            }
                            showWaitingJoin={false}
                            showSubBox={false}
                            postContent={post}
                            isMyParticipation={true}
                        />
                    ))}
                </S.BoxDetail>
            </S.GlobalBox>

            <SelectPortfolio
                showModal={showModal}
                closePortfolioModal={closePortfolioModal}
            />
        </div>
    );
};

export default ProfilePage;
