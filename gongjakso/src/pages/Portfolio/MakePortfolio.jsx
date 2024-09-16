import * as S from './Portfolio.Styled';
import { SelectInput } from '../../components/common/Input/Input';
import SelectCalendar from '../../components/common/Calendar/SelectCalendar';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { getMyInfo } from '../../service/profile_service';
import { getPortfolio, postPortfolio } from '../../service/portfolio_service';

const MakePortfolio = ({ portfolioId }) => {
    const [data, setProfileData] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [portfolioName, setPortfolioName] = useState('');
    const [portfolio, setPortfolio] = useState(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const [educationSections, setEducationSections] = useState([
        {
            id: Date.now(),
            schoolName: '',
            gradeStatus: '1학년',
            status: '재학 중',
        },
    ]);
    const [careerSections, setCareerSections] = useState([
        {
            id: Date.now(),
            companyName: '',
            position: '',
            description: '',
            isActive: false,
        },
    ]);
    const [activitySections, setActivitySections] = useState([
        { id: Date.now(), activityName: '', activityStatus: '활동 중' },
    ]);
    const [awardSections, setAwardSections] = useState([
        { id: Date.now(), competitionName: '', award: '' },
    ]);
    const [certificateSections, setCertificateSections] = useState([
        { id: Date.now(), examName: '', score: '' },
    ]);
    const [snsLinks, setSnsLinks] = useState([{ id: Date.now(), link: '' }]);

    const gradeStatus_options = ['1학년', '2학년', '3학년', '4학년'];
    const status_options = ['재학 중', '휴학 중', '졸업', '졸업 유예'];
    const activityStatus_options = ['활동 중', '활동 종료'];

    const addSection = (sectionSetter, currentSections) => {
        sectionSetter([...currentSections, { id: Date.now() }]);
    };

    const addSNSLink = () => {
        setSnsLinks([...snsLinks, { id: Date.now(), link: '' }]);
    };

    const handleDeleteSection = (sectionType, id) => {
        const deleteSection = (sections, setSections) => {
            setSections(sections.filter(section => section.id !== id));
        };

        switch (sectionType) {
            case 'education':
                deleteSection(educationSections, setEducationSections);
                break;
            case 'career':
                deleteSection(careerSections, setCareerSections);
                break;
            case 'activity':
                deleteSection(activitySections, setActivitySections);
                break;
            case 'award':
                deleteSection(awardSections, setAwardSections);
                break;
            case 'certificate':
                deleteSection(certificateSections, setCertificateSections);
                break;
            default:
                break;
        }
    };
    const [dates, setDates] = useState([]);
    const navigate = useNavigate();
    const transformAndSetDates = (startDate, endDate) => {
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);
        const formattedStartDate = `${parsedStartDate.toISOString().split('T')[0]}T02:32:22.376895959`;
        const formattedEndDate = `${parsedEndDate.toISOString().split('T')[0]}T02:32:22.376895959`;
        setDates({ startDate: formattedStartDate, endDate: formattedEndDate });
    };

    const handleCareerDate = selectedDates => {
        transformAndSetDates(selectedDates.startDate, selectedDates.endDate);
    };
    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

    useEffect(() => {
        if (!portfolioId) {
            // portfolioId가 없을 때는 fetchPortfolio를 호출하지 않음
            return;
        }

        const fetchPortfolio = async () => {
            try {
                const data = await getPortfolio(portfolioId);
                setPortfolio(data);
            } catch (error) {
                console.error('Failed to fetch portfolio:', error);
            }
        };

        fetchPortfolio();
    }, [portfolioId]);

    const handleSavePortfolio = async () => {
        const portfolioData = {
            portfolioId,
            portfolioName,
            education: educationSections,
            career: careerSections,
            activity: activitySections,
            awards: awardSections,
            certificates: certificateSections,
            snsLinks,
        };

        try {
            setLoading(true);
            await postPortfolio(portfolioData);
            alert('포트폴리오가 저장되었습니다.');
        } catch (err) {
            console.error('Error saving portfolio', err);
            setError('Error saving portfolio');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <S.TopBox>
                <S.PortfolioInfo>
                    <S.UserName>{data?.name}님의 포트폴리오</S.UserName>
                    <S.Description>
                        포트폴리오 완성도를 높이면 팀 합류 확률이 올라가요!
                    </S.Description>
                </S.PortfolioInfo>
            </S.TopBox>
            <S.GlobalBox>
                <S.TitleSection>
                    <S.SubTitle>포트폴리오 이름</S.SubTitle>
                </S.TitleSection>
                <S.InputContainer>
                    <S.NameInput
                        placeholder="포트폴리오 이름을 입력해주세요."
                        value={portfolioName}
                        onChange={e => setPortfolioName(e.target.value)}
                    />
                </S.InputContainer>
                {/* 학력 Section */}
                <S.TitleSection>
                    <S.SubTitle>학력</S.SubTitle>
                    <S.PlusBtn
                        onClick={() =>
                            addSection(setEducationSections, educationSections)
                        }
                    />
                </S.TitleSection>
                {educationSections.map((section, index) => (
                    <S.BoxDetail key={section.id}>
                        <S.InputContainer>
                            <S.EducationInput
                                placeholder="학교명"
                                value={section.schoolName}
                                onChange={e => {
                                    const updatedSections = [
                                        ...educationSections,
                                    ];
                                    updatedSections[index].schoolName =
                                        e.target.value;
                                    setEducationSections(updatedSections);
                                }}
                            />
                            <S.Fillter1>
                                <SelectInput
                                    id={`Gradestatus-${index}`}
                                    selectOptions={gradeStatus_options}
                                    placeholder={gradeStatus_options[0]}
                                    onChange={value => {
                                        const updatedSections = [
                                            ...educationSections,
                                        ];
                                        updatedSections[index].gradeStatus =
                                            value;
                                        setEducationSections(updatedSections);
                                    }}
                                    case={true}
                                />
                            </S.Fillter1>
                            <S.Fillter1>
                                <SelectInput
                                    id={`Educationstatus-${index}`}
                                    selectOptions={status_options}
                                    placeholder={status_options[0]}
                                    onChange={value => {
                                        const updatedSections = [
                                            ...educationSections,
                                        ];
                                        updatedSections[index].status = value;
                                        setEducationSections(updatedSections);
                                    }}
                                    case={true}
                                />
                            </S.Fillter1>
                            {educationSections.length > 1 && (
                                <S.DeleteBtn
                                    onClick={() =>
                                        handleDeleteSection(
                                            'education',
                                            section.id,
                                        )
                                    }
                                />
                            )}
                        </S.InputContainer>
                    </S.BoxDetail>
                ))}

                {/* 경력사항 Section */}
                <S.TitleSection>
                    <S.SubTitle>경력사항</S.SubTitle>
                    <S.PlusBtn
                        onClick={() =>
                            addSection(setCareerSections, careerSections)
                        }
                    />
                </S.TitleSection>
                {careerSections.map((section, index) => (
                    <S.BoxDetail
                        key={section.id}
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <S.BtnWrapper>
                            <S.InputContainer>
                                <S.CompanyInput
                                    placeholder="회사명"
                                    value={section.companyName}
                                    onChange={e => {
                                        const updatedSections = [
                                            ...careerSections,
                                        ];
                                        updatedSections[index].companyName =
                                            e.target.value;
                                        setCareerSections(updatedSections);
                                    }}
                                />
                                <S.PositionInput
                                    placeholder="부서명/직책"
                                    value={section.position}
                                    onChange={e => {
                                        const updatedSections = [
                                            ...careerSections,
                                        ];
                                        updatedSections[index].position =
                                            e.target.value;
                                        setCareerSections(updatedSections);
                                    }}
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <SelectCalendar
                                    onApply={handleCareerDate}
                                    dates={dates}
                                />
                                <SelectCalendar
                                    onApply={handleCareerDate}
                                    dates={dates}
                                />
                                <S.CheckContainer>
                                    <S.CareerCheck>재직 중</S.CareerCheck>
                                    <S.CheckImg
                                        onClick={() => {
                                            const updatedSections = [
                                                ...careerSections,
                                            ];
                                            updatedSections[index].isActive =
                                                !updatedSections[index]
                                                    .isActive;
                                            setCareerSections(updatedSections);
                                        }}
                                        checked={section.isActive}
                                    />
                                </S.CheckContainer>
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.Textarea
                                    placeholder="경력사항을 설명해주세요."
                                    value={section.description}
                                    onChange={e => {
                                        const updatedSections = [
                                            ...careerSections,
                                        ];
                                        updatedSections[index].description =
                                            e.target.value;
                                        setCareerSections(updatedSections);
                                    }}
                                />
                            </S.InputContainer>
                        </S.BtnWrapper>
                        {careerSections.length > 1 && (
                            <S.BtnBox>
                                <S.DeleteBtn
                                    style={{
                                        display: 'flex',
                                        alignContent: 'center',
                                    }}
                                    onClick={() =>
                                        handleDeleteSection(
                                            'career',
                                            section.id,
                                        )
                                    }
                                />
                            </S.BtnBox>
                        )}
                    </S.BoxDetail>
                ))}

                {/* 대외활동 Section */}
                <S.TitleSection>
                    <S.SubTitle>대외활동</S.SubTitle>
                    <S.PlusBtn
                        onClick={() =>
                            addSection(setActivitySections, activitySections)
                        }
                    />
                </S.TitleSection>
                {activitySections.map((section, index) => (
                    <S.BoxDetail key={section.id}>
                        <S.InputContainer>
                            <S.ActivityInput
                                placeholder="활동명"
                                value={section.activityName}
                                onChange={e => {
                                    const updatedSections = [
                                        ...activitySections,
                                    ];
                                    updatedSections[index].activityName =
                                        e.target.value;
                                    setActivitySections(updatedSections);
                                }}
                            />
                            <S.Fillter1>
                                <SelectInput
                                    id={`Activitystatus-${index}`}
                                    selectOptions={activityStatus_options}
                                    placeholder={activityStatus_options[0]}
                                    onChange={value => {
                                        const updatedSections = [
                                            ...activitySections,
                                        ];
                                        updatedSections[index].activityStatus =
                                            value;
                                        setActivitySections(updatedSections);
                                    }}
                                    case={true}
                                />
                            </S.Fillter1>
                            {activitySections.length > 1 && (
                                <S.DeleteBtn
                                    onClick={() =>
                                        handleDeleteSection(
                                            'activity',
                                            section.id,
                                        )
                                    }
                                />
                            )}
                        </S.InputContainer>
                    </S.BoxDetail>
                ))}

                {/* 수상경력 Section */}
                <S.TitleSection>
                    <S.SubTitle>수상경력</S.SubTitle>
                    <S.PlusBtn
                        onClick={() =>
                            addSection(setAwardSections, awardSections)
                        }
                    />
                </S.TitleSection>
                {awardSections.map((section, index) => (
                    <S.BoxDetail key={section.id}>
                        <S.InputContainer>
                            <S.TestInput
                                placeholder="대회명"
                                value={section.competitionName}
                                onChange={e => {
                                    const updatedSections = [...awardSections];
                                    updatedSections[index].competitionName =
                                        e.target.value;
                                    setAwardSections(updatedSections);
                                }}
                            />
                            <S.ScoreInput
                                placeholder="수상"
                                value={section.award}
                                onChange={e => {
                                    const updatedSections = [...awardSections];
                                    updatedSections[index].award =
                                        e.target.value;
                                    setAwardSections(updatedSections);
                                }}
                            />
                            {awardSections.length > 1 && (
                                <S.DeleteBtn
                                    onClick={() =>
                                        handleDeleteSection('award', section.id)
                                    }
                                />
                            )}
                        </S.InputContainer>
                    </S.BoxDetail>
                ))}

                {/* 자격증 Section */}
                <S.TitleSection>
                    <S.SubTitle>자격증</S.SubTitle>
                    <S.PlusBtn
                        onClick={() =>
                            addSection(
                                setCertificateSections,
                                certificateSections,
                            )
                        }
                    />
                </S.TitleSection>
                {certificateSections.map((section, index) => (
                    <S.BoxDetail key={section.id}>
                        <S.InputContainer>
                            <S.TestInput
                                placeholder="시험명"
                                value={section.examName}
                                onChange={e => {
                                    const updatedSections = [
                                        ...certificateSections,
                                    ];
                                    updatedSections[index].examName =
                                        e.target.value;
                                    setCertificateSections(updatedSections);
                                }}
                            />
                            <S.ScoreInput
                                placeholder="점수/급수"
                                value={section.score}
                                onChange={e => {
                                    const updatedSections = [
                                        ...certificateSections,
                                    ];
                                    updatedSections[index].score =
                                        e.target.value;
                                    setCertificateSections(updatedSections);
                                }}
                            />
                            {certificateSections.length > 1 && (
                                <S.DeleteBtn
                                    onClick={() =>
                                        handleDeleteSection(
                                            'certificate',
                                            section.id,
                                        )
                                    }
                                />
                            )}
                        </S.InputContainer>
                    </S.BoxDetail>
                ))}

                <S.TitleSection>
                    <S.SubTitle>SNS</S.SubTitle>
                    <S.PlusBtn onClick={addSNSLink} />
                </S.TitleSection>
                {snsLinks.map((section, index) => (
                    <S.BoxDetail key={section.id}>
                        <S.LinkContainer>
                            <S.LinkIcon />
                            <S.SNSInput
                                placeholder="링크를 입력해주세요."
                                value={section.link}
                                onChange={e => {
                                    const updatedLinks = [...snsLinks];
                                    updatedLinks[index].link = e.target.value;
                                    setSnsLinks(updatedLinks);
                                }}
                            />
                            {snsLinks.length > 1 && (
                                <S.DeleteBtn
                                    onClick={() => {
                                        if (snsLinks.length > 1) {
                                            setSnsLinks(
                                                snsLinks.filter(
                                                    link =>
                                                        link.id !== section.id,
                                                ),
                                            );
                                        }
                                    }}
                                />
                            )}
                        </S.LinkContainer>
                    </S.BoxDetail>
                ))}
                <S.BtnContainer>
                    <S.BackBtn onClick={() => navigate(-1)}>돌아가기</S.BackBtn>
                    <S.SaveBtn onClick={handleSavePortfolio}>
                        저장하기
                    </S.SaveBtn>
                </S.BtnContainer>
            </S.GlobalBox>
        </div>
    );
};
export default MakePortfolio;
