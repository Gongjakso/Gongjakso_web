import styled from 'styled-components';
import { ReactComponent as Banner } from '../../assets/images/banner.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/Search.svg';

export const Searchicon = styled(SearchIcon)`
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
`;

export const MainContent = styled.div`
    width: 100%;
    max-width: 70.8rem;
    margin: 0 auto;
    margin-top: 5.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Banners = styled(Banner)`
    svg {
        width: 100%;
    }
`;

export const Div = styled.div`
    width: 90%;
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;
export const SearchBar = styled.div`
    width: 80%;
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
    color: ${props => props.theme.mainFont};
    border: none;
    outline: none;
    padding-left: 1rem;
`;

export const Fillterbox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
`;
export const Fillter1 = styled.div`
    width: 14rem;
    border-radius: 6px;
    border: 1.5px solid #c4c4c4;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    margin-right: 30px;
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
    gap: 0.6rem;
`;
export const ContestContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.65rem;
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
