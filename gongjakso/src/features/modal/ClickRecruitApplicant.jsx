import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { useEffect, useState } from 'react';
import { getMyApplication } from '../../service/apply_service';

const ClickmyApply = props => {
    const [myApp, setmyApp] = useState(null);

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

    // 특정 지원자 지원서 열람하기
    useEffect(() => {
        getMyApplication(props.applyId).then(res => {
            console.log('지원서 데이터:', res?.data); // API 응답 확인
            setmyApp(res?.data);
        });
    }, [props.applyId]);

    if (!myApp) return null; // 데이터가 로드되기 전에는 아무것도 렌더링하지 않음

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
                        <S.SubTitle>포트폴리오</S.SubTitle>
                        <S.FormBox>
                            {myApp?.is_private ? (
                                <S.RoundForm
                                    $isselected={true}
                                    style={{ cursor: 'default' }}
                                >
                                    비공개
                                </S.RoundForm>
                            ) : (
                                <S.RoundForm
                                    $isselected={true}
                                    style={{ cursor: 'default' }}
                                >
                                    {myApp?.portfolio_name ||
                                        '포트폴리오가 없습니다.'}
                                </S.RoundForm>
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
