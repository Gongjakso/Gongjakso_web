import styled from 'styled-components';
import { ReactComponent as Banner } from '../../assets/images/banner.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/Search.svg';

export const Searchicon = styled(SearchIcon)`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

export const MainContent = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Banners = styled(Banner)`
    svg {
        width: 100%;
        height: auto;
    }
`;

export const Div = styled.div`
    width: 900px;
    height: 100%;
    display: flex;
`;

export const Search = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;
export const SearchBar = styled.div`
    width: 70%;
    padding: 10px;
    border: 2px solid ${props => props.theme.Main1};
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const Searchmark = styled.div`
    padding-right: 10px;
`;

export const SearchUsernameInput = styled.input`
    width: 100%;
    font-size: ${props => props.theme.fontSize.md};
    font-family: 'PreMedium';
    color: #c4c4c4;
    border: none;
    outline: none;
`;

export const Fillterbox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
`;
export const Fillter1 = styled.div`
    width: 220px;
    border-radius: 10px;
    border: 1.5px solid #c4c4c4;
    padding: 12px 18px;
    display: flex;
    align-items: center;
`;
export const Fillter2 = styled.div`
    width: 100%;
    height: 70px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`;
export const Fillterbox1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 10px;
    margin-bottom: 30px;
`;

export const PostContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const ContestContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 27px;
`;

export const TeamBoxContent = styled.div``;

export const Article = styled.div`
    width: 100%;
    height: 190px;
    border: 1px solid ${props => props.$isColor};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;
