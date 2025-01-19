import styled from 'styled-components';

export const Globalstyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 90.714rem) {
        transform: scale(0.9);
        transform-origin: top center;
    }

    @media screen and (min-width: 375px) and (max-width: 549px) {
        transform: scale(0.35);
        transform-origin: top center;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        transform: scale(0.5);
        transform-origin: top center;
    }
`;

export const Globalstyle2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 90.714rem) {
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
    margin-bottom: 5.8rem;
    margin-right: 1.4286rem;
    img {
        width: 1.8rem;
        cursor: pointer;

        @media screen and (min-width: 375px) and (max-width: 549px) {
            width: 2.7rem;
        }
        @media screen and (min-width: 550px) and (max-width: 1023px) {
            width: 2.5rem;
        }
    }
`;

// 상단 타이틀 틀
export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    width: 57.143rem;
    padding: 0 2.857rem;

    @media screen and (min-width: 375px) and (max-width: 1023px) {
        width: 100%;
    }
`;

export const TitleBox2 = styled(TitleBox)`
    justify-content: space-between;
    margin-left: 2.143rem;
    margin-bottom: 2.143rem;
`;

export const BtnLayout = styled.div`
    display: flex;
    position: absolute;
    top: 7.5rem;
    right: 3.571rem;

    @media screen and (min-width: 375px) and (max-width: 549px) {
    }
`;

// 타이틀
export const Title = styled.div`
    display: flex;
    align-items: center;
    font-family: 'TheJamsilRegular';
    font-weight: 600;
    letter-spacing: 0.05rem;
    font-size: ${({ theme }) => theme.fontSize.xl};

    p {
        margin-left: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: ${({ checkStatus }) =>
            checkStatus === 'APPLIER' ? '45rem' : '67rem'};
    }

    margin-left: 4.5rem;
    margin-bottom: 3.2rem;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 3.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 3rem;
    }
`;

// 타이틀 옆 합류 대기 박스
export const Status = styled.div`
    padding: 0.7143rem;
    text-align: center;
    width: 8rem;
    background: ${props => props.$bg};
    border-radius: 1.429rem;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: white;
    font-family: 'PreBold';

    @media screen and (min-width: 375px) and (max-width: 1023px) {
        width: 10rem;
        padding: 1.5rem;
        font-size: 1.5rem;
        border-radius: 2rem;
    }
`;

export const ApplyBtn = styled.button`
    position: relative;
    padding-right: 0.7143rem;
    background: none;
    width: 8rem;
    border: 0.143rem solid #c8c8c8;
    font-size: ${({ theme }) => theme.fontSize.base};
    margin-left: 1.429rem;
    border-radius: 0.7143rem;
    font-family: 'PreBold';

    @media screen and (min-width: 375px) and (max-width: 1023px) {
        font-size: 1.5rem;
        width: 10rem;
        border-radius: 1rem;
    }

    img {
        position: absolute;
        top: 0.7143rem;
        right: 0.3571rem;
        width: 1rem;

        @media screen and (min-width: 375px) and (max-width: 1023px) {
            width: 1.5rem;
            top: 1.5rem;
        }
    }
`;

// 팀장 표시 부분
export const TitleBottom = styled.div`
    font-size: ${({ theme }) => theme.fontSize.mdd};
    margin-left: 2.3rem;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.5rem;
    }
`;

export const BlueBox = styled.div`
    border: 0.2rem solid #7cd0ff80;
    border-radius: 2.857rem;
    margin-top: 1.071rem;
    margin-bottom: 3.929rem;
    padding: 3rem;

    @media screen and (min-width: 375px) and (max-width: 1023px) {
        margin-bottom: 0rem;
    }
`;

// 박스 안 텍스트 박스 전체 틀
export const TextBox = styled.div`
    align-items: center;
    padding: 1.429rem 0.0714rem 1.429rem 1.429rem;
    display: flex;
`;

// 텍스트 박스 안 굵은 제목
export const TextTitle = styled.p`
    width: 13.571rem;
    font-size: 1.6rem;
    font-family: 'PreBold';

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 2.5rem;
        width: 20rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 2rem;
        width: 17rem;
    }
`;

// 텍스트 박스 안 세부 내용
export const TextDetail = styled.div`
    width: 57.143rem;
    flex-flow: wrap;
    font-family: 'PreMedium';
    font-size: 1.45rem;
    display: flex;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 2rem;
        gap: 1rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.8rem;
        gap: 0.5rem;
    }
`;

export const Meeting = styled(TextDetail)`
    align-items: center;
    img {
        width: 2.143rem;
        margin-right: 0.7143rem;
    }
`;

export const OpenKakao = styled(TextDetail)`
    align-items: center;
    img {
        width: ${props => props.$w};
        cursor: pointer;

        @media screen and (min-width: 375px) and (max-width: 1023px) {
            width: ${props => props.$Mww};
        }
    }
`;

// 검은색 둥근 틀
export const RoundForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 10rem;
    max-width: 8rem;
    padding: 0.857rem 0.429rem;
    background: black;
    border-radius: 1.786rem;
    font-size: 1.13rem;
    color: white;
    text-align: center;
    margin: 0.571rem 0.571rem 0.571rem 0rem;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.7rem;
        min-width: 10rem;
        margin: 0rem;
        padding: 1rem 1rem;
        border-radius: 5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.5rem;
        min-width: 10rem;
        margin: 0rem;
        padding: 0.8rem 1rem;
        border-radius: 4rem;
    }
`;

export const Line = styled.div`
    width: 100%;
    border: 0.0714rem solid #cecbcb;
    margin: 2.143rem 0rem;
`;

// 설명글 안 내용
export const MainText = styled.p`
    font-size: 1.25rem;
    padding-left: 1.429rem;
    line-height: 2;
    padding-bottom: 10rem;
    word-wrap: break-word;
    white-space: pre-wrap;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.8rem;
    }
`;

// 스크랩하기 & 지원하기 버튼
export const ScrapButton = styled.button`
    width: 17.857rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 4.286rem;
    border-radius: 1.071rem;
    margin: 1.071rem;
    margin-bottom: 10rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;

    background: ${props =>
        props.$click === 'false' ? 'none' : ({ theme }) => theme.Green};
    color: ${props => (props.$click === 'false' ? 'black' : 'white')};
    border: 0.143rem solid ${props => props.$bc};

    img {
        margin-right: 1.286rem;
        margin-left: -1.429rem;

        @media screen and (min-width: 375px) and (max-width: 1023px) {
            width: 3rem;
        }
    }

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 2.7rem;
        width: 50rem;
        padding: 4rem;
        border-radius: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 2.3rem;
        width: 35rem;
        padding: 3.3rem;
        border-radius: 2rem;
    }
`;

export const ApplyButton = styled(ScrapButton)`
    background: ${props => (!props.$apply ? 'none' : '#3477FF')};
    color: ${props => (!props.$apply ? ({ theme }) => theme.box1 : 'white')};
    border: 0.179rem solid ${({ theme }) => theme.box1};
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

    @media screen and (min-width: 375px) and (max-width: 1023px) {
        font-size: 3rem;
    }
`;

export const ApplicationBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$w};
    height: 3.571rem;
    border-radius: 1rem;
    margin-top: 15rem;
    margin-bottom: 10rem;
    padding: 2rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    background: ${({ theme }) => theme.box1};
    font-family: 'PreBold';
    color: white;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 2.5rem;
        width: ${props => props.$Mw};
        padding: 3.5rem;
        border-radius: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 2rem;
        width: ${props => props.$Mww};
        padding: 3rem;
        border-radius: 1.5rem;
    }
`;

export const TitleFormBox = styled.div`
    display: flex;
    img {
        margin-left: 1.5rem;
        margin-top: -0.3rem;
        width: 15rem;
        cursor: pointer;

        @media screen and (min-width: 375px) and (max-width: 1023px) {
            width: 20rem;
        }
    }
`;
