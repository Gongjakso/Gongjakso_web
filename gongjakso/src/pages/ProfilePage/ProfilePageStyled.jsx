import styled from 'styled-components';
import { ReactComponent as My_page_big } from '../../assets/images/My_page_big.svg';
import { ReactComponent as Edit } from '../../assets/images/Edit.svg';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';

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
    position: relative;
    transform: translateY(150%);
    padding-right: 50px;
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
    width: 1000px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 900;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

//프로필 이미지
export const ProfileImage = styled(My_page_big)`
    width: 200px;
    transform: translateY(50%);
    display: flex;
    justify-content: center;
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
    width: 1200px; // 원하는 너비로 설정
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
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 3.813rem 22.25rem;
    border-radius: 1rem;
    gap: 4.5rem;
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
