import styled from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as NoPost } from '../../assets/images/NoPost.svg';
import { ReactComponent as go } from '../../assets/images/Nowgo.svg';

export const NoContentsContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    span {
        display: block;
        text-align: center;
        font-family: 'PreMedium';
        font-size: ${({ theme }) => theme.fontSize.md};
    }

    span:first-child {
        margin-bottom: 10px;
    }
`;
export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 51px;
    border: 1px solid black;
    border-radius: 16px;
    background-color: ${theme.mainFont};
`;

export const BtnLabel = styled.p`
    color: ${theme.mainFont2};
    font-family: Pretendard sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 28.64px;
`;
export const Nowgo = styled(go)``;
export const Nopost = styled(NoPost)``;
