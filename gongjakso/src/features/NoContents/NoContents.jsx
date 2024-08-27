import React from 'react';
import * as S from './NoContents.styled';

const NoContents = props => {
    const { mainTxt, subTxt, link, btnLabel } = props;

    const handleLinkClick = event => {
        event.preventDefault(); // 기본 Link 동작을 막음
        window.open(link, '_blank', 'noopener,noreferrer'); // 새 탭에서 링크를 엶
    };
    return (
        <S.NoContentsContainer>
            <S.Nopost />
            <p>
                <span>{mainTxt}</span>
                <span>{subTxt}</span>
            </p>
            {btnLabel && (
                <S.Btn onClick={handleLinkClick}>
                    <S.BtnLabel>{btnLabel}</S.BtnLabel>
                    <S.Nowgo />
                </S.Btn>
            )}
        </S.NoContentsContainer>
    );
};

export default NoContents;
