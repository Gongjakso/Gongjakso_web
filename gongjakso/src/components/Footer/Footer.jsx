import React from 'react';
import * as S from './Footer.Styled';
import footerLogoImage from '../../assets/images/footerlogo.png';

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContainer>
                <li>
                    <img
                        src={footerLogoImage}
                        alt="footer logo"
                        style={{ width: '170px', height: 'auto' }}
                    />
                </li>
                <S.FooterInfoBox>
                    <S.FooterInfo>Contact: gongjaksoo@gmail.com</S.FooterInfo>
                    <S.FooterInfo>All copyright by 2024 공작소</S.FooterInfo>
                </S.FooterInfoBox>
                <li>
                    <S.FooterButtonBox>
                        <S.FooterButton
                            onClick={() =>
                                window.open('https://pf.kakao.com/_flurG')
                            }
                        >
                            문의하기
                        </S.FooterButton>
                        <S.FooterButton
                            onClick={() =>
                                window.open(
                                    'https://gongjakso-bucket.s3.ap-northeast-2.amazonaws.com/information/%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A9+%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%A8%E1%84%80%E1%85%AA%E1%86%AB.pdf',
                                )
                            }
                        >
                            이용약관
                        </S.FooterButton>

                        <S.FooterButton
                            onClick={() =>
                                window.open(
                                    'https://gongjakso-bucket.s3.ap-northeast-2.amazonaws.com/information/%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A9+%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9%E1%84%8E%E1%85%A5%E1%84%85%E1%85%B5%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8E%E1%85%B5%E1%86%B7.pdf',
                                )
                            }
                        >
                            개인정보처리방침
                        </S.FooterButton>

                        <S.FooterButton
                            onClick={() =>
                                window.open(
                                    'https://gongjakso-bucket.s3.ap-northeast-2.amazonaws.com/information/%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A9_%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3+%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5.pdf',
                                )
                            }
                        >
                            서비스소개
                        </S.FooterButton>
                    </S.FooterButtonBox>
                </li>
            </S.FooterContainer>
        </S.Footer>
    );
};

export default Footer;
