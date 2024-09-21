import React from 'react';
import * as S from './PortfolioModal.Styled';
import Close from '../../assets/images/Close.svg';

const DeleteModal = ({ showModal, closeModal, confirmDelete, title }) => {
    if (!showModal) return null;

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.ModalTitle>포트폴리오 삭제</S.ModalTitle>
                <S.ModalDesc>
                    삭제한 포트폴리오는 복구할 수 없습니다.
                    <br /> [{title}]을 삭제하시겠습니까?
                </S.ModalDesc>
                <S.DeleteButton onClick={confirmDelete}>
                    삭제하기
                </S.DeleteButton>
                <S.Backbtn onClick={closeModal}>
                    <img src={Close} alt="close-btn" />
                </S.Backbtn>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default DeleteModal;
