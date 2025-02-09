import styled from 'styled-components';
import { ReactComponent as Fire } from '../../assets/images/Fire2.svg';

export const ContestContainer = styled.div`
    width: 22vw;
    height: 29vw;
    max-width: 19rem;
    min-width: 130px;
    min-height: 182px;
    max-height: 29.5rem;
    display: flex;
    flex-direction: column;
    position: relative; /* 부모 컨테이너에 상대적 위치 지정 */
    margin-bottom: 15px;
`;

export const ContestImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 21vw;
    height: 26vw;
    max-width: 19rem;
    min-width: 130px;
    min-height: 182px;
    max-height: 29.5rem;
`;

export const RemainDate = styled.div`
    width: auto;
    padding: 10px;
    height: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.Purple};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
    background-color: ${({ theme }) => theme.Purple};
    position: absolute; /* RemainDate를 절대 위치로 지정 */
    top: 0.6vw; /* ContestContainer의 상단에서 10px 아래에 위치 */
    left: 0.6vw; /* ContestContainer의 왼쪽에서 10px 오른쪽에 위치 */
`;

export const FireImage = styled(Fire)`
    width: 2vw;
    max-width: 1.5rem;
    min-width: 0.5rem;
    align-items: center;
    margin-right: 4px;
`;

export const ContestTitle = styled.h2`
    width: 100%;
    height: auto;
    font-weight: 700;
    line-height: 19.09px;
    text-align: left;
    margin-bottom: 0.3vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ContestCompany = styled.h2`
    font-size: 0.7rem;
    font-weight: 700;
    line-height: 15.51px;
    text-align: left;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
