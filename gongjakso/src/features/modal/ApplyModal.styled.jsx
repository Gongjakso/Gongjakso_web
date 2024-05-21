import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
`;

export const Background2 = styled(Background)`
    z-index: 10;
`;

export const Modal = styled.div`
    border: 2px solid ${props => props.$bc};
    position: relative;
    top: 50%;
    left: 50%;
    width: ${props => props.$w};
    height: ${props => props.$h};
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 40px;
    padding: 50px;
`;

export const Backbtn = styled.button`
    position: absolute;
    right: 6%;
`;

export const Decisionbtn = styled.div`
    position: absolute;
    left: 7%;
    top: 7%;
    width: 130px;
    text-align: center;
`;

export const MainTitle = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreBold';
    letter-spacing: 0.5px;
    margin-bottom: 30px;
`;

// 텍스트 전체 틀
export const DetailBox = styled.div`
    padding: 15px;
    position: relative;
`;

export const DetailBox2 = styled.div`
    padding: 15px;
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.lg};
    letter-spacing: 0.5px;
    font-family: 'PreBold';
`;

// RoundForm 감싸는 틀
export const FormBox = styled.div`
    display: flex;
    flex-flow: wrap;
    top: 60px;
    left: 0;
`;

export const RoundForm = styled.button`
    min-width: 130px;
    height: auto;
    border: 1px solid #a3a3a3;
    border-radius: 30px;
    font-size: ${({ theme }) => theme.fontSize.base};
    text-align: center;
    padding: 10px;
    margin-right: 10px;
    margin-top: 20px;
    background-color: ${props => (props.$isselected ? 'black' : 'white')};
    color: ${props => (props.$isselected ? 'white' : props.theme.subFont)};
`;

// textarea 감싸는 틀
export const TextBox = styled.div`
    position: relative;
    top: 20px;
`;

// 지원 분야 감싸는 틀
export const WarningBox = styled.div`
    display: flex;
    align-items: center;
`;

export const WarningTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.base};
    color: red;
    font-weight: bold;
    margin-left: 20px;
`;

export const InputArea = styled.textarea`
    width: 100%;
    height: 100%;
    max-height: 190px;
    display: block;
    border: none;
    border-bottom: 1.5px solid black;
    padding: 5px;
    resize: vertical;
    overflow: hidden;
    color: #5c5c5c;
    font-size: 1.15rem;
    font-family: 'PreRegular';
    line-height: 1.5;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${({ theme }) => theme.greyFont};
    }
`;

// 글자 수 체크
export const InputNum = styled.p`
    color: ${({ theme }) => theme.greyFont};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'PreRegular';
    letter-spacing: 1px;
    margin-top: 10px;
    text-align: right;
`;

// 지원하기 버튼 감싸는 틀
export const ApplyBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
export const ApplyBox2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const newBtn = styled.button`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 60px;
    border-radius: 15px;
    margin: 15px;
    padding: 18px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${props => props.bg};
    font-family: 'PreBold';
    color: ${props => props.$c};
`;
export const ApplyBtn = styled.button`
    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$w};
    height: 50px;
    border-radius: 10px;
    margin: 15px;
    padding: 27px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${({ theme }) => theme.box1};
    font-family: 'PreBold';
    color: white;
`;

// 내가 모집중인 팀 지원서 모달창 버튼 틀
export const ProfileApplyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    right: 0;
    width: 100%;
`;

export const ProfileApplyBtn = styled.button`
    width: 25%;
    margin: 15px;
    border-radius: 12px;
    padding: 20px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreBold';
    background: ${props => props.$bg};
    color: white;
`;

// 지원 이유
export const Content = styled.div`
    border: none;
    padding-bottom: 5px;
    border-bottom: 1.5px solid black;
    color: #5c5c5c;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 30px;
    max-height: ${props => props.h};
    overflow-y: scroll;
`;

// 지원 완료 창 텍스트 틀
export const CompletedBox = styled.div`
    width: 100%;
    height: 55%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 1.3rem;
    font-family: 'PreMedium';
    gap: 8px;
`;
export const NameP = styled.p`
    margin: 5px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: 'PreMedium';
`;

export const Major = styled.p`
    margin: 5px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: #5c5c5c;
    font-family: 'PreMedium';
`;

export const StateBtn = styled.div`
    width: 100%;
    padding: 10px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.base};
    background: ${props => props.$bg};
    border-radius: 20px;
`;
