import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
`;

export const SelectValue = styled.div`
    display: block;
    width: ${props => (props.$case === 'true' ? '155px' : '400px')};
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
`;

export const OptionList = styled.div`
    position: absolute;
    font-family: 'PreMedium';
    right: -10px;
    width: ${props => (props.$case === 'true' ? '185px' : '430px')};
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: ${props => (props.$case === 'true' ? '20px 0px' : '20px 0px')};
    list-style: none;
    border-radius: 4px;
    background-color: #fff;
    z-index: 1;
    border: 1px solid hsl(0, 0%, 90%);
    max-height: 300px;
    overflow-y: ${props => (props.$scroll === 'true' ? 'scroll' : 'hidden')};
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.05);
    .option {
        font-family: PreRegular;
        padding: 15px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.1s ease;
        font-weight: 600;
        font-size: 1.125rem;
        padding-left: 20px;

        &:hover {
            background-color: black;
            color: white;
        }
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

    padding: 10px 0;
    border-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.mainFont};
    }

    &.warning {
        gap: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.repo.open};
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
    padding-right: 5px;
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
