import styled from 'styled-components';
import { ReactComponent as Fire } from '../../assets/images/Fire2.svg';

export const ContestContainer = styled.div`
    width: 22.5rem;
    height: 33rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    position: relative; /* 부모 컨테이너에 상대적 위치 지정 */
    margin-bottom: 15px;
`;

export const ContestImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 22rem;
    height: 29.5rem;
`;

export const RemainDate = styled.div`
    width: auto;
    padding: 10px;
    height: 2rem;
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
    top: 10px; /* ContestContainer의 상단에서 10px 아래에 위치 */
    left: 10px; /* ContestContainer의 왼쪽에서 10px 오른쪽에 위치 */
`;

export const FireImage = styled(Fire)`
    width: 1.5rem;
    align-items: center;
    margin-right: 4px;
`;

export const ContestTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 19.09px;
    text-align: left;
    margin-bottom: 5px;
`;

export const ContestCompany = styled.h2`
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 15.51px;
    text-align: left;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;
