import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'light' | 'dark';

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }
}
