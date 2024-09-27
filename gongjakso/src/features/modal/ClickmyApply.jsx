import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { useEffect, useState } from 'react';
import { getMyApplication } from '../../service/apply_service';
import { getMyPortfolio } from '../../service/post_service';

const ClickmyApply = props => {
    const [myApp, setmyApp] = useState([]);
    const [portfolioData, setportfolioData] = useState([]);

    // 스크롤 방지
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    useEffect(() => {
        getMyApplication(props.applyId).then(res => {
            setmyApp(res?.data);
        });

        // [GET] 내 포트폴리오 리스트 조회 API
        getMyPortfolio().then(res => {
            setportfolioData(res?.data);
        });
    }, [props.applyId]);

    // console.log(portfolioData);

    return (
        <div>
            <S.Background>
                <S.Modal $w="1000px" $h="700px" $bc={({ theme }) => theme.box1}>
                    <S.Backbtn
                        onClick={() => {
                            props.setOpen(false);
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>

                    <S.MainTitle>
                        <p>{myApp?.applicant_name}</p>
                        <S.Major>{myApp?.applicant_phone}</S.Major>
                        <S.Major>{myApp?.applicant_major}</S.Major>
                    </S.MainTitle>
                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            {myApp?.recruit_part?.map((item, i) => (
                                <S.RoundForm
                                    key={i}
                                    $isselected={
                                        item.position === myApp?.apply_part
                                    }
                                    style={{ cursor: 'default' }}
                                >
                                    {item.position}
                                </S.RoundForm>
                            ))}
                        </S.FormBox>
                    </S.DetailBox>

                    <S.DetailBox>
                        <S.SubTitle>나의 포트폴리오</S.SubTitle>
                        {/* <S.FormBox>
                            <S.RoundForm
                                $isselected={true}
                                style={{ cursor: 'default' }}
                            >
                                {myApp?.is_private
                                    ? '비공개'
                                    : myApp?.portfolio_name}
                            </S.RoundForm>
                        </S.FormBox> */}
                        <S.FormBox>
                            {myApp?.is_private ? (
                                <S.RoundForm
                                    $isselected={true}
                                    style={{ cursor: 'default' }}
                                >
                                    비공개
                                </S.RoundForm>
                            ) : (
                                portfolioData?.map((item, i) => (
                                    <S.PortForm
                                        key={i}
                                        $isselected={
                                            item.PortfolioName ===
                                            myApp?.portfolio_name
                                        }
                                        style={{ cursor: 'default' }}
                                    >
                                        {item.PortfolioName}
                                    </S.PortForm>
                                ))
                            )}
                        </S.FormBox>
                    </S.DetailBox>

                    <S.DetailBox2>
                        <S.SubTitle>지원 이유</S.SubTitle>
                        <S.TextBox>
                            <S.Content $h="200px">{myApp?.body}</S.Content>
                        </S.TextBox>
                    </S.DetailBox2>
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default ClickmyApply;
