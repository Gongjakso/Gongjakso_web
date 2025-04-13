import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { useMediaQuery } from 'react-responsive';
import { HelmetProvider } from 'react-helmet-async';

function App() {
    const isPC = useMediaQuery({ query: '(min-width: 1024px)' });
    const isTablet = useMediaQuery({
        query: '(min-width: 550px) and (max-width: 1023px)',
    });
    const isMobile = useMediaQuery({ query: '(max-width: 549px)' });

    const getTheme = () => {
        if (isPC) return theme.pc;
        if (isTablet) return theme.tablet; // 태블릿을 모바일 테마와 같은 폰트 사이즈로 처리
        if (isMobile) return theme.mobile;
        return theme.pc; // 기본적으로 PC 테마를 반환
    };

    return (
        <div className="container">
            <ThemeProvider theme={getTheme()}>
                <GlobalStyle />
                <HelmetProvider>
                    <Router />
                </HelmetProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
