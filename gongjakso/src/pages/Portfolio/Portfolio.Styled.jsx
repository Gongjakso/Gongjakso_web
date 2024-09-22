import styled from 'styled-components';
import linkicon from '../../assets/images/linkIcon.svg';
import plus from '../../assets/images/PlusIcon.svg';
import pdf from '../../assets/images/pdf.svg';
import trash from '../../assets/images/trash.svg';
import unchecked from '../../assets/images/unchecked.svg';
import checked from '../../assets/images/checked.svg';
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
    gap: 0.5rem;
    width: 70rem;
    margin-bottom: 1rem;
`;
export const PortfolioInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 64rem;
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
    width: 64rem;
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
    line-height: 1.79rem;
`;

export const UploadInfo = styled.p`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    color: #565656;
    margin: 0.625rem 0;
    line-height: 1.343rem;
    margin-bottom: 1.5rem;
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
    width: 60rem;
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
    width: 64rem;
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
    cursor: pointer;
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
    cursor: pointer;
    border-radius: 1rem;
    font-family: 'PreMedium';
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.mdd};
`;

export const NameInput = styled(SNSInput)`
    width: 64rem;
`;
export const TestInput = styled(SNSInput)`
    width: 32.188rem;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0.625rem;
    width: 64rem;
`;

export const ScoreInput = styled(SNSInput)`
    width: 17.125rem;
`;

export const ActivityInput = styled(SNSInput)`
    width: 50.625rem;
`;

export const EducationInput = styled(SNSInput)`
    width: 33rem;
`;

export const Fillter1 = styled.div`
    width: 220px;
    height: 3.438rem;
    font-family: 'PreRegular';
    border-radius: 0.688rem;
    color: #828293;
    font-size: ${({ theme }) => theme.fontSize.m};
    border: 1.5px solid ${({ theme }) => theme.Grey};
    display: flex;
    padding: 12px 18px;
    align-items: center;
`;

export const CompanyInput = styled(SNSInput)`
    width: 37rem;
`;
export const PositionInput = styled(SNSInput)`
    width: 27rem;
`;

export const Textarea = styled.textarea`
    width: 64rem;
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
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const FileUploadBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 64rem;
    height: 15.125rem;
    background-color: #f7f7f7;
    border: 1.5px dotted var(--system-grey4, #d2d2d7);
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 2rem 27.313rem;
    border-radius: 1rem;
    gap: 1.188rem;
    line-height: 2.088rem;
    font-family: 'PreRegular';
    margin: 1rem 0;
`;

export const pdfImg = styled.div`
    background: url(${pdf});
    width: 6.75rem;
    height: 3.75rem;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const UploadBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.box1};
    color: white;
    width: 15rem;
    height: 3.25rem;
    cursor: pointer;
    padding: 0.813rem 2.625rem;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
`;

export const ErrorMessage = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
`;

export const DeleteBtn = styled.div`
    background: url(${trash});
    width: 3.25rem;
    height: 3.25rem;
    margin-left: 2rem;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const BtnWrapper = styled.div`
    display: flex;
    width: 64rem;
    flex-direction: column;
    gap: 0.5rem;
`;

export const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    height: 3.438rem;
    gap: 10px;
    justify-content: space-between;
`;
export const CareerCheck = styled.div`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
`;

export const CheckImg = styled.div`
    background-image: url(${props => (props.checked ? checked : unchecked)});
    cursor: pointer;
    width: 33px;
    height: 33px;
    background-repeat: no-repeat;
`;

export const CalendarSection = styled.div`
    display: flex;
    gap: 0.625rem;
`;
export const FileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 7rem;
    background-color: #f7f7f7;

    border-radius: 5px;
    border: 1.5px dotted #d2d2d7;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: #333;
    max-width: 1000px;
    word-wrap: break-word;
`;

export const FileName = styled.div`
    flex: 1;
    font-size: 14px;
    color: #333;
`;
export const FileSize = styled.div`
    flex: 0.5;
    font-size: 14px;
    color: #666;
    text-align: right;
    margin-right: 10px;
`;

export const FileList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const FileItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`;
