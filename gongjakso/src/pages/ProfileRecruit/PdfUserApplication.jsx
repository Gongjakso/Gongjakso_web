import React, { useEffect, useRef, useState } from 'react';
import * as S from './PdfUserApplicationStyled';
import * as T from '../../features/modal/ApplyModal.styled';
import * as U from '../Portfolio/Portfolio.Styled';
import { useParams } from 'react-router-dom';
import Logo from '../../assets/images/applicationLogo.svg';
import { getMyApplication } from '../../service/apply_service';
import { getPortfolio } from '../../service/portfolio_service';
import bottomLogo from '../../assets/images/bottomImg.svg';
import html2pdf from 'html2pdf.js';

const PdfUserApplication = () => {
    const { id } = useParams();

    const [myApp, setmyApp] = useState([]);
    const [portId, setPortId] = useState();
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        // [GET] 특정 지원자 지원서 조회 API
        getMyApplication(id).then(res => {
            setmyApp(res?.data);
            setPortId(res?.data.portfolio_id);
        });
    }, [id]);

    useEffect(() => {
        if (portId) {
            // [GET] 포트폴리오 상세 조회 API
            getPortfolio(portId).then(res => {
                setPortfolio(res?.data);
            });
        }
    }, [portId]);

    const downloadPDF = () => {
        const element = document.getElementById('pdf-download'); // PDF로 변환할 요소 선택
        html2pdf(element, {
            filename: `${myApp?.applicant_name}.pdf`, // default : file.pdf
            html2canvas: { scale: 5 }, // 캡처한 이미지의 크기를 조절, 값이 클수록 더 선명하다.
            jsPDF: {
                format: 'A2', // 종이 크기 형식
                orientation: 'portrait', // or landscape : 가로
            },
            // callback: () => {
            //     console.log('PDF 다운로드 완료');
            // },
        });
    };

    return (
        <>
            <section id="pdf-download">
                <S.TopBox>
                    <img src={Logo} alt="title-logo" />
                    <S.Title>{myApp?.applicant_name} 님의 포트폴리오</S.Title>
                    <S.Major>{myApp?.applicant_major}</S.Major>
                    <S.Major>{myApp?.applicant_phone}</S.Major>
                </S.TopBox>

                <S.GlobalBox>
                    <S.DetailBox>
                        <S.SubTitle>지원분야</S.SubTitle>
                        <div>
                            {myApp?.recruit_part?.map((item, i) => (
                                <T.RoundForm
                                    key={i}
                                    $isselected={
                                        item.position === myApp?.apply_part
                                    }
                                    style={{ cursor: 'default' }}
                                >
                                    {item.position}
                                </T.RoundForm>
                            ))}
                        </div>
                    </S.DetailBox>
                    <S.DetailBox>
                        <S.SubTitle>지원이유</S.SubTitle>
                        <S.ContentBox>{myApp?.body}</S.ContentBox>
                    </S.DetailBox>

                    {!myApp?.is_private && (
                        <div>
                            <S.DetailBox>
                                <S.SubTitle>학력</S.SubTitle>
                                {portfolio?.data?.educationList?.map(
                                    (education, index) => (
                                        <S.BoxDetail key={index}>
                                            <S.InputContainer>
                                                <S.PortBox $w="50%">
                                                    {education.school ||
                                                        '학교 정보 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="24rem">
                                                    {education.grade ||
                                                        '학년 정보 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="24rem">
                                                    {education.state ||
                                                        '상태 정보 없음'}
                                                </S.PortBox>
                                            </S.InputContainer>
                                        </S.BoxDetail>
                                    ),
                                )}
                            </S.DetailBox>

                            <S.DetailBox>
                                <S.SubTitle>경력사항</S.SubTitle>
                                {portfolio?.data?.workList?.map(
                                    (work, index) => (
                                        <S.BoxDetail key={index}>
                                            <S.InputContainer>
                                                <S.PortBox $w="58%">
                                                    (회사명){' '}
                                                    {work.company ||
                                                        '정보 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="40%">
                                                    (부서명/직책){' '}
                                                    {work.partition || ''}
                                                </S.PortBox>
                                            </S.InputContainer>

                                            <S.InputContainer>
                                                <S.FlexPortBox $w="32%">
                                                    <span>입사일</span>
                                                    <span>
                                                        {work.enteredAt ||
                                                            '정보 없음'}
                                                    </span>
                                                </S.FlexPortBox>
                                                <S.FlexPortBox $w="32%">
                                                    <span>퇴사일</span>
                                                    <span>
                                                        {work.exitedAt ||
                                                            '미정'}
                                                    </span>
                                                </S.FlexPortBox>
                                                <S.PortBox $w="32%">
                                                    {work.isActive
                                                        ? '재직 중'
                                                        : '퇴사'}
                                                </S.PortBox>
                                            </S.InputContainer>

                                            <S.InputContainer>
                                                <S.WorkContent>
                                                    {work.detail || '없음'}
                                                </S.WorkContent>
                                            </S.InputContainer>
                                        </S.BoxDetail>
                                    ),
                                )}
                            </S.DetailBox>

                            <S.DetailBox>
                                <S.SubTitle>대외활동</S.SubTitle>
                                {portfolio?.data?.activityList?.map(
                                    (activity, index) => (
                                        <S.BoxDetail key={index}>
                                            <S.InputContainer>
                                                <S.PortBox $w="70%">
                                                    {activity.name ||
                                                        '대외활동 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="22rem">
                                                    {activity.isActive
                                                        ? '활동중'
                                                        : '활동 종료' ||
                                                          '상태 정보 없음'}
                                                </S.PortBox>
                                            </S.InputContainer>
                                        </S.BoxDetail>
                                    ),
                                )}
                            </S.DetailBox>

                            <S.DetailBox>
                                <S.SubTitle>수상경력</S.SubTitle>
                                {portfolio?.data?.awardList?.map(
                                    (award, index) => (
                                        <S.BoxDetail key={index}>
                                            <S.InputContainer>
                                                <S.PortBox $w="50%">
                                                    {award.contestName ||
                                                        '수상경력 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="24rem">
                                                    {award.awardName ||
                                                        '상태 정보 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="24rem">
                                                    {award.awardDate ||
                                                        '상태 정보 없음'}
                                                </S.PortBox>
                                            </S.InputContainer>
                                        </S.BoxDetail>
                                    ),
                                )}
                            </S.DetailBox>

                            <S.DetailBox>
                                <S.SubTitle>자격증</S.SubTitle>
                                {portfolio?.data?.certificateList?.map(
                                    (certificate, index) => (
                                        <S.BoxDetail key={index}>
                                            <S.InputContainer>
                                                <S.PortBox $w="50%">
                                                    {certificate.name ||
                                                        '자격 정보 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="24rem">
                                                    {certificate.rating ||
                                                        '상태 정보 없음'}
                                                </S.PortBox>
                                                <S.PortBox $w="24rem">
                                                    {certificate.certificationDate ||
                                                        '상태 정보 없음'}
                                                </S.PortBox>
                                            </S.InputContainer>
                                        </S.BoxDetail>
                                    ),
                                )}
                            </S.DetailBox>

                            <S.DetailBox>
                                <S.SubTitle>SNS</S.SubTitle>
                                {portfolio?.data?.snsList?.map((sns, index) => (
                                    <S.BoxDetail key={index}>
                                        <S.InputContainer>
                                            <S.PortBox $w="90%">
                                                {sns.snsLink || 'SNS 링크 없음'}
                                            </S.PortBox>
                                        </S.InputContainer>
                                    </S.BoxDetail>
                                ))}
                            </S.DetailBox>
                        </div>
                    )}
                </S.GlobalBox>
                <S.BottomBox>
                    <img
                        src={bottomLogo}
                        alt="footer logo"
                        style={{ width: '170px', height: 'auto' }}
                    ></img>
                </S.BottomBox>
            </section>
            <S.PdfButton variant="outlined" onClick={downloadPDF}>
                <S.Downimg />
                <S.Span>지원서PDF다운</S.Span>
            </S.PdfButton>
        </>
    );
};

export default PdfUserApplication;
