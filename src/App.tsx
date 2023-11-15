// import { Header } from './components/Header';
import { QueryClientProvider } from '@tanstack/react-query';
import { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';
import { CurriculumPage } from './page/Curriculum';
import { queryClient } from './services/queryClient';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = () => {
    const [chooseTheme, setChooseTheme] = usePersistedState('theme', light);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const toggleTheme = useCallback(() => {
        setChooseTheme(chooseTheme.title === 'light' ? dark : light);
    }, [chooseTheme.title, setChooseTheme]);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={chooseTheme}>
                <GlobalStyle />
                {/* <Header toggleTheme={toggleTheme} /> */}
                <CurriculumPage />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
