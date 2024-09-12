import React from 'react';
import * as S from './ContestListBox.Styled';

const ContestListBox = ({ contestTitle, image, contestId, remainDate }) => {
    return (
        <S.ContestContainer>
            <S.RemainDate>
                <S.FireImage />
                {remainDate}
            </S.RemainDate>
            <S.ContestImg src={image} alt="" />
            <S.ContestTitle>{contestTitle}</S.ContestTitle>
            <S.ContestCompany>{contestId}</S.ContestCompany>
        </S.ContestContainer>
    );
};

export default ContestListBox;
