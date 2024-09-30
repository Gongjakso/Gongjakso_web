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
    padding: 50px 100px;
    /* width: 60%; //추가 해봤어요
    height: 90%; //추가 해봤어요 */
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
    font-size: 1.5rem;
    font-family: 'PreBold';
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
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
    font-family: 'PreBold';
`;

// RoundForm 감싸는 틀
export const FormBox = styled.div`
    display: flex;
    flex-flow: wrap;
    top: 60px;
    left: 0;
    img {
        margin-top: 1.4rem;
        margin-right: 1.7rem;
        width: 17rem;
        cursor: pointer;
    }
`;

export const RoundForm = styled.button`
    min-width: 120px;
    height: auto;
    border: 1px solid #a3a3a3;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
    padding: 0.7rem;
    margin-right: 1rem;
    margin-top: 20px;
    background-color: ${props => (props.$isselected ? 'black' : 'white')};
    color: ${props => (props.$isselected ? 'white' : props.theme.subFont)};
`;

export const PortForm = styled(RoundForm)`
    min-width: 250px;
    display: inline-block;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    max-height: ${props => props.$maxHeight};
    display: block;
    border: none;
    border-bottom: 2px solid black;
    padding: 5px;
    resize: vertical;
    overflow: hidden;
    color: black;
    font-size: ${({ theme }) => theme.fontSize.md};
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
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.2rem;
    border-radius: 15px;
    margin: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    background: ${props => props.$bg};
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
    border-radius: 10px;
    margin: 15px;
    padding: 13px;
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
    bottom: 20px;
    right: 0;
    width: 100%;
`;

export const ProfileApplyBtn = styled.button`
    width: 220px;
    margin: 15px;
    border-radius: 12px;
    padding: 16px;
    font-size: ${({ theme }) => theme.fontSize.base};
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
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 25px;
    max-height: ${props => props.$h};
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
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
    gap: 8px;
`;
export const NameP = styled.p`
    margin: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-family: 'PreBold';
`;

export const Major = styled.p`
    margin: 5px;
    font-size: ${({ theme }) => theme.fontSize.base};
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
