import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 1200px;
    height: 92px;
    align-items: center;
    justify-content: center;
    border-top: 1.5px solid black;
    background: inherit; // Ensures the Footer has the same background as MainContent
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const FooterContainer = styled.ul`
    display: flex;
    width: 100%;
    max-width: 1100px;
    justify-content: space-between;
    position: static;
`;

export const FooterInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const FooterInfo = styled.div`
    font-size: 10px;
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
    font-size: 15px;
    font-weight: bold;
    display: flex;
    cursor: pointer;
    border: none;
    margin: 10px;
`;
