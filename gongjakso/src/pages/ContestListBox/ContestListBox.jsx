import React from 'react';
import * as S from './ContestListBox.Styled';

const ContestListBox = ({
    contestTitle,
    image,
    contestId,
    remainDate,
    company,
}) => {
    return (
        <S.ContestContainer>
            <S.RemainDate>
                <S.FireImage />
                {remainDate}
            </S.RemainDate>
            <S.InfoWrapper>
                <S.ContestImg src={image} alt="" />
                <S.TitleWrapper>
                    <S.ContestTitle>{contestTitle}</S.ContestTitle>
                    <S.ContestCompany>{company}</S.ContestCompany>
                </S.TitleWrapper>
            </S.InfoWrapper>
        </S.ContestContainer>
    );
};

export default ContestListBox;
