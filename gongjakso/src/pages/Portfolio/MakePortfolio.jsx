import * as S from './Portfolio.Styled';
import { SelectInput } from '../../components/common/Input/Input';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMyInfo } from '../../service/profile_service';
import { v4 as uuidv4 } from 'uuid'; // UUID import

import {
    editPortfolio,
    getPortfolio,
    postPortfolio,
} from '../../service/portfolio_service';
import SelectOne from '../../components/common/Calendar/SelectOne';

const MakePortfolio = ({ portfolioId }) => {
    const [data, setProfileData] = useState();
    const [portfolioName, setPortfolioName] = useState('');
    const [portfolio, setPortfolio] = useState(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const { id } = useParams();

    const [educationSections, setEducationSections] = useState([
        {
            id: uuidv4(),
            schoolName: '',
            gradeStatus: '1학년',
            state: '재학 중',
        },
    ]);
    const [careerSections, setCareerSections] = useState([
        {
            id: uuidv4(),
            companyName: '',
            position: '',
            description: '',
            isActive: false,
        },
    ]);
    const [activitySections, setActivitySections] = useState([
        { id: uuidv4(), activityName: '', activityStatus: '활동 중' },
    ]);
    const [awardSections, setAwardSections] = useState([
        { id: uuidv4(), competitionName: '', award: '' },
    ]);
    const [certificateSections, setCertificateSections] = useState([
        { id: uuidv4(), examName: '', score: '' },
    ]);
    const [snsLinks, setSnsLinks] = useState([{ id: uuidv4(), link: '' }]);

    const gradeStatus_options = ['1학년', '2학년', '3학년', '4학년'];
    const status_options = ['재학 중', '휴학 중', '졸업', '졸업 유예'];
    const activityStatus_options = ['활동 중', '활동 종료'];

    const addSection = (sectionSetter, currentSections) => {
        sectionSetter([...currentSections, { id: uuidv4() }]);
    };

    const addSNSLink = () => {
        setSnsLinks([...snsLinks, { id: uuidv4(), link: '' }]);
    };

    const handleDeleteSection = (sectionType, id) => {
        const deleteSection = (sections, setSections) => {
            setSections(prevSections =>
                prevSections.filter(section => section.id !== id),
            );
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
    const handleApplyDate = (date, type, sectionId, sectionType) => {
        const sectionHandlers = {
            education: {
                state: educationSections,
                setState: setEducationSections,
            },
            career: { state: careerSections, setState: setCareerSections },
            activity: {
                state: activitySections,
                setState: setActivitySections,
            },
            award: { state: awardSections, setState: setAwardSections },
            certificate: {
                state: certificateSections,
                setState: setCertificateSections,
            },
        };

        const { state, setState } = sectionHandlers[sectionType];
        const updatedSections = [...state];
        const sectionIndex = updatedSections.findIndex(
            section => section.id === sectionId,
        );

        if (sectionIndex !== -1) {
            updatedSections[sectionIndex][type] = date; // 선택된 날짜 반영
            setState(updatedSections); // 상태 업데이트
        }
    };

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data); // 'response'를 바로 전달
        });
    }, []);

    useEffect(() => {
        if (id) {
            // 포트폴리오 수정 모드
            const fetchPortfolioData = async () => {
                try {
                    const response = await getPortfolio(id);
                    const portfolioData = response.data.data;
                    setPortfolioName(portfolioData.portfolioName || '');
                    setEducationSections(
                        portfolioData.educationList.length
                            ? portfolioData.educationList.map(section => ({
                                  schoolName: section.school || '',
                                  gradeStatus: section.grade || '1학년',
                                  state: section.state || '재학 중',
                                  id: uuidv4(),
                              }))
                            : [
                                  {
                                      id: uuidv4(),
                                      schoolName: '',
                                      gradeStatus: '1학년',
                                      state: '재학 중',
                                  },
                              ],
                    );

                    setCareerSections(
                        portfolioData.workList.length
                            ? portfolioData.workList.map(section => ({
                                  companyName: section.company || '',
                                  position: section.partition || '',
                                  description: section.detail || '',
                                  enteredAt: section.enteredAt || '',
                                  exitedAt: section.exitedAt || '',
                                  isActive: section.isActive || false,
                                  id: uuidv4(),
                              }))
                            : [
                                  {
                                      id: uuidv4(),
                                      companyName: '',
                                      position: '',
                                      description: '',
                                      isActive: false,
                                  },
                              ],
                    );

                    setActivitySections(
                        portfolioData.activityList.length
                            ? portfolioData.activityList.map(section => ({
                                  activityName: section.name || '',
                                  activityStatus: section.isActive
                                      ? '활동 중'
                                      : '활동 종료',
                                  id: uuidv4(),
                              }))
                            : [
                                  {
                                      id: uuidv4(),
                                      activityName: '',
                                      activityStatus: '활동 중',
                                  },
                              ],
                    );

                    setAwardSections(
                        portfolioData.awardList.length
                            ? portfolioData.awardList.map(section => ({
                                  competitionName: section.contestName || '',
                                  award: section.awardName || '',
                                  awardDate: section.awardDate || '',
                                  id: uuidv4(),
                              }))
                            : [
                                  {
                                      id: uuidv4(),
                                      competitionName: '',
                                      award: '',
                                  },
                              ],
                    );

                    setCertificateSections(
                        portfolioData.certificateList.length
                            ? portfolioData.certificateList.map(section => ({
                                  examName: section.name || '',
                                  score: section.rating || '',
                                  certificationDate:
                                      section.certificationDate || '',
                                  id: uuidv4(),
                              }))
                            : [
                                  {
                                      id: uuidv4(),
                                      examName: '',
                                      score: '',
                                  },
                              ],
                    );

                    setSnsLinks(
                        portfolioData.snsList.length
                            ? portfolioData.snsList.map(link => ({
                                  link: link.snsLink || '',
                                  id: uuidv4(),
                              }))
                            : [
                                  {
                                      id: uuidv4(),
                                      link: '',
                                  },
                              ],
                    );
                } catch (err) {
                    console.error('Error fetching portfolio:', err);
                    setError(
                        '포트폴리오 데이터를 불러오는 중 오류가 발생했습니다.',
                    );
                }
            };
            fetchPortfolioData();
        }
    }, [id]);
    const formatDate = date => {
        const validDate = date instanceof Date ? date : new Date(date);

        if (!validDate || isNaN(validDate.getTime())) {
            return null; // 유효하지 않은 날짜일 경우 null 반환
        }
        const year = validDate.getFullYear();
        const month = String(validDate.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 포맷
        const day = String(validDate.getDate()).padStart(2, '0'); // 일을 2자리로 포맷
        return `${year}-${month}-${day}`; // YYYY-MM-DD 형식으로 반환
    };

    const handleSavePortfolio = async () => {
        const portfolioData = {
            portfolioId: id,
            portfolioName,
            educationList: educationSections.map(section => ({
                school: section.schoolName,
                grade: section.gradeStatus,
                state: section.state,
            })),
            workList: careerSections.map(section => ({
                company: section.companyName,
                partition: section.position,
                enteredAt: formatDate(section.enteredAt),
                exitedAt: formatDate(section.exitedAt),
                isActive: section.isActive,
                detail: section.description,
            })),
            activityList: activitySections.map(section => ({
                name: section.activityName,
                isActive: section.activityStatus === '활동 중',
            })),
            awardList: awardSections.map(section => ({
                contestName: section.competitionName,
                awardName: section.award,
                awardDate: formatDate(section.awardDate),
            })),
            certificateList: certificateSections.map(section => ({
                name: section.examName,
                rating: section.score,
                certificationDate: formatDate(section.certificationDate),
            })),
            snsList: snsLinks.map(link => ({
                snsLink: link.link,
            })),
        };

        try {
            setLoading(true);
            let response;
            if (id) {
                response = await editPortfolio(id, portfolioData);
            } else {
                response = await postPortfolio(portfolioData);
            }
            alert(
                id
                    ? '포트폴리오가 성공적으로 수정되었습니다.'
                    : '포트폴리오가 성공적으로 저장되었습니다.',
            );
            navigate('/profile');
        } catch (err) {
            console.error('Error saving portfolio', err);
            setError('포트폴리오 저장 중 오류가 발생했습니다.');
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
                                value={section.schoolName || ''}
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
                                    placeholder={
                                        section.gradeStatus ||
                                        gradeStatus_options[0]
                                    } // 기본 placeholder 처리
                                    value={section.gradeStatus || ''} // value가 없을 때만 placeholder를 사용
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
                                    placeholder={
                                        section.state || status_options[0]
                                    }
                                    value={section.state || ''}
                                    onChange={value => {
                                        const updatedSections = [
                                            ...educationSections,
                                        ];
                                        updatedSections[index].state = value;
                                        setEducationSections(updatedSections);
                                    }}
                                    case={true}
                                />
                            </S.Fillter1>
                        </S.InputContainer>
                        {educationSections.length > 1 && (
                            <S.DeleteBtn
                                onClick={() =>
                                    handleDeleteSection('education', section.id)
                                }
                            />
                        )}
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
                                    value={section.companyName || ''}
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
                                    value={section.position || ''}
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
                                <S.CalendarSection>
                                    <SelectOne
                                        onApply={date =>
                                            handleApplyDate(
                                                date,
                                                'enteredAt',
                                                section.id,
                                                'career',
                                            )
                                        }
                                        placeholder={
                                            section.enteredAt || '입사일'
                                        }
                                        width={'27.5rem'}
                                        value={section.enteredAt || ''}
                                    />
                                    <SelectOne
                                        onApply={date =>
                                            handleApplyDate(
                                                date,
                                                'exitedAt',
                                                section.id,
                                                'career',
                                            )
                                        }
                                        placeholder={
                                            section.exitedAt || '퇴사일'
                                        }
                                        width={'27.5rem'}
                                        value={section.exitedAt || ''}
                                    />
                                </S.CalendarSection>
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
                                    value={section.description || ''}
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
                                value={section.activityName || ''}
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
                                    placeholder={
                                        section.activityStatus ||
                                        activityStatus_options[0]
                                    }
                                    value={section.activityStatus || ''}
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
                        </S.InputContainer>
                        {activitySections.length > 1 && (
                            <S.DeleteBtn
                                onClick={() =>
                                    handleDeleteSection('activity', section.id)
                                }
                            />
                        )}
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
                                value={section.competitionName || ''}
                                onChange={e => {
                                    const updatedSections = [...awardSections];
                                    updatedSections[index].competitionName =
                                        e.target.value;
                                    setAwardSections(updatedSections);
                                }}
                            />
                            <S.ScoreInput
                                placeholder="수상"
                                value={section.award || ''}
                                onChange={e => {
                                    const updatedSections = [...awardSections];
                                    updatedSections[index].award =
                                        e.target.value;
                                    setAwardSections(updatedSections);
                                }}
                            />
                            <SelectOne
                                onApply={date =>
                                    handleApplyDate(
                                        date,
                                        'awardDate',
                                        section.id,
                                        'award',
                                    )
                                }
                                placeholder={section.awardDate || '수상 날짜'}
                                width={'16rem'}
                                value={section.awardDate || ''}
                            />
                        </S.InputContainer>
                        {awardSections.length > 1 && (
                            <S.DeleteBtn
                                onClick={() =>
                                    handleDeleteSection('award', section.id)
                                }
                            />
                        )}
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
                                value={section.examName || ''}
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
                                value={section.score || ''}
                                onChange={e => {
                                    const updatedSections = [
                                        ...certificateSections,
                                    ];
                                    updatedSections[index].score =
                                        e.target.value;
                                    setCertificateSections(updatedSections);
                                }}
                            />
                            <SelectOne
                                onApply={date =>
                                    handleApplyDate(
                                        date,
                                        'certificationDate',
                                        section.id,
                                        'certificate',
                                    )
                                }
                                width={'16rem'}
                                placeholder={
                                    section.certificationDate || '취득 날짜'
                                }
                                value={section.certificationDate || ''}
                            />
                        </S.InputContainer>
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
