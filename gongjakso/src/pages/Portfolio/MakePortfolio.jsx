import * as S from './Portfolio.Styled';
import { SelectInput } from '../../components/common/Input/Input';
import { useState } from 'react';

const MakePortfolio = () => {
    // Initialize state for sections with empty fields
    const [educationSections, setEducationSections] = useState([
        { id: 1, schoolName: '', gradeStatus: '1학년', status: '재학 중' },
    ]);
    const [careerSections, setCareerSections] = useState([
        { id: 1, companyName: '', position: '', description: '' },
    ]);
    const [activitySections, setActivitySections] = useState([
        { id: 1, activityName: '', activityStatus: '재학 중' },
    ]);
    const [awardSections, setAwardSections] = useState([
        { id: 1, competitionName: '', award: '' },
    ]);
    const [certificateSections, setCertificateSections] = useState([
        { id: 1, examName: '', score: '' },
    ]);
    const [snsLinks, setSnsLinks] = useState([{ id: 1, link: '' }]);

    // Example options
    const gradeStatus_options = ['1학년', '2학년', '3학년', '4학년'];
    const status_options = ['재학 중', '휴학 중', '졸업', '졸업 유예'];
    const activityStatus_options = ['재학 중', '휴학 중', '졸업', '졸업 유예'];

    const addSection = (sectionSetter, currentSections) => {
        sectionSetter([...currentSections, { id: currentSections.length + 1 }]);
    };
    const addSNSLink = () => {
        setSnsLinks([...snsLinks, { id: snsLinks.length + 1, link: '' }]);
    };

    return (
        <div>
            <S.TopBox>
                <S.PortfolioInfo>
                    <S.UserName>김지은님의 포트폴리오</S.UserName>
                    <S.Description>
                        포트폴리오 완성도를 높이면 팀 합류 확률이 올라가요!
                    </S.Description>
                </S.PortfolioInfo>
            </S.TopBox>
            <S.GlobalBox>
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
                    <S.BoxDetail key={section.id}>
                        <S.InputContainer>
                            <S.CompanyInput
                                placeholder="회사명"
                                value={section.companyName}
                                onChange={e => {
                                    const updatedSections = [...careerSections];
                                    updatedSections[index].companyName =
                                        e.target.value;
                                    setCareerSections(updatedSections);
                                }}
                            />
                            <S.PositionInput
                                placeholder="부서명/직책"
                                value={section.position}
                                onChange={e => {
                                    const updatedSections = [...careerSections];
                                    updatedSections[index].position =
                                        e.target.value;
                                    setCareerSections(updatedSections);
                                }}
                            />
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Textarea
                                placeholder="경력사항을 설명해주세요."
                                value={section.description}
                                onChange={e => {
                                    const updatedSections = [...careerSections];
                                    updatedSections[index].description =
                                        e.target.value;
                                    setCareerSections(updatedSections);
                                }}
                            />
                        </S.InputContainer>
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
                        </S.LinkContainer>
                    </S.BoxDetail>
                ))}
                <S.BtnContainer>
                    <S.BackBtn>돌아가기</S.BackBtn>
                    <S.SaveBtn>저장하기</S.SaveBtn>
                </S.BtnContainer>
            </S.GlobalBox>
        </div>
    );
};
export default MakePortfolio;
