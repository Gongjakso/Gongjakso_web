import styled from 'styled-components';
import { ReactComponent as UnScrap } from '../../assets/images/UnScrap.svg';
import { ReactComponent as Fire } from '../../assets/images/Fire.svg';
import { ReactComponent as ArrowDetail } from '../../assets/images/ArrowDetail.svg';
import { ReactComponent as CloseWhite } from '../../assets/images/CloseWhite.svg';

export const Container = styled.div`
    height: 100%;
    margin: 0 auto;
`;

export const Box = styled.div`
    position: relative;
    width: 71.875rem;
    height: 10rem;
    background-color: transparent;
    border: 0.09375rem solid ${props => props.$bordercolor || '#0054FF'};
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.mainFont};
    border-radius: 0.9375rem;
    padding: 1.25rem 3.125rem;
    margin: 0.625rem 0rem;
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.mainFont};
    width: 18.5rem;
    align-items: center;
    justify-content: flex;
    font-family: 'TheJamsilRegular';
    margin-right: 1.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const subTitle = styled.p`
    font-size: 1.1rem;
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
    width: 28%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

//프로필페이지-파트명
export const BoxBottomDetail = styled.div`
    height: 50%;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

//프로필 이미지
export const UnScrapImage = styled(UnScrap)`
    width: 1.5625rem;
    margin-right: 0.5rem;
`;

//마감 일수 이미지
export const FireImage = styled(Fire)`
    width: 1.5rem;
    align-items: center;
    margin-right: 0.5rem;
`;

export const CloseImage = styled(CloseWhite)`
    width: 1.25rem;
    position: absolute;
    top: 1.5625rem;
    right: 1.5625rem;
    cursor: pointer;
    z-index: 2;
`;

//마감일수
export const DeadLine = styled.div`
    width: 80%;
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0.125rem solid ${({ theme }) => theme.Purple};
    border-radius: 3.125rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.Purple};
`;

//스크랩 횟수
export const ScrapNum = styled.div`
    width: 9rem;
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0.125rem solid #00efaf;
    border-radius: 3.125rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.Green};
`;

//합류 대기중
export const WaitingJoin = styled.div`
    width: 10rem;
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, $status }) =>
        $status === '합류 완료'
            ? theme.box1
            : $status === '미선발'
              ? theme.LightGrey
              : theme.Light1};
    border-radius: 3.125rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
`;

//활동 중 or 활동 중단
export const ActivityStatus = styled.div`
    width: 10rem;
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, $poststatus }) =>
        $poststatus === 'ACTIVE' ? theme.box1 : theme.box2};
    border-radius: 3.125rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
    cursor: ${({ $isleader, $poststatus }) =>
        $isleader
            ? $poststatus === 'ACTIVE'
                ? 'pointer'
                : 'not-allowed'
            : 'not-allowed'};
`;

//검은색 둥근 틀
export const RoundForm = styled.div`
    min-width: 8rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.mm};
    font-weight: 500;
    color: ${({ theme }) => theme.mainFont2};
    margin-right: 0.8rem;
`;

//프로필페이지-자세히보기
export const MoreDetail = styled(ArrowDetail)`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    height: 100%;
    z-index: 3;
`;

//프로필페이지 -> 모집 마감, 연장, 취소 오버레이
export const DeadlineOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSize.ll};
    background: ${({ $status }) =>
        $status === 'EXTENSION'
            ? `rgba(0, 84, 255, 0.5)`
            : `rgba(0, 0, 0, 0.5)`};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;
