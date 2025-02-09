import React, { useEffect, useState } from 'react';
import * as S from './Modal.Styled';
import useCustomNavigate from '../../hooks/useNavigate';

const Modal2 = ({ goPath, closeModal2 }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1023);
    };

    useEffect(() => {
        handleResize(); // 초기 실행 시 확인
        window.addEventListener('resize', handleResize); // 화면 크기 변경 시 동작
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigate2 = useCustomNavigate();
    const handleModalClick = path => {
        closeModal2();
        navigate2(path);
    };

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

    return (
        <S.ModalBg>
            <S.Container>
                <span>
                    <S.Title>공작소에 로그인 후</S.Title>
                    <S.Title>다양한 공모전 팀 공고를 확인해보세요!</S.Title>
                </span>
                <S.Image />
                <S.ButtonBox>
                    <S.GreyButton onClick={() => handleModalClick(`${goPath}`)}>
                        {isMobile ? '둘러보기' : '로그인하지 않고 둘러보기'}
                    </S.GreyButton>

                    <S.BlueButton onClick={() => handleModalClick('/login')}>
                        로그인하기
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default Modal2;
