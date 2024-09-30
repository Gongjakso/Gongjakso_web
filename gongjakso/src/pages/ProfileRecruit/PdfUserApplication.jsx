import React, { useEffect, useState } from 'react';
import * as S from './PdfUserApplicationStyled';
import * as T from '../../features/modal/ApplyModal.styled';
import * as U from '../Portfolio/Portfolio.Styled';
import { useParams } from 'react-router-dom';
import Logo from '../../assets/images/applicationLogo.svg';
import { getMyApplication } from '../../service/apply_service';
import { getPortfolio } from '../../service/portfolio_service';

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

    return (
        <>
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
                            {portfolio?.data?.workList?.map((work, index) => (
                                <S.BoxDetail key={index}>
                                    <S.InputContainer>
                                        <S.PortBox $w="58%">
                                            (회사명){' '}
                                            {work.company || '정보 없음'}
                                        </S.PortBox>
                                        <S.PortBox $w="40%">
                                            (부서명/직책) {work.partition || ''}
                                        </S.PortBox>
                                    </S.InputContainer>

                                    <S.InputContainer>
                                        <S.FlexPortBox $w="32%">
                                            <span>입사일</span>
                                            <span>
                                                {work.enteredAt || '정보 없음'}
                                            </span>
                                        </S.FlexPortBox>
                                        <S.FlexPortBox $w="32%">
                                            <span>퇴사일</span>
                                            <span>
                                                {work.exitedAt || '미정'}
                                            </span>
                                        </S.FlexPortBox>
                                        <S.PortBox $w="32%">
                                            {work.isActive ? '재직 중' : '퇴사'}
                                        </S.PortBox>
                                    </S.InputContainer>

                                    <S.InputContainer>
                                        <S.WorkContent>
                                            {work.detail}
                                        </S.WorkContent>
                                    </S.InputContainer>
                                </S.BoxDetail>
                            ))}
                        </S.DetailBox>

                        <S.DetailBox>
                            <S.SubTitle>대외활동</S.SubTitle>
                            {portfolio?.data?.educationList?.map(
                                (education, index) => (
                                    <S.BoxDetail key={index}>
                                        <S.InputContainer>
                                            <S.PortBox $w="70%">
                                                {education.school ||
                                                    '학교 정보 없음'}
                                            </S.PortBox>
                                            <S.PortBox $w="22rem">
                                                {education.grade ||
                                                    '학년 정보 없음'}
                                            </S.PortBox>
                                        </S.InputContainer>
                                    </S.BoxDetail>
                                ),
                            )}
                        </S.DetailBox>

                        <S.DetailBox>
                            <S.SubTitle>수상경력</S.SubTitle>
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
                            <S.SubTitle>자격증</S.SubTitle>
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
                            <S.SubTitle>SNS</S.SubTitle>
                            {portfolio?.data?.educationList?.map(
                                (education, index) => (
                                    <S.BoxDetail key={index}>
                                        <S.InputContainer>
                                            <S.PortBox $w="90%">
                                                {education.school ||
                                                    '학교 정보 없음'}
                                            </S.PortBox>
                                        </S.InputContainer>
                                    </S.BoxDetail>
                                ),
                            )}
                        </S.DetailBox>
                    </div>
                )}
            </S.GlobalBox>
        </>
    );
};

export default PdfUserApplication;
