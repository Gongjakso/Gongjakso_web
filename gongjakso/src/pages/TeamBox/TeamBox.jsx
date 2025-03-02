import React, { useEffect, useState } from 'react';
import * as S from '../TeamBox/TeamBoxStyled';
import { Link, useLocation } from 'react-router-dom';
import { patchCompletedPost } from '../../service/post_service';
import { useDispatch, useSelector } from 'react-redux';
import {
    openConfirmModal,
    closeConfirmModal,
} from '../../features/modal/modalSlice/confirmModalSlice';
import { openAlertModal } from '../../features/modal/modalSlice/alertModalSlice';
import ConfirmModal from '../../components/common/ConfirmModal/ConfirmModal';
import AlertModal from '../../components/common/AlertModal/AlertModal';
import styled from 'styled-components';

// 상단, 하단 영역을 가로 정렬하기 위한 임시 래퍼 styled-components
const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
`;

const CenterRow = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 0.75rem;
`;

const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 0.75rem;
`;

const TeamBox = ({
    showMoreDetail,
    borderColor,
    showWaitingJoin,
    showSubBox,
    postContent,
    isMyParticipation,
    postId,
    overlayType,
}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [isLeader, setIsLeader] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation();
    const dispatch = useDispatch();
    const { isOpen, confirmClick, cancelClick } = useSelector(
        state => state.confirmModal,
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // 로컬 스토리지의 오버레이 숨김 여부 확인
        const overlayVisibility = localStorage.getItem(
            `overlayVisible-${postId}`,
        );
        if (overlayVisibility === 'false') {
            setIsOverlayVisible(false);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [postId]);

    const hideOverlay = () => {
        setIsOverlayVisible(false);
        localStorage.setItem(`overlayVisible-${postId}`, 'false');
    };

    const handleAPIRequest = postId => {
        // 활동 종료 API
        patchCompletedPost(postId).then(response => {
            if (response?.code === 1000) {
                dispatch(
                    openAlertModal({
                        titleContent: '활동을 종료하였습니다',
                        modalContent: '활동 기간 동안 고생하셨습니다!',
                    }),
                );
            } else {
                dispatch(
                    openAlertModal({
                        titleContent: '활동을 종료할 권한이 없습니다.',
                        modalContent: '활동 종료는 팀장만 할 수 있습니다!',
                    }),
                );
            }
        });
    };

    const handleOpenModal = id => {
        dispatch(
            openConfirmModal({
                confirmClick: () => handleAPIRequest(id),
                cancelClick: handleCancel,
            }),
        );
    };

    const handleClick = () => {
        if (confirmClick) {
            confirmClick();
        }
    };

    const handleCancel = () => {
        dispatch(
            openAlertModal({
                titleContent: '활동 종료를 취소하였습니다.',
                modalContent: '남은 기간 화이팅입니다!!',
            }),
        );
        if (cancelClick) {
            cancelClick();
        }
        dispatch(closeConfirmModal());
    };

    function getDisplayCategory(recruit_part) {
        switch (recruit_part) {
            case '기획':
            case '디자인':
            case '기타':
                return recruit_part;
            default:
                return recruit_part;
        }
    }

    function getDisplayApplyCategory(apply_part) {
        switch (apply_part) {
            case '기획':
            case '디자인':
            case '기타':
                return apply_part;
            default:
                return apply_part;
        }
    }

    // 반응형 분기
    const isMobileOrTablet = windowWidth < 1024; // 375~1023
    const isDesktop = windowWidth >= 1024; // 1024 이상

    // 모바일 + 태블릿
    if (isMobileOrTablet) {
        return (
            <S.Container>
                <S.Box $bordercolor={borderColor}>
                    <TopRow>
                        {showSubBox ? (
                            <S.SubBox>
                                <S.DeadLine>
                                    <S.FireImage />
                                    {postContent?.status === '모집 취소'
                                        ? '취소'
                                        : postContent?.status === '모집 마감'
                                          ? '마감'
                                          : postContent?.d_day > 0
                                            ? `D-${postContent?.d_day}`
                                            : postContent?.d_day === 0
                                              ? '오늘 마감'
                                              : '마감'}
                                </S.DeadLine>
                                <S.ScrapNum>
                                    <S.UnScrapImage />
                                    {postContent?.scrap_count}회
                                </S.ScrapNum>
                            </S.SubBox>
                        ) : (
                            <S.ActivityStatus
                                $poststatus={postContent?.postStatus}
                                $isleader={isLeader}
                                onClick={
                                    isLeader
                                        ? postContent?.status === '활동 중'
                                            ? () =>
                                                  handleOpenModal(
                                                      postContent?.id,
                                                  )
                                            : null
                                        : null
                                }
                            >
                                {postContent?.status === '활동 중'
                                    ? '활동 중'
                                    : '활동 종료'}
                            </S.ActivityStatus>
                        )}
                    </TopRow>
                    <CenterRow>
                        {/* 2) Title */}
                        <S.Title>{postContent?.title}</S.Title>

                        {/* 3) subTitle */}
                        <S.subTitle>
                            {`${postContent?.leader_name} | ${postContent?.started_at} ~ ${postContent?.finished_at}`}
                        </S.subTitle>
                    </CenterRow>
                    <BottomRow>
                        <S.MainBox>
                            {isMyParticipation ? (
                                <div></div>
                            ) : isMyParticipation === null ? (
                                postContent?.recruit_part?.map(
                                    (category, index) => (
                                        <S.RoundForm key={index}>
                                            {getDisplayCategory(category)}
                                        </S.RoundForm>
                                    ),
                                )
                            ) : postContent?.applicant_id ? (
                                <S.RoundForm>
                                    {getDisplayApplyCategory(
                                        postContent?.apply_part,
                                    )}
                                </S.RoundForm>
                            ) : (
                                postContent?.recruit_part?.map(
                                    (categoryList, index) => (
                                        <S.RoundForm key={index}>
                                            {getDisplayCategory(categoryList)}
                                        </S.RoundForm>
                                    ),
                                )
                            )}
                        </S.MainBox>

                        {showWaitingJoin && (
                            <S.WaitingJoin $status={postContent?.status}>
                                {postContent?.status === '합류 완료'
                                    ? '합류 완료'
                                    : postContent?.status === '미선발'
                                      ? '미선발'
                                      : '합류 대기중'}
                            </S.WaitingJoin>
                        )}
                    </BottomRow>

                    {/* 세부 정보 보기 아이콘 (조건부) */}
                    {showMoreDetail && (
                        <Link
                            to={`/teamdetail/${postId}`}
                            state={{ postContent }}
                        >
                            <S.MoreDetail />
                        </Link>
                    )}
                </S.Box>

                <AlertModal />
                {isOpen && (
                    <ConfirmModal
                        question="정말 활동을 종료 하시겠습니까?"
                        confirmClick={handleClick}
                        cancelClick={handleCancel}
                    />
                )}
            </S.Container>
        );
    }

    // 데스크탑(1024px 이상)
    return (
        <S.Container>
            <S.Box $bordercolor={borderColor}>
                <S.BoxTopDetail>
                    <S.MainBox>
                        <S.Title>{postContent?.title}</S.Title>
                        <S.subTitle>
                            {`| ${postContent?.leader_name} | ${postContent?.started_at} ~ ${postContent?.finished_at} |`}
                        </S.subTitle>
                    </S.MainBox>
                    {showSubBox ? (
                        <S.SubBox>
                            <S.DeadLine>
                                <S.FireImage />
                                {postContent?.status === '모집 취소'
                                    ? '취소'
                                    : postContent?.status === '모집 마감'
                                      ? '마감'
                                      : postContent?.d_day > 0
                                        ? `마감 D-${postContent?.d_day}`
                                        : postContent?.d_day === 0
                                          ? '마감 D-day'
                                          : '마감'}
                            </S.DeadLine>
                            <S.ScrapNum>
                                <S.UnScrapImage />
                                {postContent?.scrap_count}회
                            </S.ScrapNum>
                        </S.SubBox>
                    ) : (
                        <S.ActivityStatus
                            $poststatus={postContent?.postStatus}
                            $isleader={isLeader}
                            onClick={
                                isLeader
                                    ? postContent?.status === '활동 중'
                                        ? () => handleOpenModal(postContent?.id)
                                        : null
                                    : null
                            }
                        >
                            {postContent?.status === '활동 중'
                                ? '활동 중'
                                : '활동 종료'}
                        </S.ActivityStatus>
                    )}
                </S.BoxTopDetail>

                <S.BoxBottomDetail>
                    <S.MainBox>
                        {isMyParticipation ? (
                            <div></div>
                        ) : isMyParticipation === null ? (
                            postContent?.recruit_part?.map(
                                (category, index) => (
                                    <S.RoundForm key={index}>
                                        {getDisplayCategory(category)}
                                    </S.RoundForm>
                                ),
                            )
                        ) : postContent?.applicant_id ? (
                            <S.RoundForm>
                                {getDisplayApplyCategory(
                                    postContent?.apply_part,
                                )}
                            </S.RoundForm>
                        ) : (
                            postContent?.recruit_part?.map(
                                (categoryList, index) => (
                                    <S.RoundForm key={index}>
                                        {getDisplayCategory(categoryList)}
                                    </S.RoundForm>
                                ),
                            )
                        )}
                    </S.MainBox>

                    {showWaitingJoin && (
                        <S.WaitingJoin $status={postContent?.status}>
                            {postContent?.status === '합류 완료'
                                ? '합류 완료'
                                : postContent?.status === '미선발'
                                  ? '미선발'
                                  : '합류 대기중'}
                        </S.WaitingJoin>
                    )}
                    {showMoreDetail && (
                        <Link
                            to={`/teamdetail/${postId}`}
                            state={{ postContent }}
                        >
                            <S.MoreDetail />
                        </Link>
                    )}
                </S.BoxBottomDetail>
            </S.Box>

            <AlertModal />
            {isOpen && (
                <ConfirmModal
                    question="정말 활동을 종료 하시겠습니까?"
                    confirmClick={handleClick}
                    cancelClick={handleCancel}
                />
            )}
        </S.Container>
    );
};

export default TeamBox;
