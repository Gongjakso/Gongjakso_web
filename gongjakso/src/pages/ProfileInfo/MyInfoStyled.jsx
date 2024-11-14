import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8.125rem;
`;

export const TopBox = styled.div`
    height: 18.75rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 1.5625rem;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled.input`
    width: 26.875rem;
    height: 3.4375rem;
    padding: 0.9375rem;
    border: 0.09375rem solid #a3a3a3;
    border-radius: 0.4375rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
`;

export const Formset = styled.div`
    width: 100%;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 3.125rem;
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

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    width: 8%;
`;

export const Wrapper = styled.div`
    height: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SetBox = styled.button`
    width: 15rem;
    padding: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 0.625rem;
`;

export const SelectField = styled.select`
    width: 26.875rem;
    height: 3.4375rem;
    max-height: 3.125rem;
    overflow-y: auto;
    padding: 0.625rem;
    border: 0.09375rem solid #a3a3a3;
    border-radius: 0.4375rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';

    background-color: white;
    color: black;

    option {
        background-color: white;
        color: black;
    }

    option:hover {
        background-color: black;
        color: white;
    }
`;

export const Fillter1 = styled.div`
    width: 26.875rem;
    padding: 0.0625rem;
    height: 3.4375rem;
    padding: 0.75rem 1.125rem;
    border-radius: 0.4375rem;
    border: 0.09375rem solid #a3a3a3;
    display: flex;
    align-items: center;
`;

export const PhoneNum = styled.div`
    width: 26.875rem;
    height: 3.4375rem;
    text-align: left;
    display: flex;
    padding: 0.9375rem;
    border: 0.09375rem solid #a3a3a3;
    border-radius: 0.4375rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
`;

export const Num = styled.input`
    &.Num-first {
        width: 2.5rem;
    }
    &.Num-second {
        width: 3.75rem;
    }
    &.Num-third {
        width: 3.75rem;
    }
    &.Num-first,
    &.Num-second,
    &.Num-third {
        text-align: center;
        border: none;
        border-bottom: 0.0625rem solid black;
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const Hyphen = styled.div`
    width: 1.25rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
`;
