import styled from 'styled-components';
import { ReactComponent as downloadImg } from '../../assets/images/download.svg';
import {ReactComponent as LinkImg} from '../../assets/images/link.svg';


export const TopBox = styled.div`
    height: 21rem;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; /* 상대적 위치를 위한 설정 */

    img {
        width: 72px;
        margin-bottom: 2rem;
    }
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Major = styled.p`
    margin: 0.2rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: 'PreMedium';
`;

export const GlobalBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem 20rem;
`;

export const SubTitle = styled.p`
    font-size: 1.6rem;
    font-family: 'PreBold';
`;

export const DetailBox = styled.div`
    padding: 1.5rem;
`;

export const ContentBox = styled.p`
    margin-top: 1.5rem;
    padding: 1.5rem;
    width: 100%;
    height: auto;
    min-height: 22rem;
    border: 1.5px solid ${({ theme }) => theme.Grey};
    border-radius: 9px;
    font-size: ${({ theme }) => theme.fontSize.m};
    resize: none;
    word-wrap:break-word;
`;

export const BoxDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;

export const PortBox = styled.div`
    width: ${props => props.$w};
    height: 3.438rem;
    margin-top: 1.5rem;
    margin-right: 0.5rem;
    border: 1.5px solid ${({ theme }) => theme.Grey};
    padding: 0.983rem 1.125rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 9px;
    color: #828293;
    display: flex;
    align-items: center;
`;

export const FlexPortBox = styled(PortBox)`
    display: flex;
    justify-content: space-between;
`;

export const WorkContent = styled.div`
    width: 100%;
    display: inline-block;
    padding: 0.983rem 1.125rem;
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    border: 1.5px solid ${({ theme }) => theme.Grey};
    border-radius: 9px;
    color: #828293;
`;

export const BottomBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem 0;
`;

export const PdfButton = styled.button`
    width: 150px;
    height: 50px;
    position: absolute; /* 절대 위치 설정 */
    top: 230px; /* 상단 여백 */
    right: 150px; /* 오른쪽 여백 */
`;

export const Span = styled.span`
    font-size: 1.3rem;
    font-family: 'PreBold';
    border-bottom: 2px solid black;
`;

export const Downimg = styled(downloadImg)`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;
export const Linklogo = styled(LinkImg)`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

export const fileLinkBtn = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: #E5F5FF;
`