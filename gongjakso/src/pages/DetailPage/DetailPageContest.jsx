import React, { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga';
import { useParams } from 'react-router-dom';
import * as S from './DetailPageStyled';
import * as T from '../../features/modal/ApplyModal.styled';
import useCustomNavigate from '../../hooks/useNavigate';
import Close from '../../assets/images/Close.svg';
import Logo from '../../assets/images/BlackLogo.svg';
import ScrapNum from '../../assets/images/UnScrap.svg';
import Place from '../../assets/images/Place.svg';
import OpenKakao from '../../assets/images/OpenKakaoLink.svg';
import DoScrap from '../../assets/images/Scrap.svg';
import arrow from '../../assets/images/Arrow.svg';
import googleform from '../../assets/images/GoogleFormLink.svg';
import postLink from '../../assets/images/postLink.svg';
import MypageLink from '../../assets/images/MypageLink.svg';
import goPortfolio from '../../assets/images/goPortfolio.svg';
import Completed from '../../features/modal/Completed';
import ClickApply from '../../features/modal/ClickApply';
import {
    getPostDetail,
    postScrap,
    getScrap,
    getCheckStatus,
    getMyPortfolio,
    deleteScrap,
} from '../../service/post_service';
import ClickmyApply from '../../features/modal/ClickmyApply';
import { getMyApplication } from '../../service/apply_service';
import ApplyCancel from '../../features/modal/ApplyCancel';

const DetailPageContest = () => {
    const navigate = useCustomNavigate();
    const { contest_id, team_id } = useParams();

    // 지원서 모달창 띄우는 경우
    const [showApply, setShowApply] = useState(false);
    const [idNum, setidNum] = useState('');
    const [idName, setidName] = useState('');

    // 지원하기 버튼
    const [apply, setApply] = useState(false);

    // 지원체크 버튼
    const [applyCheck, setApplyCheck] = useState(false);

    // 지원완료 버튼
    const [completed, setCompleted] = useState(false);

    // 지원자 지원서 열람
    const [myAppOpen, setmyAppOpen] = useState(false);

    // 지원자 지원취소 모달
    const [showCancel, setshowCancel] = useState(false);

    // 공고 제목
    const [applyTitle, setapplyTitle] = useState('');

    // 지원자 applyId
    const [userId, setuserId] = useState('');

    // ** 지원서 작성 파트 **
    const [showWarning, setShowWarning] = useState(false); // 주의사항 여부

    const [inputCount, setInputCount] = useState(0); // 글자 수
    const [inputValue, setInputValue] = useState(''); // 지원 이유

    const [clickedFields, setClickedFields] = useState(null); // 지원 분야 배열

    // [TODO] 나의 포트폴리오 존재 유무!!!!!!
    const [havePortfolio, setHavePortfolio] = useState(true);

    // 포트폴리오 만들러가기 버튼
    const [goToMy, setgoToMy] = useState(false);

    // 포트폴리오 비공개 여부
    const [isclosed, setIsClosed] = useState(true);

    // 포트폴리오 선택 배열
    const [clickedPort, setClickedPort] = useState(null);

    // 스크롤 내리기 관련
    const scrollToRef = useRef(null);

    // ** API 관련 변수 **
    const [postData, setpostData] = useState([]);

    // TODO: category mockdata 설정 (api 구현 후 수정 예정)
    const [category, setCategory] = useState([]);

    const [portfolioData, setportfolioData] = useState([]);
    const [portfolioId, setportfolioId] = useState('');

    const [scrapNum, setscrapNum] = useState();
    const [scrapStatus, setscrapStatus] = useState('');
    const [checkStatus, setcheckStatus] = useState('');
    const [applyType, setapplyType] = useState('');

    const [postId] = useState(team_id);

    // GA 이벤트를 위한 설정
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

    useEffect(() => {
        getPostDetail(contest_id, team_id).then(res => {
            setpostData(res?.data);
            setcheckStatus(res?.data.team_role);
            setCategory(res?.data.recruit_part);
            setscrapNum(res?.data.scrap_count);
            setapplyTitle(res?.data.title);
        });

        getScrap(team_id).then(res => {
            setscrapStatus(res?.data.is_scrap);
            console.log(res);
        });
    }, [contest_id, team_id]);

    useEffect(() => {
        if (apply) {
            getMyPortfolio().then(res => {
                setportfolioData(res?.data);
            });
        }
    }, [apply]);

    // useEffect(() => {
    //     checkStatus가 'APPLICANT'이고, id가 변경될 때마다 실행
    //     if (checkStatus === 'APPLICANT') {
    //         getMyApplication(id).then(res => {
    //             setapplyType(res?.data.applyType);
    //             setuserId(res?.data.applyId);
    //         });
    //     }
    // }, [checkStatus, id]);

    // 활동기간 수정 함수
    const formatDate = dateString => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    // 스크랩 POST
    const ClickScrapBtn = () => {
        if (scrapStatus) {
            deleteScrap(team_id).then(res => {
                setscrapNum(scrapNum - 1);
                ReactGA.event({
                    category: 'Scrap button',
                    action: '게시물 스크랩 취소',
                });
                console.log(res);
            });
        } else {
            postScrap(team_id).then(res => {
                setscrapNum(res?.data?.scrap_count);
                ReactGA.event({
                    category: 'Scrap button',
                    action: '게시물 스크랩',
                });
                console.log(res);
            });
        }

        setscrapStatus(current => !current);
    };

    // 링크 이동
    const openNewWindow = linkurl => {
        if (!/^https?:\/\//i.test(linkurl)) {
            linkurl = 'https://' + linkurl;
        }
        window.open(linkurl, '_blank');
    };

    // 폼 선택
    const ClickForm = (type, item) => {
        if (type === 'fields') {
            setClickedFields(item);
        } else if (type === 'Port') {
            setClickedPort(item);
            setIsClosed(item === 'none');
        }
    };

    // 포트폴리오 비공개 버튼
    const isClosedClick = () => {
        setIsClosed(!isclosed);
    };

    // 지원서 폼 자동 스크롤 관련
    useEffect(() => {
        if (apply && scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [apply]);

    // 지원 이유 작성란 기능 설정
    const textarea = useRef();
    const handleResizeHeight = () => {
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };
    const onInputHandler = e => {
        if (e.target.value.length > 1000) {
            e.target.value = e.target.value.slice(0, 1000);
        }
        setInputCount(e.target.value.length);
        setInputValue(e.target.value);
    };

    // 필수 항목 검사
    const WarningApply = () => {
        if (clickedFields === null) {
            setShowWarning(true);
        } else {
            // 필수항목이 선택되었을 때만 post 처리
            setApplyCheck(true);
        }
    };

    return (
        <>
            {myAppOpen ? (
                <ClickmyApply id={postId} setOpen={setmyAppOpen} type={false} />
            ) : null}

            {applyCheck && (
                <Completed
                    case={1}
                    setApplyCheck={setApplyCheck}
                    clickedFields={clickedFields}
                    clickedPortId={portfolioId}
                    inputValue={inputValue}
                    setCompleted={setCompleted}
                    isclosed={isclosed}
                    title={applyTitle}
                    id={team_id}
                />
            )}

            {/* 지원완료 모달 (확인사살 모달 아님!) */}
            {completed === true ? <Completed case={2} /> : null}

            {goToMy && <Completed case={3} setgoToMy={setgoToMy} />}
            {showApply && (
                <ClickApply
                    setShowApply={setShowApply}
                    type={false}
                    idNum={idNum}
                    idName={idName}
                    recruitPart={category}
                    id={postId}
                />
            )}
            {showCancel ? (
                <ApplyCancel
                    CloseModal={setshowCancel}
                    type={postData?.postType}
                    id={postId}
                    applyId={userId}
                    title={applyTitle}
                />
            ) : null}

            <S.Layout>
                <S.Background $s="1150px" $mgt="50px">
                    <S.BgButton>
                        <img
                            src={Close}
                            alt="Close-button"
                            onClick={() => navigate(-1)} // 뒤로가기 버튼
                        />
                    </S.BgButton>

                    {checkStatus === 'APPLIER' ? (
                        <div>
                            <S.Title>
                                <img src={Logo} alt="title-logo" />
                                <p>{postData?.title}</p>
                                <img src={Logo} alt="title-logo" />
                            </S.Title>
                            <S.BtnLayout>
                                {applyType === 'PASS' ? (
                                    <S.Status $bg={({ theme }) => theme.box1}>
                                        합류 완료
                                    </S.Status>
                                ) : applyType === 'NOT_PASS' ? (
                                    <S.Status
                                        $bg={({ theme }) => theme.LightGrey}
                                    >
                                        미선발
                                    </S.Status>
                                ) : (
                                    <S.Status $bg={({ theme }) => theme.Light1}>
                                        합류 대기중
                                    </S.Status>
                                )}

                                <S.ApplyBtn
                                    onClick={() => {
                                        setmyAppOpen(true);
                                    }}
                                >
                                    지원서 보기
                                    <img src={arrow} />
                                </S.ApplyBtn>
                            </S.BtnLayout>
                        </div>
                    ) : (
                        <S.Title>
                            <img src={Logo} alt="title-logo" />
                            <p>{postData?.title}</p>
                            <img src={Logo} alt="title-logo" />
                        </S.Title>
                    )}

                    <S.TitleBox>
                        <S.TitleBottom>
                            팀장 : {postData?.leader_name}
                        </S.TitleBottom>
                        <S.TitleBottom>스크랩 수 : {scrapNum}회</S.TitleBottom>
                        <S.TitleBottom>
                            조회수 : {postData?.view_count}회
                        </S.TitleBottom>
                    </S.TitleBox>
                </S.Background>

                <S.Background $s="1100px">
                    <S.BlueBox
                        $bg={({ theme }) => theme.Light1}
                        $boxSize={apply ? '2500px' : '1400px'}
                    >
                        <S.TextBox>
                            <S.TextTitle>진행 기간</S.TextTitle>
                            <S.TextDetail>
                                {formatDate(postData?.started_at)} ~{' '}
                                {formatDate(postData?.finished_at)}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>모집 현황</S.TextTitle>
                            <S.TextDetail>
                                {postData?.pass_count}/{postData?.total_count}{' '}
                                명
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>모집 분야</S.TextTitle>
                            <S.TextDetail>
                                {category.map((item, i) => (
                                    <S.RoundForm key={i}>
                                        {`${item.position} ${item.recruit_count - item.pass_count}`}
                                    </S.RoundForm>
                                ))}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>회의 방식</S.TextTitle>
                            <S.TextDetail>
                                {postData?.meeting_method === '오프라인' && (
                                    <S.RoundForm>오프라인</S.RoundForm>
                                )}
                                {postData?.meeting_method === '온라인' && (
                                    <S.RoundForm>온라인</S.RoundForm>
                                )}
                                {postData?.meeting_method === '하이브리드' && (
                                    <>
                                        <S.RoundForm>온라인</S.RoundForm>
                                        <S.RoundForm>오프라인</S.RoundForm>
                                    </>
                                )}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>회의 지역</S.TextTitle>
                            <S.Meeting>
                                <img src={Place} alt="place-icon" />
                                <span>
                                    {postData?.province} {postData?.district}
                                </span>
                            </S.Meeting>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>공모전 홈페이지</S.TextTitle>
                            <S.OpenKakao $w="185px">
                                <img
                                    src={postLink}
                                    alt="homepage-link"
                                    onClick={() => {
                                        openNewWindow(postData?.contest_link);
                                    }}
                                />
                            </S.OpenKakao>
                        </S.TextBox>
                        <S.TextBox>
                            {/* kakao : True, google : False */}
                            <S.TextTitle>기타 문의</S.TextTitle>
                            <S.OpenKakao $w="140px">
                                {postData?.channel_method ? (
                                    <img
                                        src={OpenKakao}
                                        alt="kakao-link"
                                        onClick={() => {
                                            openNewWindow(
                                                postData?.contest_link,
                                            );
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={googleform}
                                        alt="googleForm-link"
                                        onClick={() => {
                                            openNewWindow(
                                                postData?.contest_link,
                                            );
                                        }}
                                    />
                                )}
                            </S.OpenKakao>
                        </S.TextBox>
                        <S.Line />
                        <S.TextBox>
                            <S.TextTitle>설명글</S.TextTitle>
                        </S.TextBox>
                        <S.MainText $h="400px">{postData?.body}</S.MainText>

                        {checkStatus === 'LEADER' ? (
                            <div></div>
                        ) : (
                            <S.Globalstyle>
                                <S.ScrapButton
                                    $bc={({ theme }) => theme.Green}
                                    $click={scrapStatus?.toString()}
                                    onClick={ClickScrapBtn}
                                >
                                    <img
                                        src={scrapStatus ? DoScrap : ScrapNum}
                                        alt="scrap-button"
                                    />
                                    <span>스크랩하기</span>
                                </S.ScrapButton>
                                {checkStatus === 'APPLIER' ? (
                                    <S.ApplyButton
                                        $bc="none"
                                        $bg={({ theme }) => theme.LightGrey}
                                        onClick={() => {
                                            setshowCancel(true);
                                        }}
                                    >
                                        지원 취소
                                    </S.ApplyButton>
                                ) : (
                                    <S.ApplyButton
                                        $apply={apply}
                                        onClick={() => {
                                            setApply(true);
                                        }}
                                    >
                                        지원서 작성하기
                                    </S.ApplyButton>
                                )}
                            </S.Globalstyle>
                        )}

                        {apply ? (
                            <div ref={scrollToRef}>
                                <S.ApplicationBg>
                                    <S.ApplicationTitle>
                                        {postData?.title}
                                    </S.ApplicationTitle>
                                </S.ApplicationBg>
                                <T.DetailBox>
                                    <T.WarningBox>
                                        <T.SubTitle>지원 분야</T.SubTitle>
                                        {showWarning && (
                                            <T.WarningTitle>
                                                * 지원 분야를 선택해주세요!
                                            </T.WarningTitle>
                                        )}
                                    </T.WarningBox>
                                    <T.FormBox>
                                        {category?.map((item, i) => (
                                            <T.RoundForm
                                                key={i}
                                                $isselected={
                                                    clickedFields ===
                                                    item.position
                                                }
                                                onClick={() =>
                                                    ClickForm(
                                                        'fields',
                                                        item.position,
                                                    )
                                                }
                                            >
                                                {item.position}
                                            </T.RoundForm>
                                        ))}
                                    </T.FormBox>
                                </T.DetailBox>

                                <T.DetailBox>
                                    <S.TitleFormBox>
                                        <T.SubTitle>나의 포트폴리오</T.SubTitle>
                                        {havePortfolio && (
                                            <img
                                                src={goPortfolio}
                                                alt="porfolio-link"
                                                onClick={() => {
                                                    window.open(
                                                        'http://localhost:3000/profile/useportfolio',
                                                        '_blank',
                                                    );
                                                }}
                                            ></img>
                                        )}
                                    </S.TitleFormBox>

                                    {havePortfolio ? (
                                        <T.FormBox>
                                            {portfolioData?.map((item, i) => (
                                                <T.PortForm
                                                    key={i}
                                                    $isselected={
                                                        clickedPort ===
                                                        item.PortfolioName
                                                    }
                                                    onClick={() => {
                                                        ClickForm(
                                                            'Port',
                                                            item.PortfolioName,
                                                        );
                                                        setportfolioId(
                                                            item.PortfolioId,
                                                        );
                                                    }}
                                                >
                                                    {item.PortfolioName}
                                                </T.PortForm>
                                            ))}
                                            <T.RoundForm
                                                $isselected={isclosed}
                                                onClick={() =>
                                                    ClickForm('Port', 'none')
                                                }
                                            >
                                                비공개
                                            </T.RoundForm>
                                        </T.FormBox>
                                    ) : (
                                        <T.FormBox>
                                            <img
                                                src={MypageLink}
                                                alt="mypage-link"
                                                onClick={() => {
                                                    setgoToMy(true);
                                                }}
                                            />
                                            <T.RoundForm
                                                $isselected={isclosed}
                                                onClick={isClosedClick}
                                            >
                                                비공개
                                            </T.RoundForm>
                                        </T.FormBox>
                                    )}
                                </T.DetailBox>

                                <T.DetailBox>
                                    <T.SubTitle>지원 이유</T.SubTitle>
                                    <T.TextBox>
                                        <T.InputArea
                                            $maxHeight="27rem"
                                            ref={textarea}
                                            onChange={onInputHandler}
                                            onInput={handleResizeHeight}
                                            maxLength={'1000'}
                                            rows={1}
                                            placeholder={
                                                '* 해당 공모전 팀에 합류하고 싶은 이유를 작성해주세요!(최대 1000자)'
                                            }
                                        ></T.InputArea>
                                        <T.InputNum>
                                            <span>{inputCount}</span>
                                            <span>/1000</span>
                                        </T.InputNum>
                                    </T.TextBox>
                                </T.DetailBox>

                                <T.ApplyBox>
                                    <S.ApplicationBtn
                                        $w="280px"
                                        onClick={WarningApply}
                                    >
                                        제출하기
                                    </S.ApplicationBtn>
                                </T.ApplyBox>
                            </div>
                        ) : (
                            ''
                        )}
                    </S.BlueBox>
                </S.Background>
            </S.Layout>
        </>
    );
};
export default DetailPageContest;
