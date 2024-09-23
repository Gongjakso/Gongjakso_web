import { styled } from 'styled-components';

export const Dialog = styled.dialog`
    width: 100%;
    height: 100%;
    border: none;
    position: fixed;
    top: 50%; /* 화면 상단에서 절반 위치에 설정 */
    left: 50%; /* 화면 왼쪽에서 절반 위치에 설정 */
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
`;

export const AlertModalContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

export const AlertModalInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => props.theme.Main1};

    background: #fff;
    text-align: center;
    border-radius: 40px;
    padding: 20px;
    position: relative;
    width: 45%;
    height: 40%;
`;
export const MainTitle = styled.p`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-family: 'PreBold';
    letter-spacing: 0.5px;
    margin-bottom: 30px;
`;

export const AlertText = styled.h3`
    width: 100%;
    height: 55%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 1.3rem;
    font-family: 'PreMedium';
`;

export const AlertmModalButtonBox = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const AlertBtn = styled.button`
    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$w};
    border-radius: 10px;
    padding: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${({ theme }) => theme.Main1};
    font-family: 'PreBold';
    color: white;
`;
