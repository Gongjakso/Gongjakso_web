import styled from 'styled-components';
import { ReactComponent as My_page_big } from '../../assets/images/My_page_big.svg';
import { ReactComponent as Edit } from '../../assets/images/Edit.svg';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';
import deleteBtn from '../../assets/images/deleteIcon.svg';
import editBtn from '../../assets/images/editIcon.svg';
import plus from '../../assets/images/PlusIcon.svg';

export const TopBox = styled.div`
    height: 15.625rem;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 80vw;
        margin: auto;
        height: 8.5rem;
        background-color: transparent;
        flex-direction: row;
        align-items: center;
        padding-top: 1rem;
    }
`;

//프로필 이미지
export const ProfileImage = styled(My_page_big)`
    width: 12.5rem;
    transform: translate(50%, 50%);
    right: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        transform: translate(40%, 17%);
        width: 5.25rem;
        border-radius: 50%;
        position: relative;
        // display: none;
    }
`;

export const MobileWrapper = styled.div`
    width: 60%;
    display: flex;
    // justify-content: space-between;
    gap: 1rem;
    margin-top: 0.5rem;
`;

export const MobileInfo = styled.div`
    transform: translate(-80%, 58%);
    width: 45%;
    display: flex;
    flex-direction: column;
    // position: relative;
`;

export const DetailBox = styled.div`
    position: absolute;
    transform: translateY(150%);
    line-height: 1.5625rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: -30rem;
    // @media screen and (min-width: 375px) and (max-width: 549px) {
    //     transform: translate(40%, 115%);
    //     // position: absolute;
    //     margin-right: -100vw; /* 좌측 여백 추가 */
    //     min-width: 50vw; /* 부모 컨테이너에 맞춤 */
    //     margin-left: -32rem;
    // }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        // flex-direction: row;
        // justify-content: space-between;
        // width: 85%;
        padding-top: 0.5rem;
        transform: translateY(135%);
        margin-left: -23rem;
        width: auto; /* 부모 컨테이너에 맞춤 */
    }
`;

export const NameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* 부모 크기에 맞춤 */
`;

export const InfoBox = styled.div`
    position: absolute;
    transform: translateY(150%);
    line-height: 1.5625rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: -30rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        // transform: translate(-70%);
        margin-right: -70vw; /* 좌측 여백 추가 */
        // width: 85vw; /* 부모 컨테이너에 맞춤 */
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        transform: translateY(135%);
        margin-left: -23rem;
        width: 20%; /* 부모 컨테이너에 맞춤 */
    }
`;

//이름
export const NameTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreBold';
    margin-bottom: 0.3125rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.9rem;
    }
`;

//학과

export const MajorTitle = styled.p`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1rem;
        width: 35vw;
        text-align: left; /* 왼쪽 정렬 */
        color: rgba(145, 145, 145, 1);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 9rem;
    }
`;

//소제목
export const SubTitle = styled.p`
    width: 100%; /* 부모 컨테이너의 너비를 따름 */
    max-width: 62.5rem; /* 최대 너비 제한 */
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 900;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.4rem;
        padding-bottom: 0rem;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.525rem;
        font-weight: 600;
    }
`;

export const EditImage = styled(Edit)`
    height: 1.75rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        transform: translate(40%, 150%);
        height: 4.5rem;
        width: 3.3rem;
        position: absolute;
        top: 0%;
    }
    // @media screen and (min-width: 550px) and (max-width: 1023px) {
    //     height: 5rem;
    //     position: absolute;
    //     top: 0%;
    //     right: 0rem;
    //     transform: translateY(-50%);
    //     transform: translateX(500%);
    //     padding-left: 0rem;
    // }
`;

export const ArrowImage = styled(Arrow)`
    width: 3.75rem;
    display: flex;
    align-items: center;
    height: 1.5625rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 3rem;
        height: 1.25rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 3.5rem;
        height: 1.4rem;
    }
`;

//나의 포트폴리오 박스
export const PortfolioBox = styled.button`
    width: 26.875rem;
    height: 3.4375rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.mainFont2};
    transform: translateY(150%);
    border-radius: 1.5625rem;
    margin-left: 3.125rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20rem;
        height: 3rem;
        font-size: 0.875rem;
        margin-left: 0;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 24rem;
        height: 3.2rem;
        font-size: 1rem;
        margin-left: 0;
    }
`;

export const GlobalBox = styled.div`
    width: 100%;
    max-width: 1200px; /* 최대 너비 제한 */
    margin: 11.25rem auto; /* 수평 중앙 정렬 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 자식 요소를 수평으로 중앙 정렬 */
    @media screen and (min-width: 375px) and (max-width: 549px) {
        margin: 7rem auto; /* 수평 중앙 정렬 */
    }
`;

export const BoxDetail = styled.div`
    width: 100%;
    max-width: 100%; /* 부모 크기를 넘지 않도록 제한 */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 수직 방향 중앙 정렬 */
    align-items: center; /* 수평 방향 중앙 정렬 */
    padding-bottom: 5.625rem;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        padding-bottom: 3rem;
        padding-left: 0;
        padding-right: 0;
        width: 85vw;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        padding-bottom: 4rem;
        padding-left: 0;
        padding-right: 0;
        width: 90vw;
    }
`;

export const NoPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 72rem;
    height: 25.688rem;
    background-color: #f7f7f7;
    border: 0.09375rem dotted var(--system-grey4, #d2d2d7);
    font-size: ${({ theme }) => theme.fontSize.mdd};
    padding: 3.813rem 22.25rem;
    border-radius: 1rem;
    gap: 4rem;
    line-height: 2.088rem;
    font-family: 'PreRegular';
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 85vw;
        padding: 1.75rem;
        font-size: 0.875rem;
        height: 10.938rem;
        gap: 1.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 90vw;
        height: 14rem;
        padding: 2rem;
        font-size: 1rem;
        gap: 1.5rem;
    }
`;

export const MakePortfolioBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.box1};
    color: white;
    width: 25rem;
    height: 4.5rem;
    gap: 0.625rem;
    padding: 1.625rem 7.25rem;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-family: 'PreMedium';
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 14.75rem;
        height: auto;
        padding: 0.875rem 1.875rem;
        font-size: 1rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 20rem;
        height: auto;
        padding: 1rem 2rem;
        font-size: 1.2rem;
    }
`;

export const PortfolioContent = styled.div`
    font-size: 1rem;
    font-weight: bold;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.875rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
    }
`;

export const ViewPortfolioBtn = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        padding: 0.4rem 0.8rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
    }
`;

export const PortfolioTitle = styled.span`
    font-family: 'PreMedium';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 43.75rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.938rem;
        max-width: 20rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        max-width: 30rem;
    }
`;

export const PortfolioButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-direction: row;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        gap: 0.3rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        gap: 0.4rem;
    }
`;

export const EditPortfolioButton = styled.button`
    background: url(${editBtn});
    border: none;
    cursor: pointer;
    background-repeat: no-repeat;
    width: 3.5rem;
    height: 3.5rem;
    transform: scale(0.8);
    background-size: contain;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 1.75rem;
        height: 1.75rem;
        transform: scale(1);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 3rem;
        height: 3rem;
    }
`;

export const DeletePortfolioButton = styled.button`
    background: url(${deleteBtn});
    border: none;
    cursor: pointer;
    background-repeat: no-repeat;
    width: 3.6rem;
    height: 3.6rem;
    transform: scale(0.8);
    background-size: contain;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 1.75rem;
        height: 1.75rem;
        transform: scale(1);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 3rem;
        height: 3rem;
    }
`;

export const PortfolioContainer = styled.div`
    width: 71.875rem;
    min-height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    border: 0.125rem solid #c3e9ff;
    background: #e5f5ff;
    padding: 1.5rem 3rem;
    box-sizing: border-box;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 85vw;
        padding: 0.875rem 1.25rem;
        min-height: 3.563rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 90vw;
        padding: 1.5rem;
    }
`;

export const PortfolioList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        gap: 0.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        gap: 0.75rem;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 71.875rem;
    margin: 0 auto;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 85vw;
        margin-bottom: 0.625rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 90vw;
    }
`;

export const SubTitleContainer = styled.div`
    display: flex;
    /* justify-content: center; 수평 중앙 정렬 */
    flex-direction: column;
    align-items: left; /* 수직 중앙 정렬 */
    width: 100%; /* 부모 컨테이너 전체 너비 */
    margin: 0 auto; /* 중앙 정렬 */
`;

export const Plus = styled.div`
    width: 1.688rem;
    height: 1.688rem;
    background: url(${plus});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    margin-bottom: 1.5625rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 0.875rem;
        height: 0.875rem;
        margin-bottom: 0rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const LinkInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 600;
    text-align: left;
    gap: 0.5rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.875rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
    }
`;

export const LinkDetail = styled.div`
    color: #8e8e93;
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
    text-align: left;
    margin-top: 0.5rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.563rem;
        margin-top: 0rem;
        height: 0.688rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.875rem;
    }
`;

export const PortfolioInfo = styled.div`
    display: flex;
    width: 71.875rem;
    gap: 0.5rem;
    flex-direction: column;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 85vw;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 90vw;
    }
`;
