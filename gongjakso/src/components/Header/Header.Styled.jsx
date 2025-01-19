import styled from 'styled-components';
// import backGroundImage from '../../assets/images/background.png';

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.938rem;
    align-items: center;
    position: absolute;
    top: 0;

    @media screen and (max-width: 549px) {
        padding: 0.5rem;
    }
`;
export const HeaderBase = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 2.5rem;

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 95%;
        justify-content: space-between;
    }

    @media screen and (max-width: 549px) {
        width: 100%;
        justify-content: space-between;
        height: auto;
        flex-wrap: wrap;
    }
`;
export const ItemList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 549px) {
        /* width: 100%; */
        justify-content: space-between;
    }
`;
export const logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.875rem;

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        margin: 0 1rem;
        width: 100px;
    }

    @media screen and (max-width: 549px) {
        margin: 0 0.5rem;
        img {
            width: 85px;
        }
    }
`;

export const ProfileArea = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 40%;
    align-items: center;
    width: 0;
    font-weight: 700;
    justify-content: flex-end;
    position: relative;

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        margin-left: 20%;
    }

    @media screen and (max-width: 549px) {
        margin-left: 0;
        width: auto;
        position: absolute;
        right: 1rem;
        top: 0.7rem;
    }
`;
