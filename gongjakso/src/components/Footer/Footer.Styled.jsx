import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 77.85rem;
    height: auto;
    align-items: center;
    justify-content: center;
    border-top: 0.094rem solid black;
    background: inherit; // Ensures the Footer has the same background as MainContent
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 0;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        padding: 1.5rem 2rem;
    }

    @media screen and (max-width: 629px) {
        padding: 2rem 1rem;
    }
`;

export const FooterContainer = styled.ul`
    display: flex;
    width: 100%;
    max-width: 68.75rem;
    justify-content: space-between;
    position: static;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }

    @media screen and (max-width: 629px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0.5rem;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 629px) {
        width: auto;
        margin-right: 1rem;
    }
`;

export const FooterInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        margin: 0 1rem;
        width: 100%;
    }

    @media screen and (max-width: 629px) {
        display: none;
    }
`;

export const FooterInfo = styled.div`
    font-size: 0.625rem;
    margin: auto;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 629px) {
        font-size: 0.75rem;
        margin: 0.3rem 0;
    }
`;

export const FooterButtonBox = styled.div`
    display: flex;
    width: max-content;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        flex-wrap: nowrap;
        justify-content: flex-end;
    }

    @media screen and (max-width: 629px) {
        width: auto;
        margin: 0;
        gap: 1.5rem;
    }
`;

export const FooterButton = styled.button`
    font-size: 0.938rem;
    font-weight: bold;
    display: flex;
    cursor: pointer;
    border: none;
    margin: 0.625rem;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        font-size: 0.875rem;
        margin: 0 0.4rem;
    }

    @media screen and (max-width: 629px) {
        font-size: 0.75rem;
        margin: 0 0.3rem;

        &:last-child {
            // 서비스소개 버튼 숨기기
            display: none;
        }
    }
`;

export const FooterLogo = styled.img`
    width: 170px;
    height: auto;

    @media screen and (min-width: 630px) and (max-width: 1023px) {
        width: 150px;
    }

    @media screen and (max-width: 629px) {
        width: 100px;
    }
`;
