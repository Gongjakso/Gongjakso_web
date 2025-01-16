import React, { useEffect, useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { applyCancel, getMyApplication } from '../../service/apply_service';

const ApplyCancel = props => {
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

    const ClickCancelBtn = applyId => {
        applyCancel(applyId);
    };

    return (
        <div>
            <S.Background>
                <S.Modal
                    $w="600px"
                    $h="400px"
                    $Mw="22rem"
                    $Mh="20rem"
                    $Mww="35rem"
                    $Mhh="22rem"
                    $bc={({ theme }) => theme.box1}
                >
                    <S.Backbtn onClick={() => props.CloseModal(false)}>
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>
                    <S.MainTitle>지원 취소하기</S.MainTitle>
                    <S.CompletedBox>
                        <p>'{props.title}' 의</p>
                        <p>지원을 취소하시겠습니까?</p>
                    </S.CompletedBox>

                    <S.ApplyBox>
                        <S.ApplyBtn
                            $w="230px"
                            onClick={() => {
                                ClickCancelBtn(props.applyId);
                                navigate('/contestList');
                            }}
                        >
                            취소하기
                        </S.ApplyBtn>
                    </S.ApplyBox>
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default ApplyCancel;
