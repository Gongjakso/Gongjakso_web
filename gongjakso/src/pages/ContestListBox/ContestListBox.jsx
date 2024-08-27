import React from 'react';
import * as S from './ContestListBox.Styled';

const ContestListBox = ({ contestTitle, image, contestId, remainDate }) => {
    return (
        <S.ContestContainer>
            <S.RemainDate>
                <S.FireImage />
                {remainDate}
            </S.RemainDate>
            <S.ContestImg
                src="https://s3-alpha-sig.figma.com/img/27fd/a982/c6f3325db1ae92f85c1e159ebfd1448d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d-5HCU2jEuFfvIe8F0~PqJe77V7MBS5FRoxkTV67LhV0-EPEkGC7jwRTo1btGgnV6ZdEyjlIJUfNexng0-g684MDEiKzDlHXpoxHHsARBOsBo8NduZPLBwpnbEYIEWTcDURkdChKuoxk-WhePq8PtWgMj1BswIvTorAWLYPjY2koftMgutXOs40kM5vIR2TDc5YqA6CoMghRidG5e6g01qiiITz23AT1p-mZC8goY-6UJhW6MKXHN1~jHRzxlF1C1fHiiF2896dd8HUwUlK-lEuNadBd16c-yeiGkBDv2tLx3NXEmw7d89DDxwxs9tkSEDV711IWbuB75OLe9U9iag__"
                alt=""
            />
            <S.ContestTitle>{contestTitle}</S.ContestTitle>
            <S.ContestCompany>{contestId}</S.ContestCompany>
        </S.ContestContainer>
    );
};

export default ContestListBox;
