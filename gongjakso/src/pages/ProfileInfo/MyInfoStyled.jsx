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

export const InputField = styled.input`
    width: 26.875rem;
    height: 3.4375rem;
    padding: 0.9375rem;
    border: 0.09375rem solid #a3a3a3;
    border-radius: 0.4375rem;
    font-size: 1.05rem;
    font-family: 'PreMedium';
`;

export const Formset = styled.div`
    width: 60%;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 3.125rem;
    @media screen and (max-width: 549px) {
        width: auto;
        flex-direction: column;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: auto;
        flex-direction: column;
    }
`;

export const Spacer = styled.div`
    flex-grow: 6;
`;

export const Title = styled.p`
    flex-grow: 4;
    font-size: 1.8rem;
    text-align: center;
    font-weight: bold;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 1.5625rem;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        flex-direction: column;
        width: fit-content;
        justify-content: center;
        align-items: center;
    }
`;

export const SubTitle = styled.p`
    font-size: 1.35rem;
    font-weight: bold;
    width: 15%;
    text-align: left;
    display: flex;
    align-items: center;
    @media screen and (min-width: 375px) and (max-width: 1023px) {
        width: auto;
        text-align: left;
        margin-bottom: 1rem;
        align-self: flex-start;
    }
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
    font-size: 1.2rem;
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
        // font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const Hyphen = styled.div`
    width: 1.25rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
`;
