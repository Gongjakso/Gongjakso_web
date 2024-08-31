import React, { useEffect, useState } from 'react';
import * as S from './ProfileRecruit.styled';
import User from '../../assets/images/My_page_big.svg';
import arrow from '../../assets/images/Arrow.svg';
import MyPageTeam from '../../features/modal/MyPageTeam';
import ClickApply from '../../features/modal/ClickApply';
import Pagination from '../../components/Pagination/Pagination';
import {
    getApplyList,
    getRecruitTeam,
    patchOpen,
} from '../../service/apply_service';
import { useParams } from 'react-router-dom';
import useCustomNavigate from '../../hooks/useNavigate';

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

    const [postId, setpostId] = useState(id);

    const [recruitTeam, setRecruitTeam] = useState([]);

    const [statuses, setStatuses] = useState(
        posts.map(() => 'gray'), // 초기 상태는 모두 'gray'로 설정
    );

    // 상태를 로컬 스토리지에 저장하는 함수
    const saveStatusesToLocalStorage = newStatuses => {
        localStorage.setItem('statuses', JSON.stringify(newStatuses));
    };

    // 로컬 스토리지에서 상태를 불러오는 함수
    const loadStatusesFromLocalStorage = () => {
        const savedStatuses = localStorage.getItem('statuses');
        return savedStatuses
            ? JSON.parse(savedStatuses)
            : posts.map(() => 'gray');
    };

    const handleBoxClick = index => {
        const newStatuses = [...statuses];
        newStatuses[index] = newStatuses[index] === 'gray' ? 'black' : 'gray';
        setStatuses(newStatuses);
        saveStatusesToLocalStorage(newStatuses); // 상태 저장
    };

    const handleNotSelectedClick = () => {
        const newStatuses = statuses.map(status =>
            status === 'black' ? 'notSelected' : status,
        );
        setStatuses(newStatuses);
        saveStatusesToLocalStorage(newStatuses); // 상태 저장
    };

    const handleSelectedClick = () => {
        const newStatuses = statuses.map(status =>
            status === 'black' ? 'selected' : status,
        );
        setStatuses(newStatuses);
        saveStatusesToLocalStorage(newStatuses); // 상태 저장
    };

    // 목데이터 설정
    const mockApplyList = [
        {
            apply_id: 1,
            name: '지원자 A',
            is_canceled: false,
        },
        {
            apply_id: 2,
            name: '지원자 B',
            is_canceled: false,
        },
        {
            apply_id: 3,
            name: '지원자 C',
            is_canceled: false,
        },
        {
            apply_id: 4,
            name: '지원자 D',
            is_canceled: true,
        },
    ];

    const mockRecruitTeam = {
        title: '모집 중인 프로젝트 팀',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        max_person: 5,
        current_person: 3,
        postType: true, // true: 프로젝트 / false: 공모전
    };

    useEffect(() => {
        setTotalPage(1); // 페이지 총 개수 설정
        setPosts(mockApplyList); // 지원자 리스트 설정
        setRecruitTeam(mockRecruitTeam); // 모집 팀 정보 설정

        // statuses를 posts 배열에 맞게 설정
        setStatuses(mockApplyList.map(() => 'gray')); // 여기서 statuses 상태 초기화
    }, []);

    const loadApplyList = page => {
        // 페이지네이션에 따라 목데이터를 불러올 수 있지만, 현재는 단일 페이지로 설정
        setPage(page);
    };

    const ClickOpen = (id, state) => {
        if (state === '미열람') {
            patchOpen(id);
        }
    };

    // 현재상태 버튼 -> 체크박스 추가(수정 전)
    const handleClick = (index, id) => {
        const newData = [...posts]; // 데이터 복사
        const dataIndex = newData.findIndex(item => item.id === id);
        if (dataIndex !== -1) {
            newData[dataIndex].open = true; // 해당 데이터의 open 값을 true로 변경
            setPosts(newData); // 상태 업데이트
        } else {
            console.error(`ID ${id}에 해당하는 데이터를 찾을 수 없습니다.`);
        }
    };

    // 활동기간 수정 함수
    const formatDate = dateString => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    return (
        <div>
            {finish ? (
                <MyPageTeam
                    teamCase={teamCase[0]}
                    CloseModal={setFinish}
                    id={postId}
                />
            ) : extend ? (
                <MyPageTeam
                    teamCase={teamCase[1]}
                    CloseModal={setExtend}
                    id={postId}
                />
            ) : cancel ? (
                <MyPageTeam
                    teamCase={teamCase[2]}
                    CloseModal={setCancel}
                    id={postId}
                />
            ) : showApply ? (
                <ClickApply
                    setShowApply={setShowApply}
                    item={item}
                    type={recruitTeam.postType}
                    idNum={idNum}
                    idName={idName}
                    id={postId}
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
                                활동기간 | {formatDate(recruitTeam?.startDate)}{' '}
                                ~{formatDate(recruitTeam?.endDate)}
                            </S.InsideDetail>
                            <S.InsideDetail>
                                모집인원 | {recruitTeam?.max_person}
                            </S.InsideDetail>
                        </S.DetailGlobal>
                    </S.Border>
                    <S.InsideBox>
                        <S.GlobalBox2>
                            <S.DetailGlobal2>
                                <S.InsideTitle $title={'false'}>
                                    현재 모집 현황
                                    <S.TagNUM>
                                        {recruitTeam?.current_person}/
                                        {recruitTeam?.max_person}
                                    </S.TagNUM>
                                </S.InsideTitle>
                            </S.DetailGlobal2>

                            {/* true: 프로젝트 / false: 공모전 */}
                            <S.Postcheck
                                onClick={() => {
                                    if (recruitTeam?.postType) {
                                        navigate(`/project/${id}`);
                                    } else {
                                        navigate(`/contest/${id}`);
                                    }
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
                                <tr key={item.apply_id}>
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
                                            {item.name}
                                        </S.User>
                                        {item.is_canceled ? (
                                            <S.CancelBox>
                                                지원이 취소되었습니다.
                                            </S.CancelBox>
                                        ) : (
                                            <S.BtnContainer>
                                                <S.ShowBtn
                                                    onClick={() => {
                                                        setItem(i);
                                                        handleClick(i, item.id);
                                                        setShowApply(true);
                                                        setidNum(item.apply_id);
                                                        setidName(item.name);
                                                        ClickOpen(
                                                            item.apply_id,
                                                            item.state,
                                                        );
                                                    }}
                                                >
                                                    지원서 보기
                                                    <img
                                                        src={arrow}
                                                        alt="arrow"
                                                    />
                                                </S.ShowBtn>

                                                <S.ShowPortBtn
                                                    onClick={() => {
                                                        //api 연결 예정
                                                    }}
                                                >
                                                    포트폴리오 보기
                                                </S.ShowPortBtn>
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
