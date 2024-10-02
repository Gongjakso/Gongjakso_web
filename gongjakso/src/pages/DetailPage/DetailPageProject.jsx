import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './DetailPageStyled';
import useCustomNavigate from '../../hooks/useNavigate';
import Close from '../../assets/images/Close.svg';
import Logo from '../../assets/images/BlackLogo.svg';
import ScrapNum from '../../assets/images/UnScrap.svg';
import Place from '../../assets/images/Place.svg';
import OpenKakao from '../../assets/images/OpenKakaoLink.svg';
import DoScrap from '../../assets/images/Scrap.svg';
import arrow from '../../assets/images/Arrow.svg';
import googleform from '../../assets/images/GoogleFormLink.svg';
import ApplyModal from '../../features/modal/ApplyModal';
import Completed from '../../features/modal/Completed';
import { getPostDetail, getScrap, postScrap } from '../../service/post_service';
import ClickmyApply from '../../features/modal/ClickmyApply';
import { getMyApplication } from '../../service/apply_service';
import ApplyCancel from '../../features/modal/ApplyCancel';

const DetailPageProject = () => {
    // const navigate = useCustomNavigate();
    // // 지원하기 버튼
    // const [apply, setApply] = useState(false);
    // // 지원체크 버튼
    // const [applyCheck, setApplyCheck] = useState(false);
    // // 지원완료 버튼
    // const [completed, setCompleted] = useState(false);
    // // 모달창 구분 목적
    // const [title] = useState(['프로젝트', 'project']);
    // // 지원자 지원서 열람
    // const [myAppOpen, setmyAppOpen] = useState(false);
    // // 지원자 지원취소 모달
    // const [showCancel, setshowCancel] = useState(false);
    // // 공고 제목
    // const [applyTitle, setapplyTitle] = useState('');
    // // 지원자 applyId
    // const [userId, setuserId] = useState('');
    // // API 관련 변수
    // const [postData, setpostData] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [stackType, setStackType] = useState([]);
    // const [scrapNum, setscrapNum] = useState();
    // const [scrapStatus, setscrapStatus] = useState('');
    // const [checkStatus, setcheckStatus] = useState('');
    // const [urlLink, seturlLink] = useState('');
    // const [applyType, setapplyType] = useState('');
    // const { id } = useParams();
    // const [postId] = useState(id);
    // useEffect(() => {
    //     getPostDetail(id).then(res => {
    //         setpostData(res?.data);
    //         setCategory(res?.data.categories);
    //         setscrapNum(res?.data.scrapCount);
    //         setStackType(res?.data.stackNames);
    //         setapplyTitle(res?.data.title);
    //     });
    //     getScrap(id).then(res => {
    //         setscrapStatus(res?.data.scrapStatus);
    //     });
    // }, [id]);
    // useEffect(() => {
    //     // checkStatus가 'APPLICANT'이고, id가 변경될 때마다 실행
    //     if (checkStatus === 'APPLICANT') {
    //         getMyApplication(id).then(res => {
    //             setapplyType(res?.data.applyType);
    //             setuserId(res?.data.applyId);
    //         });
    //     }
    // }, [checkStatus, id]);
    // // 활동기간 수정 함수
    // const formatDate = dateString => {
    //     const date = new Date(dateString);
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0');
    //     const day = String(date.getDate()).padStart(2, '0');
    //     return `${year}.${month}.${day}`;
    // };
    // // 스크랩 POST
    // const ClickScrapBtn = () => {
    //     postScrap(id).then(res => {
    //         setscrapNum(res?.data.scrapCount);
    //     });
    //     setscrapStatus(current => !current);
    // };
    // const openNewWindow = linkurl => {
    //     if (!/^https?:\/\//i.test(linkurl)) {
    //         linkurl = 'https://' + linkurl;
    //     }
    //     window.open(linkurl, '_blank');
    // };
    // return (
    //     <>
    //         {myAppOpen ? (
    //             <ClickmyApply id={postId} setOpen={setmyAppOpen} type={true} />
    //         ) : null}
    //         {apply === true ? (
    //             <ApplyModal
    //                 apply={apply}
    //                 setApply={setApply}
    //                 title={title}
    //                 setCompleted={setCompleted}
    //                 setApplyCheck={setApplyCheck}
    //                 category={category}
    //                 id={postId}
    //                 stackType={stackType}
    //             />
    //         ) : null}
    //         {/* 지원완료 모달 (확인사살 모달 아님!) */}
    //         {completed === true ? <Completed title={title} case={2} /> : null}
    //         {showCancel ? (
    //             <ApplyCancel
    //                 CloseModal={setshowCancel}
    //                 type={postData?.postType}
    //                 id={postId}
    //                 applyId={userId}
    //                 title={applyTitle}
    //             />
    //         ) : null}
    //         <S.Layout>
    //             <S.Background $s="1150px" $mgt="50px">
    //                 <S.BgButton>
    //                     <img
    //                         src={Close}
    //                         alt="Close-button"
    //                         onClick={() => navigate(-1)} // 뒤로가기 버튼
    //                     />
    //                 </S.BgButton>
    //                 {checkStatus === 'APPLICANT' ? (
    //                     <div>
    //                         <S.Title>
    //                             <img src={Logo} alt="title-logo" />
    //                             <p>{postData?.title}</p>
    //                             <img src={Logo} alt="title-logo" />
    //                         </S.Title>
    //                         <S.BtnLayout>
    //                             {applyType === 'PASS' ? (
    //                                 <S.Status $bg={({ theme }) => theme.box1}>
    //                                     합류 완료
    //                                 </S.Status>
    //                             ) : applyType === 'NOT_PASS' ? (
    //                                 <S.Status
    //                                     $bg={({ theme }) => theme.LightGrey}
    //                                 >
    //                                     미선발
    //                                 </S.Status>
    //                             ) : (
    //                                 <S.Status $bg={({ theme }) => theme.Light1}>
    //                                     합류 대기중
    //                                 </S.Status>
    //                             )}
    //                             <S.ApplyBtn
    //                                 onClick={() => {
    //                                     setmyAppOpen(true);
    //                                 }}
    //                             >
    //                                 지원서 보기
    //                                 <img src={arrow} />
    //                             </S.ApplyBtn>
    //                         </S.BtnLayout>
    //                     </div>
    //                 ) : (
    //                     <S.Title>
    //                         <img src={Logo} alt="title-logo" />
    //                         <p>{postData?.title}</p>
    //                         <img src={Logo} alt="title-logo" />
    //                     </S.Title>
    //                 )}
    //                 <S.TitleBox>
    //                     <S.TitleBottom>
    //                         팀장 : {postData?.memberName}
    //                     </S.TitleBottom>
    //                     <S.TitleBottom>스크랩 수 : {scrapNum}회</S.TitleBottom>
    //                     <S.TitleBottom>
    //                         조회수 : {postData?.postView}회
    //                     </S.TitleBottom>
    //                 </S.TitleBox>
    //             </S.Background>
    //             <S.Background $s="1100px">
    //                 <S.BlueBox
    //                     $bg={({ theme }) => theme.Pink}
    //                     $boxSize="1450px"
    //                 >
    //                     <S.TextBox>
    //                         <S.TextTitle>공고 마감일</S.TextTitle>
    //                         <S.TextDetail>
    //                             {formatDate(postData?.finishDate)}
    //                         </S.TextDetail>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>진행 기간</S.TextTitle>
    //                         <S.TextDetail>
    //                             {formatDate(postData?.startDate)} ~{' '}
    //                             {formatDate(postData?.endDate)}
    //                         </S.TextDetail>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>모집 현황</S.TextTitle>
    //                         <S.TextDetail>
    //                             {postData?.currentPerson}/{postData?.maxPerson}
    //                             명
    //                         </S.TextDetail>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>모집 분야</S.TextTitle>
    //                         <S.TextDetail>
    //                             {category?.map((item, i) => (
    //                                 <S.RoundForm key={i}>
    //                                     {item.categoryType === 'PLAN' &&
    //                                         `기획 ${item.size}`}
    //                                     {item.categoryType === 'DESIGN' &&
    //                                         `디자인 ${item.size}`}
    //                                     {item.categoryType === 'FE' &&
    //                                         `프론트엔드 ${item.size}`}
    //                                     {item.categoryType === 'BE' &&
    //                                         `백엔드 ${item.size}`}
    //                                     {item.categoryType === 'ETC' &&
    //                                         `기타 ${item.size}`}
    //                                     {item.categoryType === 'LATER' &&
    //                                         `추후조정 ${item.size}`}
    //                                 </S.RoundForm>
    //                             ))}
    //                         </S.TextDetail>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>기술 스택</S.TextTitle>
    //                         <S.TextDetail>
    //                             {stackType?.map((item, i) =>
    //                                 item.stackNameType === '' ? null : (
    //                                     <S.RoundForm key={i}>
    //                                         {item.stackNameType === 'REACT' &&
    //                                             'React'}
    //                                         {item.stackNameType ===
    //                                             'TYPESCRIPT' && 'TypeScript'}
    //                                         {item.stackNameType ===
    //                                             'JAVASCRIPT' && 'JavaScript'}
    //                                         {item.stackNameType === 'NEXTJS' &&
    //                                             'Next.js'}
    //                                         {item.stackNameType === 'NODEJS' &&
    //                                             'Node.js'}
    //                                         {item.stackNameType === 'JAVA' &&
    //                                             'Java'}
    //                                         {item.stackNameType === 'SPRING' &&
    //                                             'Spring'}
    //                                         {item.stackNameType === 'KOTLIN' &&
    //                                             'Kotlin'}
    //                                         {item.stackNameType === 'SWIFT' &&
    //                                             'Swift'}
    //                                         {item.stackNameType === 'FLUTTER' &&
    //                                             'Flutter'}
    //                                         {item.stackNameType === 'ETC' &&
    //                                             'etc'}
    //                                     </S.RoundForm>
    //                                 ),
    //                             )}
    //                         </S.TextDetail>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>회의 방식</S.TextTitle>
    //                         <S.TextDetail>
    //                             {postData?.meetingMethod === 'OFFLINE' && (
    //                                 <S.RoundForm>오프라인</S.RoundForm>
    //                             )}
    //                             {postData?.meetingMethod === 'ONLINE' && (
    //                                 <S.RoundForm>온라인</S.RoundForm>
    //                             )}
    //                             {postData?.meetingMethod === 'BOTH' && (
    //                                 <>
    //                                     <S.RoundForm>온라인</S.RoundForm>
    //                                     <S.RoundForm>오프라인</S.RoundForm>
    //                                 </>
    //                             )}
    //                         </S.TextDetail>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>회의 지역</S.TextTitle>
    //                         <S.Meeting>
    //                             <img src={Place} alt="place-icon" />
    //                             <span>
    //                                 {postData?.meetingCity}{' '}
    //                                 {postData?.meetingTown}
    //                             </span>
    //                         </S.Meeting>
    //                     </S.TextBox>
    //                     <S.TextBox>
    //                         <S.TextTitle>기타 문의</S.TextTitle>
    //                         <S.OpenKakao $w="140px">
    //                             {postData?.questionMethod ? (
    //                                 <img
    //                                     src={OpenKakao}
    //                                     alt="kakao-link"
    //                                     onClick={() => {
    //                                         openNewWindow(
    //                                             postData?.questionLink,
    //                                         );
    //                                     }}
    //                                 />
    //                             ) : (
    //                                 <img
    //                                     src={googleform}
    //                                     alt="googleForm-link"
    //                                     onClick={() => {
    //                                         openNewWindow(
    //                                             postData?.questionLink,
    //                                         );
    //                                     }}
    //                                 />
    //                             )}
    //                         </S.OpenKakao>
    //                     </S.TextBox>
    //                     <S.Line />
    //                     <S.TextBox>
    //                         <S.TextTitle>설명글</S.TextTitle>
    //                     </S.TextBox>
    //                     <S.MainText $h="300px">{postData?.contents}</S.MainText>
    //                     {checkStatus === 'LEADER' ? (
    //                         <div></div>
    //                     ) : (
    //                         <S.Globalstyle>
    //                             <S.ScrapButton
    //                                 $bc={({ theme }) => theme.Green}
    //                                 $click={scrapStatus.toString()}
    //                                 onClick={ClickScrapBtn}
    //                             >
    //                                 <img
    //                                     src={scrapStatus ? DoScrap : ScrapNum}
    //                                     alt="scrap-button"
    //                                 />
    //                                 <span>스크랩하기</span>
    //                             </S.ScrapButton>
    //                             {checkStatus === 'APPLICANT' ? (
    //                                 <S.ApplyButton
    //                                     $bc="none"
    //                                     $bg={({ theme }) => theme.LightGrey}
    //                                     onClick={() => {
    //                                         setshowCancel(true);
    //                                     }}
    //                                 >
    //                                     지원 취소
    //                                 </S.ApplyButton>
    //                             ) : (
    //                                 <S.ApplyButton
    //                                     $bc="none"
    //                                     $bg={({ theme }) => theme.box1}
    //                                     onClick={() => {
    //                                         setApply(true);
    //                                     }}
    //                                 >
    //                                     지원하기
    //                                 </S.ApplyButton>
    //                             )}
    //                         </S.Globalstyle>
    //                     )}
    //                 </S.BlueBox>
    //             </S.Background>
    //         </S.Layout>
    //     </>
    // );
};

export default DetailPageProject;
