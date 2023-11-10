import { Header } from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { useCallback } from 'react';
import dark from './styles/themes/dark';
import usePersistedState from './hooks/usePersistedState';

const App = () => {
  const [chooseTheme, setChooseTheme] = usePersistedState('theme', light);

  const toggleTheme = useCallback(() => {
    setChooseTheme(chooseTheme.title === 'light' ? dark : light);
  }, [chooseTheme.title, setChooseTheme]);

  return (
    <ThemeProvider theme={chooseTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
