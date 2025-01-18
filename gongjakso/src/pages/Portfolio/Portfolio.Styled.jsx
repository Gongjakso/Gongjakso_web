import styled from 'styled-components';
import linkicon from '../../assets/images/linkIcon.svg';
import plus from '../../assets/images/PlusIcon.svg';
import pdf from '../../assets/images/pdf.svg';
import fileExceededImg from '../../assets/images/FileExceeded.svg';
import unchecked from '../../assets/images/unchecked.svg';
import checked from '../../assets/images/checked.svg';
import Close from '../../assets/images/Close.svg';

export const TopBox = styled.div`
    height: 15.625rem;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        background-color: transparent;
        height: 12rem;
    }
`;

export const BoxDetail = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const PortfolioInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 64rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
    }
`;

export const UserName = styled.span`
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    line-height: 0.5rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 2rem;
    }
`;

export const Description = styled.span`
    font-size: ${({ theme }) => theme.fontSize.m};
    color: #565656;
    line-height: 5rem;
    font-family: 'PreRegular';
    @media screen and (min-width: 375px) and (max-width: 549px) {
        font-size: 0.75rem;
        line-height: 3rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        font-size: 1rem;
        line-height: 4rem;
    }
`;

export const GlobalBox = styled.div`
    width: 100%;
    max-width: 62.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto; // 가운데 정렬
    @media screen and (min-width: 375px) and (max-width: 549px) {
        max-width: 20.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        max-width: 35rem;
    }
`;

export const SubTitle = styled.p`
    width: 100%;
    max-width: 62.5rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    margin-bottom: 1.563rem;
    font-family: 'PreMedium';
    display: flex;
    align-items: center;
    margin: 0;
    line-height: 1.79rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        max-width: 20.75rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
        max-width: 35rem;
    }
`;

export const UploadInfo = styled.p`
    width: 100%;
    font-family: 'PreRegular';
    max-width: 62.5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
    color: #565656;
    margin: 0.625rem 0;
    line-height: 1.343rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        max-width: 20.75rem;
        font-size: 0.75rem;
        margin-bottom: 0;
        line-height: 1.1rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        max-width: 35rem;
        font-size: 1rem;
        margin-bottom: 0;
        line-height: 1.1rem;
    }
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
    border: 0.094rem solid var(--system-grey4, #d2d2d7);
    padding: 0.983rem 1.125rem;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 0.688rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 17.688rem;
        font-size: 0.938rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 30rem;
        font-size: 1.1rem;
    }
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.75rem;
        margin-top: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
        font-size: 2.5rem;
    }
`;

export const PlusBtn = styled.div`
    width: 1.688rem;
    height: 1.688rem;
    background: url(${plus});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 1.125rem;
        height: 1.125rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 10rem;
    margin-bottom: 15rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        margin-top: 9.738rem;
    }
`;

export const BackBtn = styled.button`
    width: 20rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.Grey};
    color: black;
    cursor: pointer;
    padding: 1rem 6rem;
    border-radius: 9.737px;
    font-family: 'PreMedium';
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 10.5rem;
        height: 3.063rem;
        font-size: 1rem;
        padding: 0.813rem 3.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 15rem;
        height: 3.2rem;
        font-size: 1rem;
        padding: 0.813rem 2.5rem;
    }
`;
export const SaveBtn = styled.button`
    width: 20rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.box1};
    color: white;
    padding: 1rem 6rem;
    cursor: pointer;
    border-radius: 9.737px;
    font-family: 'PreMedium';
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 10.5rem;
        height: 3.063rem;
        font-size: 1rem;
        padding: 0.813rem 3.5rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 15rem;
        height: 3.2rem;
        font-size: 1rem;
        padding: 0.813rem 2.5rem;
    }
`;

export const NameInput = styled(SNSInput)`
    width: 64rem;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
    }
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.75rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 42rem;
    }
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

export const Filter1 = styled.div`
    width: 13.6rem;
    height: 3.438rem;
    font-family: 'PreRegular';
    border-radius: 0.688rem;
    color: #828293;
    font-size: ${({ theme }) => theme.fontSize.m};
    border: 0.094rem solid ${({ theme }) => theme.Grey};
    display: flex;
    padding: 0.7rem 1.35rem;
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
    border: 0.094rem solid var(--system-grey4, #d2d2d7);
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
    border: 0.094rem dotted var(--system-grey4, #d2d2d7);
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 2rem 27.313rem;
    border-radius: 1rem;
    gap: 1.188rem;
    line-height: 2.088rem;
    font-family: 'PreRegular';
    margin: 1rem 0;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 20.75rem;
        padding: 2.5rem 1.75rem 1.875rem 1.75rem;
        margin: 0;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 35rem;
        padding: 1.5rem 1.25rem 1.575rem 1.35rem;
        margin: 0;
    }
`;

export const PdfImg = styled.div`
    background-image: url(${({ $isExceeded }) =>
        $isExceeded ? fileExceededImg : pdf}); /* 배경 이미지 변경 */
    width: ${({ $isExceeded }) =>
        $isExceeded ? '15.563rem' : '6.75rem'}; /* 크기 변경 */
    height: 3.75rem;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;

    @media screen and (min-width: 375px) and (max-width: 549px) {
        transform: scale(0.8);
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        transform: scale(0.9);
    }
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
    @media screen and (min-width: 375px) and (max-width: 549px) {
        width: 14.75rem;
        font-size: 1rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        width: 17rem;
    }
`;

export const ErrorMessage = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
`;

export const DeleteBtn = styled.div`
    background: url(${Close});
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 2rem;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
`;
export const FileInfoBox = styled.div`
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
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
    gap: 0.625rem;
    justify-content: space-between;
`;
export const CareerCheck = styled.div`
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.m};
`;

export const CheckImg = styled.div`
    background-image: url(${props => (props.checked ? checked : unchecked)});
    cursor: pointer;
    width: 2.063rem;
    height: 2.063rem;
    background-size: contain;
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
    padding: 0.313rem;
    margin-bottom: 7rem;
    background-color: #f7f7f7;
    border-radius: 0.313rem;
    border: 0.094rem dotted #d2d2d7;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: #333;
    max-width: 62.5rem;
    width: 100%;
    margin-top: 1rem;
    word-wrap: break-word;
    @media screen and (min-width: 375px) and (max-width: 549px) {
        margin-bottom: 4rem;
    }
    @media screen and (min-width: 550px) and (max-width: 1023px) {
        margin-bottom: 4.5rem;
    }
`;

export const FileName = styled.div`
    flex: 1;
    font-size: 0.875rem;
    font-family: 'PreMedium';
    color: #979797;
`;
export const FileSize = styled.div`
    flex: 0.5;
    font-size: 0.75rem;
    font-family: 'PreMedium';
    color: #8c8c8c;
    text-align: left;
`;

export const FileList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    width: 100%;
    padding: 0.3rem;
`;

export const FileItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    border-radius: 0.313rem;
`;
