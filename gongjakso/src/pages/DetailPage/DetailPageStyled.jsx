import styled from 'styled-components';

export const Globalstyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 1270px) {
        transform: scale(0.9);
        transform-origin: top center;
    }
`;

// 전체 감싸는 틀
export const Layout = styled(Globalstyle)`
    flex-direction: column;
    margin-bottom: 8rem;
`;

// 틀 세분화
export const Background = styled.div`
    margin-top: ${props => props.$mgt};
    width: ${props => props.$s};
    position: relative;
`;

// X 버튼
export const BgButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 50px;
    margin-right: 20px;
    img {
        width: 27px;
        cursor: pointer;
    }
`;

// 상단 타이틀 틀
export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    width: 800px;
    padding: 0px 40px;
`;

export const TitleBox2 = styled(TitleBox)`
    justify-content: space-between;
    margin-left: 30px;
    margin-bottom: 30px;
`;

export const BtnLayout = styled.div`
    display: flex;
    position: absolute;
    top: 105px;
    right: 50px;
`;

// 타이틀
export const Title = styled.div`
    display: flex;
    align-items: center;
    font-family: 'TheJamsilRegular';
    font-size: ${({ theme }) => theme.fontSize.xl};

    img {
        width: 45px;
    }

    p {
        margin: 0 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: ${({ checkStatus }) =>
            checkStatus === 'APPLIER' ? '530px' : '800px'};
    }

    margin-left: 80px;
    margin-bottom: 35px;
`;

// 타이틀 옆 합류 대기 박스
export const Status = styled.div`
    padding: 10px;
    text-align: center;
    width: 130px;
    background: ${props => props.$bg};
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    font-family: 'PreBold';
`;

export const ApplyBtn = styled.button`
    position: relative;
    padding-right: 10px;
    background: none;
    width: 132px;
    border: 2px solid #c8c8c8;
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-left: 20px;
    border-radius: 10px;
    font-family: 'PreBold';
    img {
        position: absolute;
        top: 10px;
        right: 5px;
        width: 17px;
    }
`;

// 팀장 표시 부분
export const TitleBottom = styled.div`
    font-size: ${({ theme }) => theme.fontSize.mdd};
    margin-left: 45px;
`;

export const BlueBox = styled.div`
    height: ${props => props.$boxSize};
    border: 2px solid ${props => props.$bg};
    border-radius: 40px;
    margin-top: 15px;
    margin-bottom: 55px;
    padding: 55px;
`;

// 박스 안 텍스트 박스 전체 틀
export const TextBox = styled.div`
    align-items: center;
    padding: 20px 1px 20px 20px;
    display: flex;
    width:;
`;

// 텍스트 박스 안 굵은 제목
export const TextTitle = styled.p`
    width: 190px;
    font-size: 1.6rem;
    font-family: 'PreBold';
`;

// 텍스트 박스 안 세부 내용
export const TextDetail = styled.div`
    width: 800px;
    flex-flow: wrap;
    font-family: 'PreMedium';
    font-size: 1.45rem;
    display: flex;
`;

export const Meeting = styled(TextDetail)`
    align-items: center;
    img {
        width: 30px;
        margin-right: 10px;
    }
`;

export const OpenKakao = styled(TextDetail)`
    align-items: center;
    img {
        width: ${props => props.$w};
        cursor: pointer;
    }
`;

// 검은색 둥근 틀
export const RoundForm = styled(Globalstyle)`
    min-width: 140px;
    max-width: 8rem;
    padding: 12px 6px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 1.13rem;
    color: white;
    text-align: center;
    margin: 8px 8px 8px 0px;
`;

export const Line = styled.div`
    width: 100%;
    border: 1px solid #cecbcb;
    margin: 30px 0px;
`;

// 설명글 안 내용
export const MainText = styled.p`
    font-size: 1.25rem;
    padding-left: 20px;
    line-height: 2;
    height: ${props => props.$h};
    padding-bottom: 180px;
    word-wrap: break-word;
    white-space: normal;
`;

// 스크랩하기 & 지원하기 버튼
export const ScrapButton = styled.button`
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
    font-weight: bold;

    background: ${props =>
        props.$click === 'false' ? 'none' : ({ theme }) => theme.Green};
    color: ${props => (props.$click === 'false' ? 'black' : 'white')};
    border: 2px solid ${props => props.$bc};

    img {
        margin-right: 18px;
        margin-left: -20px;
    }
`;

export const ApplyButton = styled(ScrapButton)`
    background: ${props => (!props.$apply ? 'none' : '#3477FF')};
    color: ${props => (!props.$apply ? ({ theme }) => theme.box1 : 'white')};
    border: 2.5px solid ${({ theme }) => theme.box1};
`;

export const CancelButton = styled(ScrapButton)`
    background: ${({ theme }) => theme.LightGrey};
    color: white;
    // border: 2.5px solid ${({ theme }) => theme.box1};
`;

export const ApplicationBg = styled.div`
    width: 100%;
    padding: 5rem 1rem 1.5rem 1rem;
    margin-top: 4rem;
`;

export const ApplicationTitle = styled.div`
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ApplicationBtn = styled.button`
    position: absolute;
    bottom: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$w};
    height: 50px;
    border-radius: 16px;
    margin: 15px;
    padding: 30px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${({ theme }) => theme.box1};
    font-family: 'PreBold';
    color: white;
`;

export const TitleFormBox = styled.div`
    display: flex;
    img {
        margin-left: 1.5rem;
        margin-top: -0.3rem;
        width: 15rem;
        cursor: pointer;
    }
`;
