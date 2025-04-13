import styled from 'styled-components';
import TopButtonimg from '../../assets/images/TopButton.svg';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    transition: opacity 2s ease-in-out;
    bottom: 9.375rem;
    z-index: 1000;

    @media (max-width: 768px) {
        bottom: 6.25rem;
    }

    @media (max-width: 480px) {
        bottom: 4.6875rem;
    }
`;

export const Button = styled.button`
    background: url(${TopButtonimg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 100%;
    position: absolute;
    right: 9.375rem;
    cursor: pointer;
    border: none;

    @media (max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
        right: 6.25rem;
    }

    @media (max-width: 480px) {
        width: 2rem;
        height: 2rem;
        right: 4.6875rem;
    }
`;
