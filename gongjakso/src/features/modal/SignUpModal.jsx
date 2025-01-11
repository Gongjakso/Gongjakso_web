import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import { useForm } from 'react-hook-form';

import { putMyInfo } from '../../service/profile_service';
import InfoDrop from '../../components/common/Input/InfoDrop';
import { SelectInput } from '../../components/common/Input/Input';

import { majorData } from '../../utils/majorData.jsx';
import { jobData } from '../../utils/jobData.jsx';

const SignUpModal = ({ closeSignUpModal, name }) => {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [thirdNum, setThirdNum] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const formattedNum = `${firstNum}-${secondNum}-${thirdNum}`;
        setPhoneNum(formattedNum);
    }, [firstNum, secondNum, thirdNum]);

    const handleFirstNumChange = event => {
        const { value } = event.target;
        setFirstNum(value);
    };

    const handleSecondNumChange = event => {
        const { value } = event.target;
        setSecondNum(value);
    };

    const handleThirdNumChange = event => {
        const { value } = event.target;
        setThirdNum(value);
    };

    const navigate1 = useNavigate();

    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

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

    const status_options = [
        '대학 재학 중',
        '대학 휴학 중',
        '취업 준비 중',
        '기타',
    ];

    const handleModalClick = path => {
        putMyInfo(name, selectedMajor, selectedJob, selectedStatus, phoneNum);
        closeSignUpModal();
        navigate1(path);
    };

    const status_items = status_options.map(item => ({
        label: item,
        onSelect: () => {
            setSelectedStatus(item);
        },
    }));
    const major_items = () => {
        return majorData.map(item => ({
            label: item.class,
            items: item.major.map(major => ({
                label: major,
                onSelect: () => {
                    setSelectedMajor(major);
                },
            })),
        }));
    };
    const job_items = () => {
        return jobData.map(item => ({
            label: item.type,
            items: item.work.map(work => ({
                label: work,
                onSelect: () => {
                    setSelectedJob(work);
                },
            })),
        }));
    };

    useEffect(() => {
        setIsComplete(
            selectedStatus !== '' &&
                selectedMajor !== '' &&
                selectedJob !== '' &&
                firstNum !== '' &&
                secondNum !== '' &&
                thirdNum !== '',
        );
    }, [
        selectedStatus,
        selectedMajor,
        selectedJob,
        firstNum,
        secondNum,
        thirdNum,
    ]);
    return (
        <S.ModalBg>
            <S.Container>
                <S.Title>안녕하세요, 공작소에 오신 것을 환영합니다.</S.Title>
                <S.Title>
                    4가지만 입력하면 맞춤형 활동을 시작할 수 있습니다!
                </S.Title>
                <S.BoxContainer>
                    <S.Box>
                        <S.SubTitle>현재 상태</S.SubTitle>
                        <InfoDrop
                            items={status_items}
                            title={
                                selectedStatus ||
                                '* 현재 당신의 상태를 선택해주세요.'
                            }
                        />
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>전공</S.SubTitle>

                        <InfoDrop
                            items={major_items()}
                            title={
                                selectedMajor ||
                                '* 현재 전공하고 있는 분야를 선택해주세요.'
                            }
                        />
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>희망 직무</S.SubTitle>

                        <InfoDrop
                            items={job_items()}
                            title={
                                selectedJob ||
                                '* 희망하시는 직무를 선택해주세요.'
                            }
                        />
                    </S.Box>
                    <S.Box>
                        <S.SubTitle>연락처</S.SubTitle>
                        <S.Div1>
                            <S.PhoneNum>
                                <S.Num
                                    className="Num-first"
                                    type="text"
                                    maxLength="3"
                                    value={firstNum}
                                    onChange={handleFirstNumChange}
                                />
                                <S.Hyphen>-</S.Hyphen>
                                <S.Num
                                    className="Num-second"
                                    type="text"
                                    maxLength="4"
                                    value={secondNum}
                                    onChange={handleSecondNumChange}
                                />
                                <S.Hyphen>-</S.Hyphen>
                                <S.Num
                                    className="Num-third"
                                    type="text"
                                    maxLength="4"
                                    value={thirdNum}
                                    onChange={handleThirdNumChange}
                                />
                            </S.PhoneNum>
                            <S.notice>
                                *추후 팀 합류 시 팀장에게 전송됩니다.
                            </S.notice>
                        </S.Div1>
                    </S.Box>
                </S.BoxContainer>

                <S.ButtonBox>
                    <S.BlueButton
                        onClick={() => handleModalClick('/')}
                        disabled={!isComplete}
                        style={{
                            backgroundColor: isComplete ? '#0150F1' : '#c3c3c3',
                        }}
                    >
                        완료
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default SignUpModal;
