import React, { useMemo, useState, useEffect } from 'react';
import * as S from './MyInfoStyled';
import { putMyInfo } from '../../service/profile_service';
import { getMyInfo } from '../../service/profile_service';
import { useLocation, useNavigate } from 'react-router-dom';
import { SelectInput } from '../../components/common/Input/Input';
import * as T from '../../components/common/Input/infoDrop.styled.jsx';
import Down from '../../assets/images/Down.svg';
import Up from '../../assets/images/icon.svg';

import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';

import { jobData } from '../../utils/jobData.jsx';
import { majorData } from '../../utils/majorData.jsx';

const groupData = data => {
    return data.reduce((groups, item) => {
        const group = groups[item.id] || [];
        group.push(item);
        groups[item.id] = group;
        return groups;
    }, {});
};

const MyInfo = () => {
    const groupedMajorData = useMemo(() => groupData(majorData), []);
    const groupedJobData = useMemo(() => groupData(jobData), []);
    const navigate = useNavigate();
    const [myData, setMyData] = useState(null);

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [major, setMajor] = useState('');
    const [job, setJob] = useState([]);
    const [phone, setPhone] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [thirdNum, setThirdNum] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

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

    useEffect(() => {
        getMyInfo().then(res => {
            setMyData(res?.data);
        });
    }, []);

    useEffect(() => {
        if (myData) {
            setName(myData.name);
            setStatus(myData.status);
            setMajor(myData.major);
            setJob(myData.job);
            const separatedNumbers = myData?.phone?.split('-');
            const [firstNum, secondNum, thirdNum] = separatedNumbers;
            setFirstNum(firstNum);
            setSecondNum(secondNum);
            setThirdNum(thirdNum);
            // setPhone(myData.phone);
        }
    }, [myData]);

    const handleSaveClick = e => {
        e.preventDefault();

        putMyInfo(name, major, job, status, phoneNum)
            .then(() => {
                navigate('/profile');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSelectStatus = selectedValue => {
        setStatus(selectedValue);
    };
    const handleSelectMajor = selectedValue => {
        setMajor(selectedValue);
    };
    const handleSelectJob = selectedValue => {
        setJob(selectedValue);
    };

    const status_options = [
        '대학 재학 중',
        '대학 휴학 중',
        '취업 준비 중',
        '기타',
    ];
    const items1 = majorData.map(item => ({
        label: item.class,
        items: item.major.map(major => ({
            label: major,
            onSelect: () => {
                const selectedData = `${item.class}/${major}`;
                setMajor(selectedData);
            },
        })),
    }));
    const items2 = jobData.map(item => ({
        label: item.type,
        items: item.work.map(work => ({
            label: work,
            onSelect: () => {
                setJob(work);
            },
        })),
    }));

    return (
        <S.Div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>나의 정보</S.Title>
            </S.TopBox>
            <S.Formset>
                <S.DetailBox>
                    <S.SubTitle>이름</S.SubTitle>
                    <S.InputField
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>현재 상태</S.SubTitle>
                    <S.Fillter1>
                        <SelectInput
                            id={'status'}
                            selectOptions={status_options}
                            placeholder={status}
                            onChange={handleSelectStatus}
                            case={false}
                        />
                    </S.Fillter1>
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>전공</S.SubTitle>
                    <T.Dropdown2>
                        <Dropdown items={items1} closeOnScroll={false}>
                            {({ isOpen, onClick }) => (
                                <T.Button
                                    type="button"
                                    onClick={() => {
                                        onClick();
                                        setIsOpen(isOpen);
                                    }}
                                >
                                    {major}
                                    {isOpen ? (
                                        <img src={Up} />
                                    ) : (
                                        <img src={Down} />
                                    )}
                                </T.Button>
                            )}
                        </Dropdown>
                    </T.Dropdown2>
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>희망 직무</S.SubTitle>
                    <T.Dropdown2>
                        <Dropdown items={items2} closeOnScroll={false}>
                            {({ isOpen, onClick }) => (
                                <T.Button
                                    type="button"
                                    onClick={() => {
                                        onClick();
                                        setIsOpen(isOpen);
                                    }}
                                >
                                    {job}
                                    {isOpen ? (
                                        <img src={Up} />
                                    ) : (
                                        <img src={Down} />
                                    )}
                                </T.Button>
                            )}
                        </Dropdown>
                    </T.Dropdown2>
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>연락처</S.SubTitle>
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
                </S.DetailBox>
            </S.Formset>
            <S.Wrapper>
                <S.SetBox onClick={handleSaveClick}>정보 저장하기</S.SetBox>
            </S.Wrapper>
        </S.Div>
    );
};

export default MyInfo;
