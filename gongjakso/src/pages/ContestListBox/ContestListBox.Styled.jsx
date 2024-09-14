import styled from 'styled-components';
import { ReactComponent as Fire } from '../../assets/images/Fire2.svg';

export const ContestContainer = styled.div`
    width: 315px;
    height: 385px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    position: relative; /* 부모 컨테이너에 상대적 위치 지정 */
`;

export const ContestImg = styled.img`
    width: 305px;
    height: 344px;
`;

export const RemainDate = styled.div`
    width: 75px;
    height: 27px;
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
    width: 20px;
    align-items: center;
    margin-right: 4px;
`;

export const ContestTitle = styled.h2`
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.09px;
    text-align: left;
`;

export const ContestCompany = styled.h2`
    font-family: 'Pretendard', sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 15.51px;
    text-align: left;
`;
