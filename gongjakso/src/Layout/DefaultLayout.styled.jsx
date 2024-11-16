import styled from 'styled-components';

export const Main = styled.main`
    overflow: ${props => (props.$isHome ? null : 'auto')};
`;
export const NoHeaderMain = styled.main`
    overflow: ${props => (props.$isHome ? null : 'auto')};
`;

export const Div = styled.div`
    width: 100%;
    min-height: 100vh;
`;
