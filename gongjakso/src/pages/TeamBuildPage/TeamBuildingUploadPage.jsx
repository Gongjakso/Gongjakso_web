import React, { useState, useEffect } from 'react';
import * as S from './TeamBuildingUploadPage.Styled';
import { Input } from '../../components/common/Input/Input';
import { useForm } from 'react-hook-form';
import CountGuest from '../../components/common/CountGuest/CountGuest';
import SelectCalendar from '../../components/common/Calendar/SelectCalendar';
import { postContestTeam, postPosting } from '../../service/post_service';
import Multilevel from '../../components/common/Input/Multilevel';
import SelectDate from '../../components/common/Calendar/SelectDate';
import moment from 'moment';
import { openAlertModal } from '../../features/modal/modalSlice/alertModalSlice';
import { useDispatch } from 'react-redux';
import AlertModal from '../../components/common/AlertModal/AlertModal';

const TeamBuildingUploadPage = ({ posts, contestDetail, contestData }) => {
    const dispatch = useDispatch();

    const language = [
        'REACT',
        'TYPESCRIPT',
        'JAVASCRIPT',
        'NEXTJS',
        'NODEJS',
        'JAVA',
        'SPRING',
        'KOTLIN',
        'SWIFT',
        'FLUTTER',
        'ETC',
    ];
    const [meeting, setMeeting] = useState('OFFLINE');
    const [complaint, setComplaint] = useState('true');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [inputCount, setInputCount] = useState(0); // 글자 수
    const [titleCount, setTitleCount] = useState(0); // 글자 수

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

    const [languages, setLanguages] = useState([]);

    const [category, setCategory] = useState();

    const [btn, setBtn] = useState(false);

    const [startDates, setStartDates] = useState('');
    const [finishDates, setFinishDates] = useState('');
    const [recruitFinish, setRecruitFinish] = useState('');

    const [selectedTownData, setSelectedTownData] = useState('');
    const [selectedCityData, setSelectedCityData] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();

    //프로젝트/공모전 기간 설정
    // const transformAndSetDates = (startDate, endDate) => {
    //     const parsedStartDate = new Date(startDate);
    //     const parsedEndDate = new Date(endDate);
    //     const formattedStartDate = `${parsedStartDate.toISOString().split('T')[0]}T02:32:22.376895959`;
    //     const formattedEndDate = `${parsedEndDate.toISOString().split('T')[0]}T02:32:22.376895959`;
    //     setDates({ startDate: formattedStartDate, endDate: formattedEndDate });
    // };

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
                setMeeting('BOTH');
            } else if (meeting === 'BOTH') {
                setMeeting('OFFLINE');
            } else {
                setMeeting('ONLINE');
            }
        } else if (option === 'OFFLINE') {
            if (meeting === 'OFFLINE') {
                alert('둘 중 하나를 꼭 선택해주세요');
            } else if (meeting === 'ONLINE') {
                setMeeting('BOTH');
            } else if (meeting === 'BOTH') {
                setMeeting('ONLINE');
            } else {
                setMeeting('OFFLINE');
            }
        } else {
            setMeeting(prevMeeting => (prevMeeting === 'BOTH' ? null : 'BOTH'));
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

    const handleLanguageClick = language => {
        const isSelected = languages.includes(language);

        if (isSelected) {
            setLanguages(prevSelected =>
                prevSelected.filter(lang => lang !== language),
            );
        } else {
            setLanguages(prevSelected => [...prevSelected, language]);
        }
    };

    useEffect(() => {
        const formattedLanguages = languages.map(language => ({
            stackNameType: language,
        }));
        setSelectedLanguage(formattedLanguages);
    }, [languages]);

    //프로젝트/공모전 기한 설정
    // const handleApply = selectedDates => {
    //     // console.log(selectedDates);
    //     transformAndSetDates(selectedDates.startDate, selectedDates.endDate);
    // };
    //마감 기한 연장 설정
    // console.log(dates);
    const handleDateStartChange = date => {
        setStartDates(transformAndSetDates(date));
    };
    const handleDateFinishedChange = date => {
        setFinishDates(transformAndSetDates(date));
    };
    const handleDateStartRecruitFinishedChange = date => {
        setRecruitFinish(transformAndSetDates(date));
    };

    const handleCategory = selectCategory => {
        // console.log(selectCategory.category);
        //선택한 인원의 숫자 가져오기
        setCategory(selectCategory.category);
    };

    const handleCancel = () => {
        const scrollStep = -window.scrollY / 20;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
                window.location.reload(); // Reload the page after scrolling to the top
            }
        }, 15);
    };

    const submitContestBuild = data => {
        // console.log(endDates);
        const newData = {
            title: contestDetail?.title,
            body: description,
            // contestLink: contestData?.contestLink, //공모전 주소
            started_at: startDates,
            finished_at: finishDates,
            recruit_finished_at: recruitFinish, // 공고 마감일
            total_count: data.people,
            // stackNames: [],
            recruit_part: category?.recruit_part, //참여하는 팀의 역할
            meeting_method: meeting,
            province: selectedCityData,
            district: selectedTownData,
            channel_method: complaint,
            channel_link: data.complainLink,
            // postType: false,
        };
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
    };
    // const submitProjectBuild = data => {
    //     const newData = {
    //         title: contestData?.title,
    //         contents: description,
    //         contestLink: '',
    //         startDate: dates.startDate,
    //         endDate: dates.endDate,
    //         finishDate: endDates.endDate,
    //         maxPerson: data.people,
    //         stackNames: selectedLanguage,
    //         categories: category?.categories,
    //         meetingMethod: meeting,
    //         meetingCity: selectedCityData,
    //         meetingTown: selectedTownData,
    //         questionMethod: complaint,
    //         questionLink: data.complainLink,
    //         postType: true,
    //     };
    //     postPosting(newData).then(res => {
    //         if (res === 5000) {
    //             dispatch(
    //                 openAlertModal({
    //                     titleContent: '프로젝트 팀빌딩',
    //                     modalContent: '공고를 더 이상 생성할 수 없습니다!',
    //                 }),
    //             );
    //         } else if (res === 2000) {
    //             dispatch(
    //                 openAlertModal({
    //                     titleContent: '프로젝트 팀빌딩',
    //                     modalContent:
    //                         '공고의 세부 항목 중 빠진것이 없는지 확인해주세요!',
    //                 }),
    //             );
    //         } else if (res === 5004) {
    //             dispatch(
    //                 openAlertModal({
    //                     titleContent: '프로젝트 팀빌딩',
    //                     modalContent:
    //                         '파트별 인원수가 전체 인원수와 일치하지 않습니다.',
    //                 }),
    //             );
    //         } else {
    //             dispatch(
    //                 openAlertModal({
    //                     titleContent: '프로젝트 팀빌딩',
    //                     modalContent: '공고가 생성되었습니다!',
    //                     redirectUrl: '/project',
    //                 }),
    //             );
    //         }
    //     });
    // };

    return (
        <S.Container>
            {posts === 'contest' && (
                <>
                    <S.Title>
                        모집 기본 정보를 입력해주세요
                        <S.MiniTitle>
                            <p>
                                추후에 공모전/프로젝트 홈에 올라갈 게시글
                                정보입니다.
                            </p>
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </S.MiniTitle>
                    </S.Title>
                    <S.Label>
                        <S.TapT>제목</S.TapT>
                        <S.TextArea
                            name=""
                            id="title"
                            value={contestDetail?.title}
                            onChange={handleTitleChange}
                            readOnly
                        />
                        {/* <S.InputNum>
                            <span>{titleCount}</span>
                            <span>/20</span>
                        </S.InputNum> */}
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
                            placeholder="사용자들이 공모전을 더 잘 이해할 수 있는 설명글을 적어주세요."
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
                            placeholder={
                                '모집 총 인원을 입력해주세요. *최대 10명 입니다.'
                            }
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
                            max={10}
                            step={1}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>모집 분야</S.TapP>
                        <CountGuest
                            isProject={false}
                            maxGuests={watch('people')} // 입력한 숫자를 최대치로 설정
                            onApply={handleCategory}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 방식</S.TapP>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'OFFLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('OFFLINE')}
                        >
                            오프라인
                        </S.ClickBtn>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'ONLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('ONLINE')}
                        >
                            온라인
                        </S.ClickBtn>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                        <Multilevel
                            isPost={true}
                            onItemSelectedCity={handleSelectedDataCity}
                            onItemSelectedTown={handleSelectedDataTown}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>예상 기간</S.TapP>
                        <S.DateSet>
                            <SelectDate
                                value={handleDateStartChange}
                                onChange={handleDateStartChange}
                                text={'시작날짜를 입력해주세요.'}
                            />
                            {/* <SelectCalendar
                                onApply={handleApply}
                                dates={dates}
                            /> */}
                            <SelectDate
                                value={handleDateFinishedChange}
                                onChange={handleDateFinishedChange}
                                text={'종료날짜를 입력해주세요.'}
                            />
                        </S.DateSet>
                    </S.Label>
                    <S.Label>
                        <S.TapP>공고 마감일자</S.TapP>
                        <S.DateSet>
                            <SelectDate
                                value={handleDateStartRecruitFinishedChange}
                                onChange={handleDateStartRecruitFinishedChange}
                                text={'공고 마감일을 입력해주세요.'}
                            />
                        </S.DateSet>
                    </S.Label>
                    {/* <S.Label>
                        <S.TapP>공고 마감일</S.TapP>
                    </S.Label> */}
                    <S.Label>
                        <S.TapP>문의사항</S.TapP>
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
            {/* 
{posts === 'project' && (
                <>
                    <S.Title>
                        모집 기본 정보를 입력해주세요
                        <S.MiniTitle>
                            <p>
                                추후에 공모전/프로젝트 홈에 올라갈 게시글
                                정보입니다.
                            </p>
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </S.MiniTitle>
                    </S.Title>
                    <S.Label>
                        <S.TapT>제목</S.TapT>
                        <S.TextArea
                            name=""
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="프로젝트 이름을 입력해주세요. *게시 후 수정할 수 없습니다."
                        />
                        <S.InputNum>
                            <span>{titleCount}</span>
                            <span>/20</span>
                        </S.InputNum>
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
                            placeholder="사용자들이 프로젝트를 더 잘 이해할 수 있는 설명글을 적어주세요."
                        ></S.TextArea>
                        <S.InputNum>
                            <span>{inputCount}</span>
                            <span>/500</span>
                        </S.InputNum>
                    </S.Label>
                    <S.Label>
                        <Input
                            label={'인원'}
                            type={'number'}
                            id={'people'}
                            placeholder={
                                '모집 총 인원을 입력해주세요. *최대 10명 입니다.'
                            }
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
                            max={10}
                            step={1}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>모집 분야</S.TapP>
                        <CountGuest
                            isProject={true}
                            maxGuests={watch('people')} // 입력한 숫자를 최대치로 설정
                            onApply={handleCategory}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 방식</S.TapP>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'OFFLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('OFFLINE')}
                        >
                            오프라인
                        </S.ClickBtn>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'ONLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('ONLINE')}
                        >
                            온라인
                        </S.ClickBtn>
                    </S.Label>
                    <S.Label>
                        <S.TapP>사용 언어</S.TapP>
                        <S.ButtonDiv>
                            {language.map((lang, index) => (
                                <S.ClickBtn
                                    key={index}
                                    $isselected={languages.includes(lang)}
                                    onClick={() => handleLanguageClick(lang)}
                                >
                                    {lang}
                                </S.ClickBtn>
                            ))}
                        </S.ButtonDiv>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                        <Multilevel
                            isPost={true}
                            onItemSelectedCity={handleSelectedDataCity}
                            onItemSelectedTown={handleSelectedDataTown}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>예상 기간</S.TapP>
                        <SelectCalendar onApply={handleApply} dates={dates} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>공고 마감일</S.TapP>
                        {<SelectCalendar onApply={handleEndApply} /> }*/
            /*
                        <SelectDate
                            value={handleDateChange}
                            onChange={handleDateChange}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>문의사항</S.TapP>
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
                        <S.Button onClick={handleSubmit(submitProjectBuild)}>
                            모집 시작하기
                        </S.Button> }
                    </S.ButtonContent>
                </>
            )} */}
            <AlertModal />
        </S.Container>
    );
};

export default TeamBuildingUploadPage;
