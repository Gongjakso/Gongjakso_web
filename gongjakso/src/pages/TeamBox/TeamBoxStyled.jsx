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
    width: 100%;
    width: 71.875rem;
    height: 10rem;
    background-color: transparent;
    border: 0.09375rem solid ${props => props.$bordercolor || '#0054FF'};
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.mainFont};
    border-radius: 0.9375rem;
    padding: 1.25rem 3.125rem;
    margin: 0.525rem auto;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 85vw;
        height: auto;
        margin: 1rem auto 0.3rem auto;
        padding: 1.25rem 1rem;
    }

    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 90vw;
        height: auto;
        margin: 0.525rem auto 0.325rem auto;
        padding: 1rem 2rem;
    }
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1rem;
        width: 90%;
        order: 1;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1.25rem;
        width: 100%;
        margin-top: 0.55rem;
    }
`;

export const subTitle = styled.p`
    font-size: 1.1rem;
    color: #616161;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.875rem;
        margin-top: 0.5rem;
        order: 2;
        width: 100%;
        justify-content: left;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        margin-top: 1.05rem;
        justify-content: left;
    }
`;

//프로필페이지-제목 등
export const BoxTopDetail = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const MainBox = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        flex-direction: row;
    }
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
    margin-top: 0.5rem;
`;

//프로필페이지-파트명
export const BoxBottomDetail = styled.div`
    height: 50%;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

//스크랩 이미지
export const UnScrapImage = styled(UnScrap)`
    width: 1.5625rem;
    margin-right: 0.3rem;
`;

//마감 일수 이미지
export const FireImage = styled(Fire)`
    width: 1.5rem;
    align-items: center;
    margin-right: 0.3rem;
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
    /* 모바일·태블릿에서만 축소 */
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        height: 2.2rem;
        min-width: 6rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.875rem;
        height: 2.4rem;
        min-width: 7rem;
    }
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
    /* 모바일·태블릿에서만 축소 */
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        height: 2.2rem;
        min-width: 6rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.875rem;
        height: 2.4rem;
        min-width: 7rem;
    }
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
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
    /* 모바일·태블릿에서만 축소 */
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        height: 2.2rem;
        width: 5rem;
        margin-bottom: 0.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.875rem;
        height: 2.4rem;
        width: 7rem;
        margin-bottom: 0.5rem;
    }
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
    /* 모바일·태블릿에서만 축소 */
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        height: 2.2rem;
        width: 5rem;
        margin-bottom: 0.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 0.875rem;
        height: 2.4rem;
        width: 7rem;
        margin-bottom: 0.5rem;
    }
`;

//검은색 둥근 틀
export const RoundForm = styled.div`
    display: inline-flex;
    min-width: 8rem;
    height: 2.6rem;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    color: ${({ theme }) => theme.mainFont2};
    margin-right: 0.8rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        /* 모바일에서 축소 */
        min-width: 4rem;
        height: 2rem;
        font-size: 0.75rem;
        margin-right: 0.4rem;
        padding: 0 0.5rem;
        margin-bottom: 0.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        /* 태블릿에서 축소 */
        min-width: 5rem;
        height: 2.2rem;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }
`;

//프로필페이지-자세히보기
export const MoreDetail = styled(ArrowDetail)`
    position: absolute;
    top: 50%;
    right: 0.25rem;
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1rem;
    }
`;
