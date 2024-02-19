import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    font-family: 'PreBold';
    margin-bottom: 30px;
    gap: 30px;
    p {
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.subFont};
        font-family: 'PreMedium';
        font-weight: 100;
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
    font-family: 'PreBold';
    margin: 20px 0;
`;

export const TapT = styled.p`
    display: flex;
    width: 190px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: 'PreMedium';
`;

export const TextArea = styled.textarea.attrs(props => ({
    type: props.type || 'text',
}))`
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 100%;
    max-width: 900px;
    padding: 2.5px 0;
    border-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.mainFont};
    }

    &.warning {
        border-bottom: 1px solid ${({ theme }) => theme.repo.open};
    }
`;

export const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TapP = styled.p`
    display: flex;
    align-items: center;
    width: 190px;
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
    width: 130px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 25px;
    margin-bottom: 15px;
    background-color: ${props => (props.$isselected ? 'black' : 'white')};
    color: ${props => (props.$isselected ? 'white' : props.theme.borderline)};
    font-size: ${({ theme }) => theme.fontSize.base};
`;

export const Complain = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Button = styled.button`
    border-radius: 15px;
    width: 260px;
    height: 60px;
    margin-top: 50px;
    background-color: ${props =>
        props.$isDelete ? props.theme.Grey : props.theme.Main1};
    color: ${props => (props.$isDelete ? 'black' : 'white')};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
`;
