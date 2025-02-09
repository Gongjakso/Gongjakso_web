import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    font-weight: 800;
    font-family: 'PreMedium';
    margin-bottom: 30px;
    gap: 30px;
    p {
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.subFont};
        font-family: 'PreMedium';
        font-weight: 500;
    }
    @media screen and (max-width: 549px) {
        font-size: ${({ theme }) => theme.fontSize.base};
        flex-direction: column;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: ${({ theme }) => theme.fontSize.md};
        flex-direction: column;
    }

    @media screen and (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.lg};
        align-items: center;
    }
`;
export const MiniTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    display: flex;
    gap: 10px;
    color: ${({ theme }) => theme.mainFont};
    margin: 20px 0;
    @media screen and (max-width: 549px) {
        font-size: ${({ theme }) => theme.fontSize.base};
        flex-direction: column;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: ${({ theme }) => theme.fontSize.md};
        flex-direction: column;
    }

    @media screen and (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.lg};
        align-items: center;
    }
`;
export const Label2 = styled.label`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
`;

export const Label3 = styled.label`
    display: flex;
    width: 100%;
    gap: 10px;
    color: ${({ theme }) => theme.mainFont};
    margin: 20px 0;
    margin-right: 50px;
    @media screen and (max-width: 549px) {
        font-size: ${({ theme }) => theme.fontSize.base};
        flex-direction: row;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: ${({ theme }) => theme.fontSize.md};
        flex-direction: row;
    }

    @media screen and (min-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.lg};
        align-items: center;
    }
`;

export const Input = styled.input``;

export const TapT = styled.p`
    font-family: 'PreMedium';
    display: flex;
    width: 20%;
    min-width: 89px;
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSize.lg};
    /* font-family: Pretendard; */
`;

export const TextArea = styled.textarea.attrs(props => ({
    type: props.type || 'text',
}))`
    font-size: ${({ theme }) => theme.fontSize.base};
    width: 100%;
    height: 100%;
    max-height: 200px;
    font-family: 'PreMedium';
    overflow: auto;
    border-style: none;
    resize: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderline};
    margin-bottom: 10px;

    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-variant-alternates: normal;
    font-variant-position: normal;
    font-weight: normal;
    font-stretch: normal;
    font-optical-sizing: auto;
    font-kerning: auto;
    font-feature-settings: normal;
    font-variation-settings: normal;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.mainFont};
    }

    &.warning {
        border-bottom: 1px solid ${({ theme }) => theme.repo.open};
    }
`;

export const InputNum = styled.p`
    color: ${({ theme }) => theme.greyFont};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'PreRegular';
    letter-spacing: 1px;
    margin-top: 10px;
    text-align: right;
`;

export const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TapP = styled.span`
    display: flex;
    align-items: center;
    width: 20%;
    font-family: 'PreMedium';
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const ButtonDiv = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ClickBtn = styled.button`
    max-width: 130px;
    width: 25vw;
    max-height: 40px;
    height: 7vw;
    margin-right: 10px;
    font-family: 'PreMedium';
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 25px;
    margin-bottom: 15px;
    background-color: ${props => (props.$isselected ? 'black' : 'white')};
    color: ${props => (props.$isselected ? 'white' : props.theme.borderline)};
    font-size: ${({ theme }) => theme.fontSize.base};
`;

export const Complain = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 90px;
    margin-bottom: 90px;
`;

export const Button = styled.button`
    border-radius: 15px;
    max-width: 260px;
    min-width: 130px;
    width: 19vw;
    max-height: 60px;
    min-height: 30px;
    height: 4vw;

    margin-top: 50px;
    background-color: ${props =>
        props.$isDelete ? props.theme.Grey : props.theme.Main1};
    color: ${props => (props.$isDelete ? 'black' : 'white')};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
`;

export const DateSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Important = styled.div`
    color: red;
`;
export const Important2 = styled.div`
    font-family: 'PreMedium';
    font-size: clamp(8px, 2vw, 14px);
    font-weight: 500;
    line-height: 17.9px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${({ theme }) => theme.subFont};
`;
