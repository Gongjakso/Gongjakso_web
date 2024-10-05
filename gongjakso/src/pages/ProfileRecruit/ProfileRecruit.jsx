import React, { useEffect, useState } from 'react';
import * as S from './ProfileRecruit.styled';
import User from '../../assets/images/My_page_big.svg';
import arrow from '../../assets/images/Arrow.svg';
import MyPageTeam from '../../features/modal/MyPageTeam';
import ClickRecruitApplicant from '../../features/modal/ClickRecruitApplicant';
import Pagination from '../../components/Pagination/Pagination';
import {
    getMyRecruitingTeam,
    patchOpen,
    patchApply,
} from '../../service/apply_service';
import { useLocation, useParams } from 'react-router-dom';
import useCustomNavigate from '../../hooks/useNavigate';
import { getPostDetail } from '../../service/post_service';

const ProfileRecruit = () => {
    const navigate = useCustomNavigate();
    const [showApply, setShowApply] = useState(false); // 지원서 모달창 띄우는 경우
    const [item, setItem] = useState('');

    const [finish, setFinish] = useState(false); // 마감하기
    const [extend, setExtend] = useState(false); // 연장하기
    const [cancel, setCancel] = useState(false); // 취소하기

    const [idNum, setidNum] = useState('');
    const [idName, setidName] = useState('');
    const [part, setPart] = useState([]);
    const [role, setRole] = useState([]);

    const [teamCase] = useState([
        { case: '마감하기', id: '1' },
        { case: '연장하기', id: '2' },
        { case: '취소하기', id: '3' },
    ]);

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    const { id } = useParams();
    const location = useLocation();
    const contestData = location.state?.postContent;
    const [postId, setpostId] = useState(id);

    const [recruitTeam, setRecruitTeam] = useState([]);

    const [totalMember, setTotalMember] = useState();

    // statuses 상태: 'gray', 'black', 'notSelected', 'selected'
    const [statuses, setStatuses] = useState([]);

    const [recruitTotalMember, setRecruitTotalMember] = useState();

    useEffect(() => {
        const id = contestData?.id;

        getMyRecruitingTeam(id).then(response => {
            const acceptedApplicants = response?.data.filter(
                applicant => applicant.status === 'ACCEPTED',
            );
            setPosts(response?.data); // 지원자 리스트 설정
            setTotalMember(
                acceptedApplicants?.length ? acceptedApplicants?.length : 0,
            );
            // 서버에서 받아온 지원자의 status를 기반으로 statuses 상태 초기화
            const initialStatuses = response?.data.map(applicant => {
                if (applicant.status === 'COMPLETED') {
                    return 'gray'; // 초기 상태
                } else if (applicant.status === 'ACCEPTED') {
                    return 'selected'; // 합류 완료
                } else if (applicant.status === 'REJECTED') {
                    return 'notSelected'; // 미선발
                } else {
                    return 'gray';
                }
            });
            setStatuses(initialStatuses);
        });
    }, [contestData]);

    const handleBoxClick = index => {
        const newStatuses = [...statuses];
        newStatuses[index] = newStatuses[index] === 'gray' ? 'black' : 'gray';
        setStatuses(newStatuses);
    };

    const handleClick = (index, applicant) => {
        setItem(applicant); // 선택된 지원자 정보를 상태에 저장
        setShowApply(true); // 모달을 열기 위한 상태 설정
    };

    const handleNotSelectedClick = async () => {
        // 선택된 지원자들에 대해 서버에 상태 업데이트 요청
        const updatedStatuses = [...statuses];
        for (let i = 0; i < statuses.length; i++) {
            if (statuses[i] === 'black') {
                try {
                    const id = posts[i].id;
                    await patchApply(id, 'REJECTED');
                    updatedStatuses[i] = 'notSelected';
                } catch (error) {
                    console.error('미선발 상태 업데이트 중 에러:', error);
                }
            }
        }
        setStatuses(updatedStatuses);
    };

    const handleSelectedClick = async () => {
        // 선택된 지원자들에 대해 서버에 상태 업데이트 요청
        const updatedStatuses = [...statuses];
        for (let i = 0; i < statuses.length; i++) {
            if (statuses[i] === 'black') {
                try {
                    const id = posts[i].id;
                    await patchApply(id, 'ACCEPTED');
                    updatedStatuses[i] = 'selected';
                } catch (error) {
                    console.error('합류 상태 업데이트 중 에러:', error);
                }
            }
        }
        setStatuses(updatedStatuses);
    };

    // 활동기간 수정 함수
    const formatDate = dateString => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    useEffect(() => {
        setTotalPage(1); // 페이지 총 개수 설정
        setRecruitTeam(contestData); // 모집 팀 정보 설정
        const id = contestData?.id;
        getMyRecruitingTeam(id).then(response => {
            setPosts(response?.data); // 지원자 리스트 설정
            // 서버에서 받아온 지원자의 status를 기반으로 statuses 상태 초기화
            const initialStatuses = response?.data.map(applicant => {
                if (applicant.status === 'COMPLETED') {
                    return 'gray'; // 초기 상태
                } else if (applicant.status === 'ACCEPTED') {
                    return 'selected'; // 합류 완료
                } else if (applicant.status === 'REJECTED') {
                    return 'notSelected'; // 미선발
                } else {
                    return 'gray';
                }
            });
            setStatuses(initialStatuses);
        });
        getPostDetail(contestData?.contest_id, contestData?.id).then(res => {
            setRecruitTotalMember(res?.data.total_count);
        });
    }, [contestData]);

    const loadApplyList = page => {
        // 페이지네이션에 따라 목데이터를 불러올 수 있지만, 현재는 단일 페이지로 설정
        setPage(page);
    };

    const ClickOpen = (id, state) => {
        if (state === '미열람') {
            patchOpen(id);
        }
    };

    return (
        <div>
            {finish ? (
                <MyPageTeam
                    teamCase={teamCase[0]}
                    CloseModal={setFinish}
                    id={contestData}
                />
            ) : extend ? (
                <MyPageTeam
                    teamCase={teamCase[1]}
                    CloseModal={setExtend}
                    id={contestData}
                    recruitFinishedAt={recruitTeam?.recruit_finished_at}
                />
            ) : cancel ? (
                <MyPageTeam
                    teamCase={teamCase[2]}
                    CloseModal={setCancel}
                    id={contestData}
                />
            ) : showApply && item ? (
                <ClickRecruitApplicant
                    applyId={item.id} // 지원자의 ID를 모달로 전달
                    setOpen={setShowApply} // 모달 닫기 함수 전달
                />
            ) : null}

            <S.TopBox>
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.GlobalBox>
                <S.BlueBox>
                    <S.Border>
                        <S.DetailGlobal>
                            <S.InsideTitleFront $title={'true'}>
                                {recruitTeam?.title}
                            </S.InsideTitleFront>
                        </S.DetailGlobal>
                        <S.DetailGlobal>
                            <S.InsideDetail>
                                활동기간 | {recruitTeam?.started_at} ~
                                {formatDate(recruitTeam?.finished_at)}
                            </S.InsideDetail>
                            <S.InsideDetail>
                                모집인원 | {recruitTotalMember}
                            </S.InsideDetail>
                        </S.DetailGlobal>
                    </S.Border>
                    <S.InsideBox>
                        <S.GlobalBox2>
                            <S.DetailGlobal2>
                                <S.InsideTitle $title={'false'}>
                                    현재 모집 현황
                                    <S.TagNUM>
                                        {totalMember}/{recruitTotalMember}
                                    </S.TagNUM>
                                </S.InsideTitle>
                            </S.DetailGlobal2>

                            {/* true: 프로젝트 / false: 공모전 */}
                            <S.Postcheck
                                onClick={() => {
                                    navigate(
                                        `/contest/${recruitTeam?.contest_id}/team/${recruitTeam?.id}`,
                                    );
                                }}
                            >
                                공고 보기
                                <img src={arrow} alt="arrow" />
                            </S.Postcheck>
                        </S.GlobalBox2>
                        <S.ButtonSet>
                            <S.GreyBtn
                                onClick={() => {
                                    setFinish(true);
                                }}
                            >
                                마감하기
                            </S.GreyBtn>
                            <S.GreyBtn
                                onClick={() => {
                                    setExtend(true);
                                }}
                            >
                                연장하기
                            </S.GreyBtn>
                            <S.GreyBtn
                                onClick={() => {
                                    setCancel(true);
                                }}
                            >
                                모집취소
                            </S.GreyBtn>
                        </S.ButtonSet>
                    </S.InsideBox>
                </S.BlueBox>

                <S.Content>
                    <S.SubTitle>지원자 현황</S.SubTitle>
                    <S.MainTable>
                        <S.StyledThead>
                            <S.StyledTr>
                                <S.Tagth $isleft={'true'}>지원자명</S.Tagth>
                                <S.Tagth $isleft={'false'}></S.Tagth>
                            </S.StyledTr>
                        </S.StyledThead>
                        <tbody>
                            {posts?.map((item, i, array) => (
                                <tr key={item.id}>
                                    <S.StyledTd
                                        $state={item.is_canceled}
                                        style={{
                                            borderRadius:
                                                i !== array.length - 1
                                                    ? 'none'
                                                    : '0 0 15px 15px',
                                        }}
                                    >
                                        <S.User>
                                            <img src={User} alt="UserImage" />
                                            {item.applicant_name}
                                        </S.User>
                                        {item.is_canceled ? (
                                            <S.CancelBox>
                                                지원이 취소되었습니다.
                                            </S.CancelBox>
                                        ) : (
                                            <S.BtnContainer>
                                                <S.ShowBtn
                                                    onClick={() => {
                                                        // setItem(i);
                                                        // handleClick(i, item.id);
                                                        // // setShowApply(true);
                                                        // setidNum(item.id);
                                                        // setidName(
                                                        //     item.memberName,
                                                        // );
                                                        // ClickOpen(
                                                        //     item.id,
                                                        //     item.state,
                                                        // );
                                                        window.open(
                                                            `${window.location.origin}/application/${item.id}`,
                                                            '_blank',
                                                        );
                                                    }}
                                                >
                                                    지원서 보기
                                                    <img
                                                        src={arrow}
                                                        alt="arrow"
                                                    />
                                                </S.ShowBtn>
                                                {item.portfolio_id && (
                                                    <S.ShowPortBtn
                                                        onClick={() => {
                                                            // 포트폴리오 보기 로직 추가
                                                        }}
                                                    >
                                                        포트폴리오 보기
                                                    </S.ShowPortBtn>
                                                )}
                                            </S.BtnContainer>
                                        )}
                                        <S.TableBox>
                                            {!item.is_canceled &&
                                                statuses[i] === 'gray' && (
                                                    <S.GrayBox
                                                        onClick={() =>
                                                            handleBoxClick(i)
                                                        }
                                                    />
                                                )}
                                            {!item.is_canceled &&
                                                statuses[i] === 'black' && (
                                                    <S.BlackBox
                                                        onClick={() =>
                                                            handleBoxClick(i)
                                                        }
                                                    />
                                                )}
                                            {!item.is_canceled &&
                                                statuses[i] ===
                                                    'notSelected' && (
                                                    <S.StateBtn
                                                        $bg={({ theme }) =>
                                                            theme.LightGrey
                                                        }
                                                    >
                                                        미선발
                                                    </S.StateBtn>
                                                )}
                                            {!item.is_canceled &&
                                                statuses[i] === 'selected' && (
                                                    <S.StateBtn
                                                        $bg={({ theme }) =>
                                                            theme.box1
                                                        }
                                                    >
                                                        합류 완료
                                                    </S.StateBtn>
                                                )}
                                        </S.TableBox>
                                    </S.StyledTd>
                                </tr>
                            ))}
                        </tbody>
                    </S.MainTable>
                    <S.ButtonContainer>
                        <S.NotSelectedBtn onClick={handleNotSelectedClick}>
                            미선발
                        </S.NotSelectedBtn>
                        <S.SelectedBtn onClick={handleSelectedClick}>
                            합류하기
                        </S.SelectedBtn>
                    </S.ButtonContainer>
                </S.Content>
                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadApplyList}
                />
            </S.GlobalBox>
        </div>
    );
};

export default ProfileRecruit;
