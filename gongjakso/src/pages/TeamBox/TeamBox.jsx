import React, { useEffect, useState } from 'react';
import * as S from '../TeamBox/TeamBoxStyled';
import { Link, useLocation } from 'react-router-dom';
import { getCheckStatus, patchCompletedPost } from '../../service/post_service';
import { useDispatch, useSelector } from 'react-redux';
import {
    openConfirmModal,
    closeConfirmModal,
} from '../../features/modal/modalSlice/confirmModalSlice';
import { openAlertModal } from '../../features/modal/modalSlice/alertModalSlice';
import ConfirmModal from '../../components/common/ConfirmModal/ConfirmModal';
import AlertModal from '../../components/common/AlertModal/AlertModal';

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
    const [isLeader, setIsLeader] = useState();
    const location = useLocation();
    const dispatch = useDispatch();
    const { isOpen, confirmClick, cancelClick } = useSelector(
        state => state.confirmModal,
    );

    console.log(postContent);
    useEffect(() => {
        const overlayVisibility = localStorage.getItem(
            `overlayVisible-${postId}`,
        );
        if (overlayVisibility === 'false') {
            setIsOverlayVisible(false);
        }
    }, [postId]);

    useEffect(() => {
        // 특정 경로에서만 getCheckStatus 함수 호출
        if (location.pathname === '/participatedTeam') {
            getCheckStatus(postContent?.id).then(response => {
                const imLeader = response?.data?.role === 'LEADER';
                setIsLeader(imLeader);
            });
        }
    }, [location.pathname, postContent?.id]);

    const hideOverlay = () => {
        setIsOverlayVisible(false);
    };

    const handleAPIRequest = postId => {
        // 활동 종료 api
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

    const startDate = new Date(postContent?.startDate)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .split('. ')
        .join('.');

    const finishDate = new Date(postContent?.finishDate)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .split('. ')
        .join('.');

    const endDate = new Date(postContent?.endDate)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .split('. ')
        .join('.');

    function getDisplayCategory(recruit_part) {
        let displayCategory;

        switch (recruit_part) {
            case 'PLAN':
                displayCategory = '기획';
                break;
            case 'DESIGN':
                displayCategory = '디자인';
                break;
            case 'FE':
                displayCategory = '프론트엔드';
                break;
            case 'BE':
                displayCategory = '백엔드';
                break;
            case 'ETC':
                displayCategory = '기타';
                break;
            default:
                displayCategory = recruit_part;
        }

        return displayCategory;
    }

    return (
        <S.Container>
            <S.Box
                $bordercolor={borderColor}
                $showmoredetail={showMoreDetail.toString()}
            >
                <S.BoxTopDetail>
                    <S.MainBox>
                        <S.Title>{postContent?.title}</S.Title>
                        <S.subTitle>
                            {isMyParticipation === false &&
                                `| ${postContent?.memberName} | ${postContent?.startedAt}~${postContent?.finishedAt} |`}
                            {isMyParticipation === true &&
                                `| ${postContent?.leaderName} | ${postContent?.startedAt}~${postContent?.recruitFinishedAt} |`}
                            {isMyParticipation === null &&
                                // `| ${postContent?.name} | ${postContent?.startedAt}~${postContent?.finishedAt} |`}
                                `| ${postContent?.leader_name} | ${postContent?.started_at} ~ ${postContent?.finished_at} |`}
                        </S.subTitle>
                    </S.MainBox>
                    {showSubBox ? (
                        <S.SubBox>
                            <S.DeadLine>
                                <S.FireImage />
                                {postContent?.d_day < 0
                                    ? '마감된 공고'
                                    : `마감 D-${postContent?.d_day}`}
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
                                    ? postContent?.postStatus === 'ACTIVE'
                                        ? () =>
                                              handleOpenModal(
                                                  postContent?.postId,
                                              )
                                        : null
                                    : null
                            }
                        >
                            {postContent?.postStatus === 'ACTIVE'
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
                            postContent?.categories?.map((category, index) => {
                                return (
                                    <S.RoundForm key={index}>
                                        {getDisplayCategory(
                                            category.categoryType,
                                        )}
                                    </S.RoundForm>
                                );
                            })
                        ) : (
                            postContent?.categoryList?.map(
                                (categoryList, index) => {
                                    return (
                                        <S.RoundForm key={index}>
                                            {getDisplayCategory(categoryList)}
                                        </S.RoundForm>
                                    );
                                },
                            )
                        )}
                    </S.MainBox>
                    {/* {postContent?.status === 'EXTENSION' &&
                        isOverlayVisible && (
                            <>
                                <S.DeadlineOverlay $status={postContent.status}>
                                    모집이 연장되었습니다.
                                </S.DeadlineOverlay>
                                <S.CloseImage onClick={hideOverlay} />
                            </>
                        )} */}
                    {showWaitingJoin && (
                        <S.WaitingJoin $applytype={postContent?.applyType}>
                            {postContent?.applyType === 'PASS'
                                ? '합류 완료'
                                : postContent?.applyType === 'NOT_PASS'
                                  ? '미선발'
                                  : '합류 대기중'}
                            {postContent?.status === 'CLOSE' && (
                                <S.DeadlineOverlay $status={postContent.status}>
                                    모집이 마감되었습니다.
                                </S.DeadlineOverlay>
                            )}
                            {postContent?.status === 'CANCEL' && (
                                <S.DeadlineOverlay $status={postContent.status}>
                                    모집이 취소되었습니다.
                                </S.DeadlineOverlay>
                            )}
                        </S.WaitingJoin>
                    )}
                    {showMoreDetail && (
                        <Link to={`/teamdetail/${postId}`}>
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
