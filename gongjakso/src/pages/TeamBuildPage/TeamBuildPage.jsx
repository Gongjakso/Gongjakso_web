import React, { useState } from 'react';
import * as S from './TeamBuildPage.Styled';
import TeamBuildingUploadPage from './TeamBuildingUploadPage';
import { useLocation } from 'react-router-dom';

const TeamBuildPage = () => {
    const [currentContent, setCurrentContent] = useState('contest'); // default 값을 설정
    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = content => {
        setButtonClicked(content);
        setCurrentContent(content);
    };
    const location = useLocation();
    const contestDetail = location.state?.contestDetail;
    const contestData = location.state?.contestData;

    return (
        <>
            <S.Container>
                <S.Text>'{contestData?.title}'의 팀 만들기</S.Text>
                {/* <S.TitleContent>*/}
                {/*
                    <S.ButtonSet>
                        <S.Button
                            type="button"
                            className={
                                buttonClicked === 'contest'
                                    ? 'contest active'
                                    : 'contest'
                            }
                            $isClick={buttonClicked}
                            onClick={() => handleButtonClick('contest')}
                        >
                            공모전 팀 만들기
                        </S.Button>
                        <S.Button
                            type="button"
                            className={
                                buttonClicked === 'project'
                                    ? 'project active'
                                    : 'project'
                            }
                            $isClick={buttonClicked}
                            onClick={() => handleButtonClick('project')}
                        >
                            프로젝트 팀 만들기
                        </S.Button>
                    </S.ButtonSet>
                </S.TitleContent> */}
                {/* {currentContent === 'contest' && ( */}
                <S.BuildDiv>
                    <TeamBuildingUploadPage
                        posts={currentContent}
                        contestDetail={contestDetail}
                        contestData={contestData}
                    />
                </S.BuildDiv>
                {/* )} */}
                {/* {currentContent === 'project' && (
                    <S.BuildDiv>
                        <TeamBuildingUploadPage posts={currentContent} />
                    </S.BuildDiv>
                )}
                {currentContent === 'default' && (
                    <S.ImageContent>
                        <S.ImageDiv />
                        <S.Text
                            $isMain="main"
                            style={{
                                marginBottom: '100px',
                                fontFamily: 'PreMedium',
                            }}
                        >
                            팀빌딩 카테고리를 선택해주세요!
                        </S.Text>
                    </S.ImageContent>
                )} */}
            </S.Container>
        </>
    );
};

export default TeamBuildPage;
