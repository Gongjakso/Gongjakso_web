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
import {
    getPostDetail,
    postScrap,
    getScrap,
    getMyPortfolio,
    deleteScrap,
} from '../../service/post_service';
import ApplyCancel from '../../features/modal/ApplyCancel';

const DetailPageContest = () => {
    const navigate = useCustomNavigate();
    const { contest_id, team_id } = useParams();

    // [APPLIER] 지원서 모달창 띄우는 경우
    const [showApply, setShowApply] = useState(false);
    const [idNum, setidNum] = useState('');
    const [idName, setidName] = useState('');

    // 지원하기 버튼
    const [apply, setApply] = useState(false);

    // 지원체크 버튼
    const [applyCheck, setApplyCheck] = useState(false);

    // 지원완료 버튼
    const [completed, setCompleted] = useState(false);

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

    // 선택한 지원 분야 배열
    const [clickedFields, setClickedFields] = useState(null);

    // 나의 포트폴리오 존재 유무
    const [havePortfolio, setHavePortfolio] = useState(true);

    // 포트폴리오 만들러가기 버튼
    const [goToMy, setgoToMy] = useState(false);

    // 포트폴리오 비공개 여부
    const [isclosed, setIsClosed] = useState(true);

    // 포트폴리오 노션, 파일 여부
    const [isExisted, setIsExisted] = useState(false);

    // 포트폴리오 선택 배열
    const [clickedPort, setClickedPort] = useState(null);

    // 스크롤 내리기 관련
    const scrollToRef = useRef(null);

    // ** API 관련 변수 **
    const [postData, setpostData] = useState([]);

    // 모집하는 지원 분야
    const [category, setCategory] = useState([]);

    // 포트폴리오 데이터
    const [portfolioData, setportfolioData] = useState([]);
    const [portfolioId, setportfolioId] = useState('');
    const [portDatatype, setportDatatype] = useState('');

    // 스크랩
    const [scrapNum, setscrapNum] = useState();
    const [scrapStatus, setscrapStatus] = useState('');

    // 사용자 상태
    const [checkStatus, setcheckStatus] = useState(''); // GENERAL/LEADER/APPLIER
    const [applyType, setapplyType] = useState(''); // 현재 지원자 선발 여부 (타이틀 옆 상태 표기)

    const [postId] = useState(team_id);
    const [applyId, setApplyId] = useState();

    // GA 이벤트를 위한 설정
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

    useEffect(() => {
        // [GET] 공고 상세페이지 팀 조회 API
        getPostDetail(contest_id, team_id).then(res => {
            setpostData(res?.data);
            setcheckStatus(res?.data.team_role);
            setCategory(res?.data.recruit_part);
            setscrapNum(res?.data.scrap_count);
            setapplyTitle(res?.data.title);
            setApplyId(res?.data.apply_id);

            if (res?.data.team_role === 'APPLIER') {
                setapplyType(res?.data.apply_status);
                setuserId(res?.data.apply_id);
            }
        });

        // [GET] 공고 상세페이지 팀 스크랩 여부 조회 API
        getScrap(team_id).then(res => {
            setscrapStatus(res?.data.is_scrap);
        });
    }, [contest_id, team_id]);

    useEffect(() => {
        if (apply) {
            // [GET] 내 포트폴리오 리스트 조회 API
            getMyPortfolio().then(res => {
                setportfolioData(res?.data);
                setHavePortfolio(res?.data[0]?.isRegistered);
            });
        }
    }, [apply]);

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
            // [DELETE] 공고 상세페이지 팀 스크랩 취소 API
            deleteScrap(team_id).then(res => {
                setscrapNum(scrapNum - 1);
                ReactGA.event({
                    category: 'Scrap button',
                    action: '게시물 스크랩 취소',
                });
            });
        } else {
            // [POST] 공고 상세페이지 팀 스크랩 API
            postScrap(team_id).then(res => {
                setscrapNum(res?.data?.scrap_count);
                ReactGA.event({
                    category: 'Scrap button',
                    action: '게시물 스크랩',
                });
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

            if (item === '노션') {
                setIsExisted(true);
                setportDatatype('NOTION');
            } else if (item === '파일') {
                setIsExisted(true);
                setportDatatype('FILE');
            } else {
                setIsExisted(false);
                setportDatatype('');
            }
        }
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
        const baseFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize,
        );
        const pxToRem = px => px / baseFontSize;

        textarea.current.style.height = 'auto';
        textarea.current.style.height = `${pxToRem(textarea.current.scrollHeight)}rem`;
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
            {/* 지원하기 모달 */}
            {applyCheck && (
                <Completed
                    case={1}
                    setApplyCheck={setApplyCheck}
                    clickedFields={clickedFields}
                    clickedPortId={portfolioId}
                    inputValue={inputValue}
                    setCompleted={setCompleted}
                    isclosed={isclosed}
                    dataType={portDatatype}
                    title={applyTitle}
                    id={team_id}
                />
            )}

            {/* 지원이 완료되었습니다 모달 */}
            {completed === true ? (
                <Completed case={2} title={applyTitle} />
            ) : null}

            {/* 포트폴리오 만들러가기 모달 */}
            {goToMy && <Completed case={3} setgoToMy={setgoToMy} />}

            {/* {showApply && (
                <ClickApply
                    setShowApply={setShowApply}
                    type={false}
                    idNum={idNum}
                    idName={idName}
                    recruitPart={category}
                    id={postId}
                />
            )} */}

            {/* 지원 취소 모달ㄹ */}
            {showCancel ? (
                <ApplyCancel
                    CloseModal={setshowCancel}
                    id={postId}
                    applyId={userId}
                    title={applyTitle}
                />
            ) : null}

            <S.Layout>
                <S.Background $s="77rem" $mgt="1.8rem" $Ms="100%">
                    <S.BgButton>
                        <img
                            src={Close}
                            alt="Close-button"
                            onClick={() => navigate(-1)} // 뒤로가기 버튼
                        />
                    </S.BgButton>

                    {checkStatus === 'APPLIER' ? (
                        <div>
                            <S.Title checkStatus={checkStatus}>
                                <p>{postData?.title}</p>
                                <S.BtnLayout>
                                    {applyType === '합류 완료' ? (
                                        <S.Status
                                            $bg={({ theme }) => theme.box1}
                                        >
                                            합류 완료
                                        </S.Status>
                                    ) : applyType === '미선발' ? (
                                        <S.Status
                                            $bg={({ theme }) => theme.LightGrey}
                                        >
                                            미선발
                                        </S.Status>
                                    ) : (
                                        <S.Status
                                            $bg={({ theme }) => theme.Light1}
                                        >
                                            합류 대기중
                                        </S.Status>
                                    )}

                                    <S.ApplyBtn
                                        onClick={() => {
                                            window.open(
                                                `${window.location.origin}/application/${applyId}`,
                                                '_blank',
                                            );
                                        }}
                                    >
                                        지원서 보기
                                        <img src={arrow} />
                                    </S.ApplyBtn>
                                </S.BtnLayout>
                            </S.Title>
                        </div>
                    ) : (
                        <S.Title checkStatus={checkStatus}>
                            <p>{postData?.title}</p>
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

                <S.Background $s="75.5rem" $Ms="100%">
                    <S.BlueBox $bg={({ theme }) => theme.Light1}>
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
                                {category?.map((item, i) => (
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
                            <S.OpenKakao $w="13rem" $Mww="12rem">
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
                            <S.OpenKakao $w="10rem" $Mww="9rem">
                                {postData?.channel_method ? (
                                    <img
                                        src={OpenKakao}
                                        alt="kakao-link"
                                        onClick={() => {
                                            openNewWindow(
                                                postData?.channel_link,
                                            );
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={googleform}
                                        alt="googleForm-link"
                                        onClick={() => {
                                            openNewWindow(
                                                postData?.channel_link,
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
                        <S.MainText>{postData?.body}</S.MainText>

                        {checkStatus === 'LEADER' ? (
                            <div></div>
                        ) : (
                            <S.Globalstyle2>
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
                                    <S.CancelButton
                                        $bc="none"
                                        $bg={({ theme }) => theme.LightGrey}
                                        onClick={() => {
                                            setshowCancel(true);
                                        }}
                                    >
                                        지원 취소
                                    </S.CancelButton>
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
                            </S.Globalstyle2>
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
                                                        `${window.location.origin}/profile`,
                                                        '_blank',
                                                    );
                                                }}
                                            ></img>
                                        )}
                                    </S.TitleFormBox>

                                    {havePortfolio ? (
                                        <T.FormBox>
                                            {portfolioData?.map((item, i) => (
                                                <>
                                                    {/* isExistedPortfolio가 true일 때 NOTION, FILE, HYBRID을 구분 */}
                                                    {item.isExistedPortfolio ? (
                                                        item.dataType ===
                                                        'NOTION' ? (
                                                            // dataType이 NOTION일 때
                                                            <T.PortForm
                                                                key={`notion-${i}`}
                                                                $isselected={
                                                                    clickedPort ===
                                                                    '노션'
                                                                }
                                                                onClick={() => {
                                                                    ClickForm(
                                                                        'Port',
                                                                        '노션',
                                                                    );
                                                                    setportfolioId(
                                                                        item.PortfolioId,
                                                                    );
                                                                }}
                                                            >
                                                                노션 포트폴리오
                                                            </T.PortForm>
                                                        ) : item.dataType ===
                                                          'FILE' ? (
                                                            // dataType이 FILE일 때
                                                            <T.PortForm
                                                                key={`file-${i}`}
                                                                $isselected={
                                                                    clickedPort ===
                                                                    '파일'
                                                                }
                                                                onClick={() => {
                                                                    ClickForm(
                                                                        'Port',
                                                                        '파일',
                                                                    );
                                                                    setportfolioId(
                                                                        item.PortfolioId,
                                                                    );
                                                                }}
                                                            >
                                                                PDF 포트폴리오
                                                            </T.PortForm>
                                                        ) : item.dataType ===
                                                          'HYBRID' ? (
                                                            // dataType이 HYBRID일 때
                                                            <>
                                                                <T.PortForm
                                                                    key={`hybrid-notion-${i}`}
                                                                    $isselected={
                                                                        clickedPort ===
                                                                        '노션'
                                                                    }
                                                                    onClick={() => {
                                                                        ClickForm(
                                                                            'Port',
                                                                            '노션',
                                                                        );
                                                                        setportfolioId(
                                                                            item.PortfolioId,
                                                                        );
                                                                    }}
                                                                >
                                                                    노션
                                                                    포트폴리오
                                                                </T.PortForm>
                                                                <T.PortForm
                                                                    key={`hybrid-file-${i}`}
                                                                    $isselected={
                                                                        clickedPort ===
                                                                        '파일'
                                                                    }
                                                                    onClick={() => {
                                                                        ClickForm(
                                                                            'Port',
                                                                            '파일',
                                                                        );
                                                                        setportfolioId(
                                                                            item.PortfolioId,
                                                                        );
                                                                    }}
                                                                >
                                                                    PDF
                                                                    포트폴리오
                                                                </T.PortForm>
                                                            </>
                                                        ) : (
                                                            <T.PortForm
                                                                key={`other-${i}`}
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
                                                                {item.dataType}
                                                            </T.PortForm>
                                                        )
                                                    ) : (
                                                        // isExistedPortfolio가 false일 때
                                                        <T.PortForm
                                                            key={`portfolio-${i}`}
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
                                                    )}
                                                </>
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
                                            <T.RoundForm $isselected={isclosed}>
                                                비공개
                                            </T.RoundForm>
                                        </T.FormBox>
                                    )}
                                </T.DetailBox>

                                <T.DetailBox>
                                    <T.SubTitle>지원 이유</T.SubTitle>
                                    <T.TextBox>
                                        <T.InputArea
                                            $maxHeight="35rem"
                                            ref={textarea}
                                            onChange={onInputHandler}
                                            onInput={handleResizeHeight}
                                            maxLength={'1000'}
                                            rows={1}
                                            placeholder={
                                                '* 해당 공모전 팀에 합류하고 싶은 이유를 작성해주세요! (최대 1000자)'
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
                                        $w="18rem"
                                        $Mw="20rem"
                                        $Mww="25rem"
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
