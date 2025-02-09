import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 77.85rem;
    height: 5.75rem;
    align-items: center;
    justify-content: center;
    border-top: 0.094rem solid black;
    background: inherit; // Ensures the Footer has the same background as MainContent
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const FooterContainer = styled.ul`
    display: flex;
    width: 100%;
    max-width: 68.75rem;
    justify-content: space-between;
    position: static;
`;

export const FooterInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const FooterInfo = styled.div`
    font-size: 0.625rem;
    margin: auto;
`;

export const FooterButtonBox = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FooterButton = styled.button`
    font-size: 0.938rem;
    font-weight: bold;
    display: flex;
    cursor: pointer;
    border: none;
    margin: 0.625rem;
`;
