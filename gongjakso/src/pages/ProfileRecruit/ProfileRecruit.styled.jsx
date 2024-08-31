import styled from 'styled-components';
import { ReactComponent as GraySelectBox } from '../../assets/images/GraySelectBox.svg';
import { ReactComponent as BlackSelectBox } from '../../assets/images/BlackSelectBox.svg';

export const TopBox = styled.div`
    height: 250px;
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
    top: 20px;
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
    min-width: 1000px;
    max-width: 1200px;
    margin: 70px;
    border: 2px solid ${({ theme }) => theme.box1};
    border-radius: 15px;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 100%;
    min-width: 1000px;
    max-width: 1200px;
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
    padding: 30px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    justify-content: space-between;
`;

export const Border = styled(InsideBox)`
    width: 50%;
    border-right: 2px solid ${({ theme }) => theme.box1};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;

export const DetailGlobal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    justify-content: center;
`;

export const DetailGlobal2 = styled(DetailGlobal)`
    width: 73%;
`;

export const ButtonSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 15px;
    gap: 20px;
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
    width: 370px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TagNUM = styled.p`
    margin: 0 25px;
`;

export const InsideDetail = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 3px;
    font-weight: normal;
`;

export const GreyBtn = styled.button`
    width: 30%;
    background: ${({ theme }) => theme.Grey};
    text-align: center;
    padding: 15px 15px;
    font-weight: bold;
    border-radius: 15px;
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
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 45%;
    justify-content: center;
    margin-top: 50px;
`;

export const NotSelectedBtn = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.LightGrey};
    text-align: center;
    padding: 15px 15px;
    font-weight: bold;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    cursor: pointer;
`;

export const SelectedBtn = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.box1};
    text-align: center;
    padding: 15px 15px;
    font-weight: bold;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    cursor: pointer;
`;

export const Tagth = styled.th`
    width: 30%;
    height: 60px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.mdd};
    ${props =>
        props.$isleft === 'true'
            ? 'border-right: 0.5px solid #aaaaaa'
            : 'border-left: 0.5px solid #aaaaaa'}
`;

export const StyledThead = styled.thead``;
export const StyledTr = styled.tr`
    min-height: 60px;
    border: 1px solid #aaaaaa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px 15px 0 0;
`;

export const StyledTd = styled.td`
    min-height: 80px;
    border-bottom: 1px solid #aaaaaa;
    border-left: 1px solid #aaaaaa;
    border-right: 1px solid #aaaaaa;
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
    margin: 15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 100px;
`;

export const User = styled(TableBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    img {
        width: 15%;
        margin-right: 10px;
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
    margin-bottom: 10px;
    img {
        width: 17px;
        margin-left: 10px;
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
    width: 45%;
    padding: 10px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.base};
    background: ${props => props.$bg};
    border-radius: 20px;
`;

export const Postcheck = styled.div`
    width: 140px;
    height: 45px;
    margin-top: 5px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    border: 2px solid #c8c8c8;
    font-family: 'PreBold';
    background: none;
    img {
        width: 17px;
        margin-top: 2px;
        margin-left: 10px;
    }
    cursor: pointer;
`;

export const GrayBox = styled(GraySelectBox)`
    width: 60px;
    display: flex;
    height: 25px;
    cursor: pointer;
`;

export const BlackBox = styled(BlackSelectBox)`
    width: 60px;
    display: flex;
    height: 25px;
    cursor: pointer;
`;
