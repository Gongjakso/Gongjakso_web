import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import useCustomNavigate from '../../hooks/useNavigate';

const Modal1 = ({ closeModal1 }) => {
    const handleCloseClick = () => {
        closeModal1();
    };
    const navigate1 = useCustomNavigate();
    const handleModalClick = path => {
        closeModal1();
        navigate1(path);
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
                <S.CloseButton onClick={handleCloseClick} />
                <S.Title>공작소에 로그인 후</S.Title>
                <S.Title>무한한 기회를 창출해보세요!</S.Title>

                <S.Image />

                <S.ButtonBox>
                    <S.BlueButton onClick={() => handleModalClick('/login')}>
                        로그인하기
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default Modal1;
