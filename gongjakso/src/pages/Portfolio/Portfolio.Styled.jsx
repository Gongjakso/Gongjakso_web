import styled from 'styled-components';
import linkicon from '../../assets/images/linkIcon.svg';
import plus from '../../assets/images/PlusIcon.svg';
import { SelectInput } from '../../components/common/Input/Input';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const BoxDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;
export const PortfolioInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 69rem;
`;

export const UserName = styled.span`
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    line-height: 0.5rem;
`;

export const Description = styled.span`
    font-size: ${({ theme }) => theme.fontSize.m};
    color: #565656;
    line-height: 5rem;
`;

export const GlobalBox = styled.div`
    width: 69rem; // 원하는 너비로 설정
    margin: 5rem auto 0 auto; // 가운데 정렬
`;

export const SubTitle = styled.p`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    margin-bottom: 25px;
    font-family: 'PreMedium';
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

export const LinkIcon = styled.div`
    background: url(${linkicon});
    width: 3.188rem;
    height: 3.188rem;
    border: none;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const SNSInput = styled.input`
    width: 65.109rem;
    height: 3.438rem;
    border: 1.5px solid var(--system-grey4, #d2d2d7);
    padding: 0.983rem 1.125rem;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 0.688rem;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.813rem;
`;

export const TitleSection = styled.div`
    display: flex;
    width: 69rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 4rem;
`;

export const PlusBtn = styled.div`
    width: 1.688rem;
    height: 1.688rem;
    background: url(${plus});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 10rem;
    margin-bottom: 15rem;
`;
export const BackBtn = styled.button`
    width: 20rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.Grey};
    color: black;
    padding: 1rem 6rem;
    border-radius: 1rem;
    font-family: 'PreMedium';
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.mdd};
`;
export const SaveBtn = styled.button`
    width: 20rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.box1};
    color: white;
    padding: 1rem 6rem;
    border-radius: 1rem;
    font-family: 'PreMedium';
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.mdd};
`;

export const TestInput = styled(SNSInput)`
    width: 32.188rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    width: 100%;
`;

export const ScoreInput = styled(SNSInput)`
    width: 17.125rem;
`;

export const ActivityInput = styled(SNSInput)`
    width: 50.625rem;
`;

export const EducationInput = styled(SNSInput)`
    width: 33.25rem;
`;

export const Fillter1 = styled.div`
    width: 16.813rem;
    border-radius: 0.688rem;
    border: 1.5px solid ${({ theme }) => theme.Grey};
    display: flex;
    align-items: center;
`;

export const CompanyInput = styled(SNSInput)`
    width: 39rem;
`;
export const PositionInput = styled(SNSInput)`
    width: 29.188rem;
`;

export const Textarea = styled.textarea`
    width: 69rem;
    height: 9.813rem;
    border: 1.5px solid var(--system-grey4, #d2d2d7);
    padding: 0.983rem 1.125rem;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 0.688rem;
    overflow-y: scroll;
    resize: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;
