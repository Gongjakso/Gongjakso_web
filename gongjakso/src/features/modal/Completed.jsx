import React, { useEffect, useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { postApply } from '../../service/post_service';

const Completed = props => {
    const navigate = useCustomNavigate();

    // 스크롤 방지
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    // 지원하기 POST
    const submitContestApply = () => {
        const newData = {
            portfolioId: props.isclosed ? '' : props.clickedPortId,
            body: props.inputValue,
            part: props.clickedFields,
            status: 'COMPLETED',
            isPrivate: props.isclosed,
            dataType: props.dataType,
        };
        postApply(props.id, newData).then(res => {});
    };

    return (
        <div>
            {props.case === 1 && (
                <S.Background2>
                    <S.Modal
                        $w="700px"
                        $h="400px"
                        $Mw="25rem"
                        $Mh="20rem"
                        $Mww="35rem"
                        $Mhh="20rem"
                        $bc={({ theme }) => theme.box1}
                    >
                        <S.MainTitle>
                            '{props.title}' <br /> 팀 지원하기
                        </S.MainTitle>
                        <S.CompletedBox>
                            <p>지원서를 정말 제출하시겠습니까?</p>
                            <p>제출 완료 시 수정이 불가합니다.</p>
                        </S.CompletedBox>

                        <S.ApplyBox2>
                            <S.newBtn
                                $bg={({ theme }) => theme.Grey}
                                $c="black"
                                onClick={() => {
                                    props.setApplyCheck(false);
                                }}
                            >
                                돌아가기
                            </S.newBtn>
                            <S.newBtn
                                $bg={({ theme }) => theme.box1}
                                $c="white"
                                onClick={() => {
                                    props.setApplyCheck(false);
                                    props.setCompleted(true);
                                    submitContestApply();
                                }}
                            >
                                제출하기
                            </S.newBtn>
                        </S.ApplyBox2>
                    </S.Modal>
                </S.Background2>
            )}
            {props.case === 2 && (
                <S.Background>
                    <S.Modal
                        $w="700px"
                        $h="400px"
                        $bc={({ theme }) => theme.box1}
                    >
                        <S.Backbtn
                            onClick={() => {
                                navigate('/contest');
                            }}
                        >
                            <img src={Close} alt="close-btn" />
                        </S.Backbtn>
                        <S.MainTitle>'{props.title}' 팀 지원하기</S.MainTitle>
                        <S.CompletedBox>
                            <p>지원이 완료되었습니다!</p>
                            <p>
                                모집 결과는 마이페이지에서 확인하실 수 있습니다.
                            </p>
                        </S.CompletedBox>

                        <S.ApplyBox>
                            <S.ApplyBtn
                                $w="350px"
                                onClick={() => {
                                    navigate('/profile');
                                }}
                            >
                                마이페이지로 이동하기
                            </S.ApplyBtn>
                        </S.ApplyBox>
                    </S.Modal>
                </S.Background>
            )}
            {props.case === 3 && (
                <S.Background>
                    <S.Modal
                        $w="650px"
                        $h="420px"
                        $bc={({ theme }) => theme.box1}
                    >
                        <S.MainTitle>포트폴리오 만들러 가기</S.MainTitle>
                        <S.CompletedBox>
                            <p>
                                포트폴리오 페이지로 이동 시 지원 내용이 저장되지
                                않습니다.
                            </p>
                            <p>이동하시겠습니까?</p>
                        </S.CompletedBox>

                        <S.ApplyBox2>
                            <S.newBtn
                                $bg={({ theme }) => theme.Grey}
                                $c="black"
                                onClick={() => {
                                    props.setgoToMy(false);
                                }}
                            >
                                돌아가기
                            </S.newBtn>
                            <S.newBtn
                                $bg={({ theme }) => theme.box1}
                                $c="white"
                                onClick={() => {
                                    navigate('/profile');
                                }}
                            >
                                만들러 가기
                            </S.newBtn>
                        </S.ApplyBox2>
                    </S.Modal>
                </S.Background>
            )}
        </div>
    );
};

export default Completed;
