import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const SelectValue = styled.div`
    display: block;
    width: 11rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: ${props => (props.$case === 'true' ? '0px 15px' : '13px')}; */
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
    align-items: center;
    cursor: pointer;
    transition: border-color 0.1s ease;

    &:hover {
        border-color: #007bff;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.938rem;
        width: ${props => (props.$case === 'true' ? '7.5rem' : '18rem')};
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        width: ${props => (props.$case === 'true' ? '14rem' : '32rem')};
    }
`;

export const OptionList = styled.div`
    position: absolute;
    font-family: 'PreMedium';
    right: -1.45rem;
    width: 13.6rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: ${props =>
        props.$case === 'true' ? '1.25rem 0rem' : '1.25rem 0rem'};
    list-style: none;
    border-radius: 0.25rem;
    background-color: #fff;
    z-index: 1;
    border: 0.063rem solid hsl(0, 0%, 90%);
    max-height: 18.75rem;
    overflow-y: ${props => (props.$scroll === 'true' ? 'scroll' : 'hidden')};
    box-shadow: 0 0.25rem 1.063rem rgba(0, 0, 0, 0.05);
    .option {
        font-family: 'PreRegular';
        padding: 0.938rem;
        cursor: pointer;
        border-radius: 0.25rem;
        transition: background-color 0.1s ease;
        font-weight: 600;
        font-size: 1.125rem;
        padding-left: 1.25rem;

        &:hover {
            background-color: black;
            color: white;
        }
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: ${props => (props.$case === 'true' ? '9.9rem' : '20.9rem')};
        right: -1.45rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: ${props => (props.$case === 'true' ? '17rem' : '35rem')};
    }
`;

export const InputLabel = styled.label`
    display: inline-block;
    width: ${props => (props.$islabel === 'true' ? '20%' : '0')};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: 'PreMedium';
    display: flex;
    align-items: center;
`;

export const InputText = styled.input.attrs(props => ({
    type: props.type || 'text',
}))`
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'PreMedium';
    font-weight: 500;
    padding: 0.625rem 0;
    border-style: none;
    border-bottom: 0.08rem solid ${({ theme }) => theme.borderline};

    &:focus {
        outline: none;
        border-bottom: 0.063rem solid ${({ theme }) => theme.mainFont};
    }

    &.warning {
        gap: 0.625rem;
        border-bottom: 0.063rem solid ${({ theme }) => theme.repo.open};
    }
    /* Hide the spinners in Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Hide the spinners in Firefox */
    -moz-appearance: textfield;
`;

export const Arrow = styled.img`
    display: flex;
    align-items: center;

    justify-content: center;
`;

export const Div = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
`;
export const Important = styled.div`
    color: red;
`;
export const Important2 = styled.div`
    font-family: 'PreMedium';
    font-weight: 500;
    text-decoration-skip-ink: none;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.subFont};
`;
