import styled from 'styled-components';

export const TopBox = styled.div`
    height: 18rem;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        height: 11rem;
        background-color: transparent;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        height: 14rem;
        background-color: transparent;
    }
`;

export const BoxDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    flex-direction: column;
    margin: 3rem 7rem 3rem 7rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        margin: 0rem 7rem 3rem 7rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        margin: 0rem 7rem 3rem 7rem;
    }
`;

export const Spacer = styled.div`
    flex-grow: 6;
`;

export const Title = styled.p`
    flex-grow: 4;
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
`;

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 71.875rem;
`;
