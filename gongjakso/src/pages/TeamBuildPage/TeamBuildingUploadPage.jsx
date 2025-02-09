import React, { useState, useEffect } from 'react';
import * as S from './TeamBuildingUploadPage.Styled';
import { Input } from '../../components/common/Input/Input';
import { useForm } from 'react-hook-form';
import CountGuest from '../../components/common/CountGuest/CountGuest';
import { postContestTeam } from '../../service/post_service';
import Multilevel from '../../components/common/Input/Multilevel';
import SelectDate from '../../components/common/Calendar/SelectDate';
import moment from 'moment';
import { openAlertModal } from '../../features/modal/modalSlice/alertModalSlice';
import { useDispatch } from 'react-redux';
import AlertModal from '../../components/common/AlertModal/AlertModal';
import useCustomNavigate from '../../hooks/useNavigate';
import { openConfirmModal } from '../../features/modal/modalSlice/confirmModalSlice';
import ConfirmModal from '../../components/common/ConfirmModal/ConfirmModal';
import { WarningMsg } from '../../components/common/Input/WarningMsg';

const TeamBuildingUploadPage = ({ posts, contestDetail, contestData }) => {
    const dispatch = useDispatch();
    const [meeting, setMeeting] = useState('OFFLINE');
    const [complaint, setComplaint] = useState('true');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [inputCount, setInputCount] = useState(0); // 글자 수
    const [titleCount, setTitleCount] = useState(0); // 글자 수
    const navigate = useCustomNavigate();

    const handleDescriptionChange = event => {
        if (event.target.value.length > 500) {
            event.target.value = event.target.value.slice(0, 500);
        }
        setInputCount(event.target.value.length);
        setDescription(event.target.value);
    };

    const handleTitleChange = event => {
        if (event.target.value.length > 20) {
            event.target.value = event.target.value.slice(0, 20);
        }
        setTitleCount(event.target.value.length);
        setTitle(event.target.value);
    };

    const [category, setCategory] = useState();
    const [btn, setBtn] = useState(false);

    const [openCalendar, setOpenCalendar] = useState(null);
    const [startDates, setStartDates] = useState('');
    const [finishDates, setFinishDates] = useState('');
    const [recruitFinish, setRecruitFinish] = useState('');

    const [selectedTownData, setSelectedTownData] = useState('');
    const [selectedCityData, setSelectedCityData] = useState('');

    const [checkStartDate, setCheckStartDate] = useState(true);
    const [checkFinishDate, setCheckFinishDate] = useState(true);
    const [checkfinalDate, setCheckfinalDate] = useState(true);
    const [checkRecuritPeople, setCheckRecuritPeople] = useState(true);
    //날짜 포맷팅
    const transformAndSetDates = selectDate => {
        const parsedSelectDate = moment(selectDate);
        const formattedSelectDate = parsedSelectDate.format('YYYY-MM-DD');
        return formattedSelectDate;
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            title: null,
            link: null,
            people: null,
        },
    });

    const handleOptionChange = option => {
        if (option === 'ONLINE') {
            if (meeting === 'ONLINE') {
                alert('둘 중 하나를 꼭 선택해주세요');
            } else if (meeting === 'OFFLINE') {
                setMeeting('HYBRID');
            } else if (meeting === 'HYBRID') {
                setMeeting('OFFLINE');
            } else {
                setMeeting('ONLINE');
            }
        } else if (option === 'OFFLINE') {
            if (meeting === 'OFFLINE') {
                alert('둘 중 하나를 꼭 선택해주세요');
            } else if (meeting === 'ONLINE') {
                setMeeting('HYBRID');
            } else if (meeting === 'HYBRID') {
                setMeeting('ONLINE');
            } else {
                setMeeting('OFFLINE');
            }
        } else {
            setMeeting(prevMeeting =>
                prevMeeting === 'HYBRID' ? null : 'HYBRID',
            );
        }
        setBtn(true);
    };

    const handleComplain = option => {
        setComplaint(option);
        setBtn(true);
    };

    const handleSelectedDataCity = data => {
        //선택한 지역 반환
        setSelectedCityData(data);
    };
    const handleSelectedDataTown = data => {
        //선택한 지역 반환
        setSelectedTownData(data);
    };

    const handleDateChange = (date, type) => {
        const formattedDate = transformAndSetDates(date);
        if (type === 'start') {
            setStartDates(formattedDate);
            setCheckStartDate(true);
        } else if (type === 'finish') {
            setFinishDates(formattedDate);
            setCheckFinishDate(true);
        } else if (type === 'recruit') {
            setRecruitFinish(formattedDate);
            setCheckfinalDate(true);
        }
        setOpenCalendar(type); // Close the calendar after selecting a date
    };

    const handleCategory = selectCategory => {
        // console.log(selectCategory.category);
        //선택한 인원의 숫자 가져오기
        setCategory(selectCategory.category);
        setCheckRecuritPeople(true);
    };

    const handleCancel = () => {
        dispatch(openConfirmModal());
    };

    const submitContestBuild = data => {
        // console.log(endDates);
        if (startDates === '') {
            setCheckStartDate(false);
        }
        if (finishDates === '') {
            setCheckFinishDate(false);
        }
        if (recruitFinish === '') {
            setCheckfinalDate(false);
        }
        if (category?.recruit_part === undefined) {
            setCheckRecuritPeople(false);
        }

        const newData = {
            title: contestDetail?.title,
            body: description,
            started_at: startDates,
            finished_at: finishDates,
            recruit_finished_at: recruitFinish, // 공고 마감일
            total_count: data.people,
            recruit_part: category?.recruit_part, //참여하는 팀의 역할
            meeting_method: meeting,
            province: selectedCityData,
            district: selectedTownData,
            channel_method: complaint,
            channel_link: data.complainLink,
        };
        if (
            checkStartDate &&
            checkFinishDate &&
            checkfinalDate &&
            checkRecuritPeople
        ) {
            postContestTeam(contestData?.id, newData).then(res => {
                if (res === 5000) {
                    dispatch(
                        openAlertModal({
                            titleContent: '공모전 팀빌딩',
                            modalContent: '공고를 더 이상 생성할 수 없습니다!',
                        }),
                    );
                } else if (res === 2000) {
                    dispatch(
                        openAlertModal({
                            titleContent: '공모전 팀빌딩',
                            modalContent:
                                '공고의 세부 항목 중 빠진것이 없는지 확인해주세요',
                        }),
                    );
                } else if (res === 5004) {
                    dispatch(
                        openAlertModal({
                            titleContent: '공모전 팀빌딩',
                            modalContent:
                                '파트별 인원수가 전체 인원수와 일치하지 않습니다.',
                        }),
                    );
                } else {
                    dispatch(
                        openAlertModal({
                            titleContent: '공모전 팀빌딩',
                            modalContent: '공고가 생성되었습니다!',
                            redirectUrl: '/contestList',
                        }),
                    );
                }
            });
        }
    };

    return (
        <S.Container>
            {posts === 'contest' && (
                <>
                    <S.Title>
                        모집 기본 정보를 입력해주세요!
                        <S.MiniTitle>
                            <p>
                                추후에 공모전/프로젝트 홈에 올라갈 게시글
                                정보입니다.
                            </p>
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </S.MiniTitle>
                    </S.Title>
                    <S.Label>
                        <S.TapT>
                            제목<S.Important>*</S.Important>
                        </S.TapT>
                        <S.TextArea
                            name=""
                            id="title"
                            value={contestDetail?.title}
                            onChange={handleTitleChange}
                            readOnly
                        />
                    </S.Label>

                    <S.Label>
                        <S.TapT>설명</S.TapT>
                        <S.TextArea
                            name=""
                            id="description"
                            cols="20"
                            rows="8"
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="사용자들이 팀을 더 잘 이해할 수 있는 설명글을 적어주세요."
                        ></S.TextArea>
                        <S.InputNum>
                            <span>{inputCount}</span>
                            <span>/500</span>
                        </S.InputNum>
                    </S.Label>

                    <S.Label>
                        <S.TapT>공모전 홈페이지</S.TapT>
                        <S.TextArea
                            name=""
                            id="link"
                            value={contestDetail?.contestLink}
                            readOnly
                        />
                    </S.Label>

                    <S.Label>
                        <Input
                            label={'인원'}
                            type={'number'}
                            id={'people'}
                            placeholder={'모집 총 인원을 입력해주세요. '}
                            error={errors?.people}
                            register={register}
                            registerOptions={{
                                required: '인원을 입력하세요 ',
                                min: {
                                    value: 1,
                                    message: '최소 인원은 1명입니다.',
                                },
                                max: {
                                    value: 10,
                                    message: '최대 인원은 10명입니다.',
                                },
                            }}
                            min={1}
                            max={8}
                            step={1}
                            isimportant={true}
                            sub={'*최대 8명 입니다.'}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>
                            모집 분야<S.Important>*</S.Important>
                        </S.TapP>
                        <S.DateSet>
                            <CountGuest
                                isProject={false}
                                error={checkRecuritPeople}
                                maxGuests={watch('people')} // 입력한 숫자를 최대치로 설정
                                onApply={handleCategory}
                            />
                            {/* {checkRecuritPeople ? (
                                <></>
                            ) : (
                                <WarningMsg msg={'모집분야를 선택 해주세요.'} />
                            )} */}
                        </S.DateSet>
                    </S.Label>
                    <S.Label>
                        <S.TapP>
                            회의 방식<S.Important>*</S.Important>
                        </S.TapP>
                        <S.Label3>
                            <S.ClickBtn
                                $isselected={
                                    meeting === 'OFFLINE' ||
                                    meeting === 'HYBRID'
                                }
                                onClick={() => handleOptionChange('OFFLINE')}
                            >
                                오프라인
                            </S.ClickBtn>
                            <S.ClickBtn
                                $isselected={
                                    meeting === 'ONLINE' || meeting === 'HYBRID'
                                }
                                onClick={() => handleOptionChange('ONLINE')}
                            >
                                온라인
                            </S.ClickBtn>
                        </S.Label3>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                        <S.Label2>
                            <Multilevel
                                isPost={true}
                                onItemSelectedCity={handleSelectedDataCity}
                                onItemSelectedTown={handleSelectedDataTown}
                            />
                            <S.Important2>
                                *선택하지 않을 시, 공모전 탭의 지역 카테고리에서
                                노출되지 않습니다!
                            </S.Important2>
                        </S.Label2>
                    </S.Label>
                    <S.Label>
                        <S.TapP>
                            예상 기간<S.Important>*</S.Important>
                        </S.TapP>
                        <S.DateSet>
                            <SelectDate
                                value={startDates}
                                onChange={date =>
                                    handleDateChange(date, 'start')
                                }
                                isOpend={openCalendar === 'start'}
                                text={'시작날짜를 입력해주세요.'}
                                error={checkStartDate}
                            />
                            {/* {checkStartDate ? (
                                <></>
                            ) : (
                                <WarningMsg msg={'날짜를 입력해주세요'} />
                            )} */}
                            <SelectDate
                                value={finishDates}
                                onChange={date =>
                                    handleDateChange(date, 'finish')
                                }
                                isOpend={openCalendar === 'finish'}
                                text={'종료날짜를 입력해주세요.'}
                                error={checkFinishDate}
                            />
                            {/* {checkFinishDate ? (
                                <></>
                            ) : (
                                <WarningMsg msg={'날짜를 입력해주세요'} />
                            )} */}
                        </S.DateSet>
                    </S.Label>
                    <S.Label>
                        <S.TapP>
                            공고 마감일자<S.Important>*</S.Important>
                        </S.TapP>
                        <S.DateSet>
                            <SelectDate
                                value={recruitFinish}
                                onChange={date =>
                                    handleDateChange(date, 'recruit')
                                }
                                isOpend={openCalendar === 'recruit'}
                                text={'공고 마감일을 입력해주세요.'}
                                error={checkfinalDate}
                            />
                            {/* {checkfinalDate ? (
                                <></>
                            ) : (
                                <WarningMsg msg={'날짜를 입력해주세요'} />
                            )} */}
                        </S.DateSet>
                    </S.Label>
                    <S.Label>
                        <S.TapP>
                            문의사항<S.Important>*</S.Important>
                        </S.TapP>
                        <S.Complain>
                            <div>
                                <S.ClickBtn
                                    $isselected={complaint === 'true'}
                                    onClick={() => handleComplain('true')}
                                >
                                    오픈카톡
                                </S.ClickBtn>
                                <S.ClickBtn
                                    $isselected={complaint === 'false'}
                                    onClick={() => handleComplain('false')}
                                >
                                    구글폼
                                </S.ClickBtn>
                            </div>
                            <Input
                                type={'url'}
                                id={'complainLink'}
                                placeholder={'*링크를 입력해주세요.'}
                                error={errors?.complainLink}
                                register={register}
                                registerOptions={{
                                    required: '*링크를 입력하세요',
                                }}
                            />
                        </S.Complain>
                    </S.Label>
                    <S.ButtonContent>
                        <S.Button
                            $isDelete={true}
                            onClick={() => handleCancel()}
                        >
                            취소하기
                        </S.Button>
                        <S.Button onClick={handleSubmit(submitContestBuild)}>
                            모집 시작하기
                        </S.Button>
                    </S.ButtonContent>
                </>
            )}
            <AlertModal />
            <ConfirmModal
                question={'팀빌딩을 취소하시겠어요?'}
                explain={'작성한 내용이 사라지며 이전페이지로 이동하게 됩니다.'}
                confirmClick={() => navigate(-1)}
            />
        </S.Container>
    );
};

export default TeamBuildingUploadPage;
