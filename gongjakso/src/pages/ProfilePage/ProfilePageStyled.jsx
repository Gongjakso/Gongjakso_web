import styled from 'styled-components';
import { ReactComponent as My_page_big } from '../../assets/images/My_page_big.svg';
import { ReactComponent as Edit } from '../../assets/images/Edit.svg';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';
import deleteBtn from '../../assets/images/deleteIcon.svg';
import editBtn from '../../assets/images/editIcon.svg';
import plus from '../../assets/images/PlusIcon.svg';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 30px;
    text-align: left;
    display: flex;
    justify-content: space-between;
`;

export const InfoBox = styled.div`
    position: absolute;
    transform: translateY(150%);
    padding-right: 50px;
    line-height: 25px;
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
    //margin-right: 50px;
    margin-bottom: 5px;
`;

//학과
export const MajorTitle = styled.p`
    //margin-right: 50px;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 170px;
    white-space: nowrap; // 내용이 줄바꿈되지 않고 한 줄에 표시되도록 설정
    overflow: hidden; // 내용이 너비를 초과할 경우 숨김 처리
    text-overflow: ellipsis; // 내용이 너비를 초과할 경우 ...으로 표시
`;

//소제목
export const SubTitle = styled.p`
    width: 68rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 900;
    padding-bottom: 25px;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

//프로필 이미지
export const ProfileImage = styled(My_page_big)`
    width: 200px;
    transform: translate(50%, 50%);
    right: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EditImage = styled(Edit)`
    height: 28px;
`;

export const ArrowImage = styled(Arrow)`
    width: 60px;
    display: flex;
    align-items: center;
    height: 25px;
`;

//나의 포트폴리오 박스
export const PortfolioBox = styled.button`
    width: 170px;
    height: 47px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.mainFont2};
    transform: translateY(150%);
    border-radius: 25px;
    margin-left: 50px;
`;

export const GlobalBox = styled.div`
    width: 100%;
    margin: 180px auto 0 auto; // 가운데 정렬
`;

export const BoxDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 90px;
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
    border: 1.5px dotted var(--system-grey4, #d2d2d7);
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
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
`;

export const PortfolioTitle = styled.span`
    font-family: 'PreRegular';
    white-space: nowrap; /* 텍스트를 한 줄로 표시 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 텍스트가 넘칠 경우 '...'으로 표시 */
    max-width: 700px;
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
    width: 68rem;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 24px;
    border: 2px solid #c3e9ff;
    background: #e5f5ff;
    padding: 3rem 3.5rem;
    box-sizing: border-box;
`;

export const PortfolioList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 68rem;
`;

export const Plus = styled.div`
    width: 1.688rem;
    height: 1.688rem;
    background: url(${plus});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    margin-bottom: 25px;
`;
