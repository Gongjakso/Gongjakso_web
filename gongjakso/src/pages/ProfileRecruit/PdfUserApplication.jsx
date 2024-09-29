import React, { useEffect, useState } from 'react';
import * as S from './PdfUserApplicationStyled';
import * as T from '../../features/modal/ApplyModal.styled';
import { useParams } from 'react-router-dom';
import Logo from '../../assets/images/applicationLogo.svg';
import { getMyApplication } from '../../service/apply_service';
import { getMyPortfolio } from '../../service/post_service';

const PdfUserApplication = () => {
    const { id } = useParams();

    const [myApp, setmyApp] = useState([]);
    const [portfolioData, setportfolioData] = useState([]);

    useEffect(() => {
        // [GET] 특정 지원자 지원서 조회 API
        getMyApplication(id).then(res => {
            setmyApp(res?.data);
        });

        // [GET] 내 포트폴리오 리스트 조회 API
        getMyPortfolio().then(res => {
            setportfolioData(res?.data);
        });
    }, [id]);

    return (
        <>
            <S.TopBox>
                <img src={Logo} alt="title-logo" />
                <S.Title>{myApp?.applicant_name} 님의 포트폴리오</S.Title>
                <S.Major>{myApp?.applicant_major}</S.Major>
                <S.Major>{myApp?.applicant_phone}</S.Major>
            </S.TopBox>

            <S.GlobalBox>
                <S.DetailBox>
                    <S.SubTitle>지원분야</S.SubTitle>
                    <div>
                        {myApp?.recruit_part?.map((item, i) => (
                            <T.RoundForm
                                key={i}
                                $isselected={
                                    item.position === myApp?.apply_part
                                }
                                style={{ cursor: 'default' }}
                            >
                                {item.position}
                            </T.RoundForm>
                        ))}
                    </div>
                </S.DetailBox>
                <S.DetailBox>
                    <S.SubTitle>지원이유</S.SubTitle>
                    <S.ContentBox>{myApp?.body}</S.ContentBox>
                </S.DetailBox>
            </S.GlobalBox>
        </>
    );
};

export default PdfUserApplication;
