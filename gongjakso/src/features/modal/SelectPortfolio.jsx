import * as S from './PortfolioModal.Styled';
import { useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import Close from '../../assets/images/Close.svg';

const SelectPortfolio = ({ showModal, closePortfolioModal }) => {
    const [selectedOption, setSelectedOption] = useState('input');
    const navigate = useCustomNavigate();
    if (!showModal) return null;
    const handleSelectOption = option => {
        setSelectedOption(option);
        if (option === 'input') {
            navigate('/profile/makeportfolio');
        } else {
            navigate('/profile/useportfolio');
        }
    };

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.ModalTitle>포트폴리오</S.ModalTitle>
                <S.BtnContainer>
                    <S.PortfolioBtn
                        onClick={() => handleSelectOption('input')}
                        selected={selectedOption === 'input'}
                    >
                        직접 입력할래요!
                    </S.PortfolioBtn>
                    <S.BtnInfo>
                        입력된 내 정보가 지원서와 함께 공개돼요
                    </S.BtnInfo>
                </S.BtnContainer>
                <S.BtnContainer>
                    <S.PortfolioBtn
                        onClick={() => handleSelectOption('use')}
                        selected={selectedOption === 'use'}
                    >
                        만들어둔 포트폴리오 쓸래요!
                    </S.PortfolioBtn>
                    <S.BtnInfo>
                        첨부된 포트폴리오가 지원서와 함께 다운돼요
                    </S.BtnInfo>
                </S.BtnContainer>
                <S.Backbtn
                    onClick={closePortfolioModal}
                    src={Close}
                ></S.Backbtn>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default SelectPortfolio;
