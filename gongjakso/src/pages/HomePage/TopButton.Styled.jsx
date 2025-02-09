import styled from 'styled-components';
import TopButtonimg from '../../assets/images/TopButton.svg';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    transition: opacity 2s ease-in-out;
    bottom: 9.375rem;
    z-index: 1000;
`;

export const Button = styled.button`
    background: url(${TopButtonimg});
    right: 9.375rem;
    background-size: contain;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 100%;
    position: absolute;
    cursor: pointer;
`;
