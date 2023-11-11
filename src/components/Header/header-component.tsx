import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext, DefaultTheme } from 'styled-components';

import { HeaderProps } from '.';
import { Container } from './header-styles';

const Header: React.FC<HeaderProps> = React.memo(({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext) as DefaultTheme;

    return (
        <Container>
            Page
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
