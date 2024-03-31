import styled from 'styled-components';
import { ReactComponent as UnScrap } from '../../assets/images/UnScrap.svg';
import { ReactComponent as Fire } from '../../assets/images/Fire.svg';
import { ReactComponent as ArrowDetail } from '../../assets/images/ArrowDetail.svg';
import { ReactComponent as CloseWhite } from '../../assets/images/CloseWhite.svg';

export const Box = styled.div`
    position: relative;
    width: 1200px;
    height: 160px;
    background-color: transparent;
    border: 1.5px solid ${props => props.borderColor || '#0054FF'};
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.mainFont};
    border-radius: 15px;
    padding: 20px ${props => (props.showMoreDetail ? '90px' : '50px')} 20px 50px;
    margin: 10px 0px;
    //마감일수가 0일 때 상태 변환
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.mainFont};
    //display: flex;
    align-items: center;
    justify-content: flex;
    font-family: 'TheJamsilRegular';
    margin-right: 30px;
    width: 330px; // 너비 설정
    white-space: nowrap; // 내용이 줄바꿈되지 않고 한 줄에 표시되도록 설정
    overflow: hidden; // 내용이 너비를 초과할 경우 숨김 처리
    text-overflow: ellipsis; // 내용이 너비를 초과할 경우 ...으로 표시
`;

export const subTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: #616161;
    display: flex;
    align-items: center;
    justify-content: center;
`;

//프로필페이지-제목 등
export const BoxTopDetail = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
`;

export const MainBox = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
`;

export const BottomBox = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
`;

export const SubBox = styled.div`
    width: 27%;
    display: flex;
    justify-content: space-between;
`;

//프로필페이지-파트명
export const BoxBottomDetail = styled.div`
    height: 50%;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

//프로필 이미지
export const UnScrapImage = styled(UnScrap)`
    width: 25px;
    margin-right: 13px;
`;

//마감 일수 이미지
export const FireImage = styled(Fire)`
    width: 20px;
    margin-right: 10px;
`;

export const CloseImage = styled(CloseWhite)`
    width: 20px;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
`;

//마감일수
export const DeadLine = styled.div`
    width: 145px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 2px solid ${({ theme }) => theme.Purple};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.Purple};
`;

//스크랩 횟수
export const ScrapNum = styled.div`
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 2px solid #00efaf;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.Green};
`;

//합류 대기중
export const WaitingJoin = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.Light1};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
`;

//활동 중 or 활동 중단
export const ActivityStatus = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0054ff;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
`;

//검은색 둥근 틀
export const RoundForm = styled.div`
    min-width: 120px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSize.mm};
    font-weight: 500;
    color: ${({ theme }) => theme.mainFont2};
    margin-right: 10px;
`;

//프로필페이지-자세히보기
export const MoreDetail = styled(ArrowDetail)`
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    height: 100%;
    z-index: 1;
`;

/*
//프로필페이지 -> 모집 마감, 연장, 취소 오버레이
export const DeadlineOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    font-size: ${({ theme }) => theme.fontSize.ll};
    //background-color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 84, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;
*/
