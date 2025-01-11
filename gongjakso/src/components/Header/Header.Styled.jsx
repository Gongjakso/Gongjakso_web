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
`;
export const HeaderBase = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 2.5rem;
`;
export const ItemList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.875rem;
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
`;
