import React, { useState, useEffect } from 'react';
import * as S from './TopButton.Styled';

const TopButton = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollThreshold = window.innerHeight * 0.6; // 화면 높이의 60%
        if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <S.Container>
            {isVisible && <S.Button onClick={onClick || scrollToTop} />}
        </S.Container>
    );
};

export default TopButton;
