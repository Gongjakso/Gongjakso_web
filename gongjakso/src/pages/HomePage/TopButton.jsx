// TopButton.jsx
import React, { useState, useEffect } from 'react';
import * as S from './TopButton.Styled';

const TopButton = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        // 맨 위로 스크롤
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
