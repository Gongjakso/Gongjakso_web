import React from 'react';
import * as S from './PortfolioModal.Styled';
import Close from '../../assets/images/Close.svg';

const DeleteModal = ({ showModal, closeModal, confirmDelete, title, type }) => {
    if (!showModal) return null;
    console.log('Type received in modal:', type);

    const getDeleteMessage = () => {
        switch (type) {
            case 'file':
                return `선택한 포트폴리오를 삭제하시겠습니까?`;
            case 'notion':
                return `선택한 포트폴리오를 삭제하시겠습니까?`;
            case 'hybrid':
                return `선택한 포트폴리오를 삭제하시겠습니까?`;
            default:
                return `[${title}]를 삭제하시겠습니까?`;
        }
    };

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.ModalTitle>포트폴리오 삭제</S.ModalTitle>
                <S.ModalDesc>
                    삭제한 포트폴리오는 복구할 수 없습니다.
                    <br /> {getDeleteMessage()}
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
