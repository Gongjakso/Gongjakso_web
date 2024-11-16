import styled from 'styled-components';
import { ReactComponent as GraySelectBox } from '../../assets/images/GraySelectBox.svg';
import { ReactComponent as BlackSelectBox } from '../../assets/images/BlackSelectBox.svg';

export const TopBox = styled.div`
    height: 15.625rem;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 1.25rem;
`;

export const GlobalBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GlobalBox2 = styled.div`
    display: flex;
    width: 100%;
`;

export const BlueBox = styled.div`
    width: 100%;
    min-width: 62.5rem;
    max-width: 75rem;
    margin: 4.375rem;
    border: 0.125rem solid ${({ theme }) => theme.box1};
    border-radius: 0.9375rem;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 100%;
    min-width: 62.5rem;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InsideBox = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    border: none;
    padding: 1.875rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    justify-content: space-between;
`;

export const Border = styled(InsideBox)`
    width: 50%;
    border-right: 0.125rem solid ${({ theme }) => theme.box1};
    border-radius: 0.9375rem;
    display: flex;
    flex-direction: column;
`;

export const DetailGlobal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.9375rem;
    justify-content: center;
`;

export const DetailGlobal2 = styled(DetailGlobal)`
    width: 73%;
`;

export const ButtonSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.9375rem;
    gap: 1.25rem;
`;

export const InsideTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: ${({ $title, theme }) =>
        $title === 'true' ? theme.fontSize.l : theme.fontSize.lg};
    font-family: ${({ $title, theme }) =>
        $title === 'true' ? 'TheJamsilRegular' : ''};
`;

export const InsideTitleFront = styled(InsideTitle)`
    display: block;
    width: 23.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TagNUM = styled.p`
    margin: 0 1.5625rem;
`;

export const InsideDetail = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 0.1875rem;
    font-weight: normal;
`;

export const GreyBtn = styled.button`
    width: 30%;
    background: ${({ theme }) => theme.Grey};
    text-align: center;
    padding: 0.9375rem 0.9375rem;
    font-weight: bold;
    border-radius: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    &:hover {
        background: black;
        color: ${({ theme }) => theme.mainFont2};
    }
`;

export const SubTitle = styled.div`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    text-align: left;
`;

export const MainTable = styled.table`
    width: 100%;
    margin-top: 1.875rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    width: 45%;
    justify-content: center;
    margin-top: 3.125rem;
`;

export const NotSelectedBtn = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.LightGrey};
    text-align: center;
    padding: 0.9375rem 0.9375rem;
    font-weight: bold;
    border-radius: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    cursor: pointer;
`;

export const SelectedBtn = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.box1};
    text-align: center;
    padding: 0.9375rem 0.9375rem;
    font-weight: bold;
    border-radius: 0.9375rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    cursor: pointer;
`;

export const Tagth = styled.th`
    width: 30%;
    height: 3.75rem;
    padding: 0.625rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    ${props =>
        props.$isleft === 'true'
            ? 'border-right: 0.03125rem solid #aaaaaa'
            : 'border-left: 0.03125rem solid #aaaaaa'}
`;

export const StyledThead = styled.thead``;

export const StyledTr = styled.tr`
    min-height: 3.75rem;
    border: 0.0625rem solid #aaaaaa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.9375rem 0.9375rem 0 0;
`;

export const StyledTd = styled.td`
    min-height: 5rem;
    border-bottom: 0.0625rem solid #aaaaaa;
    border-left: 0.0625rem solid #aaaaaa;
    border-right: 0.0625rem solid #aaaaaa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => (props.$state ? '#545454aa' : 'none')};
`;

export const CancelBox = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    z-index: 3;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const TableBox = styled.div`
    width: 30%;
    height: 100%;
    margin: 0.9375rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const User = styled(TableBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    img {
        width: 15%;
        margin-right: 0.625rem;
        z-index: -1;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`;

export const ShowBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    color: ${props => props.theme.mainFont};
    background: transparent;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-bottom: 0.625rem;
    img {
        width: 1.0625rem;
        margin-left: 0.625rem;
    }
`;

export const ShowPortBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    color: ${props => props.theme.LightGrey};
    background: transparent;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.base};
`;

export const StateBtn = styled.div`
    width: 33%;
    padding: 0.625rem;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.base};
    background: ${props => props.$bg};
    border-radius: 1.25rem;
`;

export const Postcheck = styled.div`
    width: 8.75rem;
    height: 2.8125rem;
    margin-top: 0.3125rem;
    border-radius: 0.625rem;
    text-align: center;
    padding: 0.625rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    border: 0.125rem solid #c8c8c8;
    font-family: 'PreBold';
    background: none;
    img {
        width: 1.0625rem;
        margin-top: 0.125rem;
        margin-left: 0.625rem;
    }
    cursor: pointer;
`;

export const GrayBox = styled(GraySelectBox)`
    width: 3.75rem;
    display: flex;
    height: 1.5625rem;
    cursor: pointer;
`;

export const BlackBox = styled(BlackSelectBox)`
    width: 3.75rem;
    display: flex;
    height: 1.5625rem;
    cursor: pointer;
`;
