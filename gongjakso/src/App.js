import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import NoMobilePage from './pages/NoMobilePage/NoMobilePage';
import { HelmetProvider } from 'react-helmet-async';

function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

    return (
        <div className="container">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <HelmetProvider>
                    {/* <Router /> */}
                    {isMobile ? <NoMobilePage /> : <Router />}
                </HelmetProvider>
            </ThemeProvider>
        </div>
    );
}
export default App;
