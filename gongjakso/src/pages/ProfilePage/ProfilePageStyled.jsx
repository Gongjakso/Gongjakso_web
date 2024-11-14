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
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 1.875rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
`;

export const InfoBox = styled.div`
    position: absolute;
    transform: translateY(150%);
    padding-right: 3.125rem;
    line-height: 1.5625rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: -28rem;
`;

//이름
export const NameTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreBold';
    margin-bottom: 0.3125rem;
`;

//학과
export const MajorTitle = styled.p`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

//소제목
export const SubTitle = styled.p`
    width: 62.5rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 900;
    padding-bottom: 1.5625rem;
    display: flex;
    align-items: center;
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
`;

export const EditImage = styled(Edit)`
    height: 1.75rem;
`;

export const ArrowImage = styled(Arrow)`
    width: 3.75rem;
    display: flex;
    align-items: center;
    height: 1.5625rem;
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
`;

export const GlobalBox = styled.div`
    width: 100%;
    margin: 11.25rem auto 0 auto; // 가운데 정렬
`;

export const BoxDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5.625rem;
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
`;

export const PortfolioContent = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const ViewPortfolioBtn = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
`;

export const PortfolioTitle = styled.span`
    font-family: 'PreMedium';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 43.75rem;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export const PortfolioButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-direction: row;
`;

export const EditPortfolioButton = styled.button`
    background: url(${editBtn});
    border: none;
    cursor: pointer;
    background-repeat: no-repeat;
    width: 3.5rem;
    height: 3.5rem;
    transform: scale(0.8);
`;

export const DeletePortfolioButton = styled.button`
    background: url(${deleteBtn});
    border: none;
    cursor: pointer;
    background-repeat: no-repeat;
    width: 3.6rem;
    height: 3.6rem;
    transform: scale(0.8);
`;

export const PortfolioContainer = styled.div`
    width: 71.875rem;
    min-height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.5rem;
    border: 0.125rem solid #c3e9ff;
    background: #e5f5ff;
    padding: 1.5rem 3rem;
    box-sizing: border-box;
`;

export const PortfolioList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 71.875rem;
`;

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 71.875rem;
`;

export const Plus = styled.div`
    width: 1.688rem;
    height: 1.688rem;
    background: url(${plus});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    margin-bottom: 1.5625rem;
`;

export const LinkInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.fontSize.mdd};
    font-weight: 600;
    text-align: left;
    gap: 0.5rem;
`;

export const LinkDetail = styled.div`
    color: #8e8e93;
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
    text-align: left;
    margin-top: 0.5rem;
`;

export const PortfolioInfo = styled.div`
    display: flex;
    width: 71.875rem;
    gap: 0.5rem;
    flex-direction: column;
`;
