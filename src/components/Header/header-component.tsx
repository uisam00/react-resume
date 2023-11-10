import React, { useContext } from 'react';
import { Container } from './header-styles';
import Switch from 'react-switch';
import { ThemeContext, DefaultTheme } from 'styled-components';
import { shade } from 'polished';
import { HeaderProps } from '.';

const Header: React.FC<HeaderProps> = React.memo(({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext) as DefaultTheme;

  return (
    <Container>
      curriculo
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.5, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
});

export default Header;
