import React, { useEffect, useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import {
    patchCancel,
    patchExtension,
    patchFinish,
} from '../../service/apply_service';
import SelectDate from '../../components/common/Calendar/SelectDate';
import { useDispatch } from 'react-redux';
import AlertModal from '../../components/common/AlertModal/AlertModal';
import { openAlertModal } from './modalSlice/alertModalSlice';

const MyPageTeam = props => {
    const navigate = useCustomNavigate();
    const [checkedCase] = useState(props.teamCase.id);
    const [dates, setDates] = useState();
    const dispatch = useDispatch();
    console.log(props.id.id);
    const handleApply = date => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
        const day = date.getDate();

        setDates(
            `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`,
        );
    };

    const ClickFinishBtn = () => {
        patchFinish(props.id);
    };

    const ClickExtensionDate = () => {
        // 아래 부분 2 로 넣은 부분 수정해야함
        props.CloseModal(false);
        patchExtension(props.id, dates).then(response => {
            if (response.code === 1000) {
                alert('모집이 연장 되었습니다!');
                window.location.reload();
            } else {
                alert('모집 연장에 실패 하였습니다.');
            }
        });
    };

    const ClickCancelBtn = () => {
        patchCancel(props.id.contest_id, props.id.id);
    };

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

    return (
        <>
            <S.Background>
                <S.Modal $w="850px" $h="450px" $bc={({ theme }) => theme.box1}>
                    <S.Backbtn onClick={() => props.CloseModal(false)}>
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>
                    <S.MainTitle>팀 모집 {props.teamCase.case}</S.MainTitle>
                    <S.CompletedBox>
                        {checkedCase === '1' && (
                            <S.CompletedBox>
                                <p>
                                    팀 모집을 마감하면 재모집을 할 수 없게
                                    됩니다.
                                </p>
                                <p>그래도 마감하시겠습니까?</p>
                            </S.CompletedBox>
                        )}

                        {checkedCase === '2' && (
                            <S.CompletedBox>
                                <p>희망하는 마감일을 선택해주세요!</p>
                                <SelectDate
                                    value={handleApply}
                                    onChange={handleApply}
                                />
                            </S.CompletedBox>
                        )}

                        {checkedCase === '3' && (
                            <S.CompletedBox>
                                <p>
                                    팀 모집을 취소하면 재모집을 할 수 없게
                                    됩니다.
                                </p>
                                <p>그래도 취소하시겠습니까?</p>
                            </S.CompletedBox>
                        )}
                    </S.CompletedBox>

                    <S.ApplyBox>
                        <S.ApplyBtn
                            $w="250px"
                            onClick={() => {
                                if (checkedCase === '1') {
                                    ClickFinishBtn();
                                    navigate('/profile');
                                } else if (checkedCase === '2') {
                                    ClickExtensionDate();
                                } else if (checkedCase === '3') {
                                    ClickCancelBtn();
                                    navigate('/profile');
                                }
                            }}
                        >
                            {props.teamCase.case}
                        </S.ApplyBtn>
                    </S.ApplyBox>
                </S.Modal>
            </S.Background>
            {/* <AlertModal /> */}
        </>
    );
};

export default MyPageTeam;
