import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import NoMobilePage from './pages/NoMobilePage/NoMobilePage';

function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 460px)' });

    return (
        <div className="container">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {/* <Router /> */}
                {isMobile ? <NoMobilePage /> : <Router />}
            </ThemeProvider>
        </div>
    );
}
export default App;
