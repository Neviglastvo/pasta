export enum Themes {
  dark,
  light,
}

enum Color {
  BLUE = '#002643',
  LIGHT_BLUE = '#C8E7FF',
  GRAY = '#3D3D3D',
  LIGHT_GRAY = '#6A6A6A',
  WHITE = '#FFF',
  WHITE_GRAY = '#EFEFEF',
  BLACK = '#000',
  RED = '#F80000',
  GREEN = '#00AE11',
}

type ThemeType = Themes.dark | Themes.light;

export interface Theme {
  primary: string;
  secondary: string;
  text: string;
  textLight: string;
  textInversed: string;
  background: string;
  backgroundDarken: string;
  error: string;
  success: string;
}

const lightTheme: Theme = {
  primary: Color.BLUE,
  secondary: Color.LIGHT_BLUE,
  text: Color.GRAY,
  textLight: Color.LIGHT_GRAY,
  textInversed: Color.WHITE,
  background: Color.WHITE,
  backgroundDarken: Color.WHITE_GRAY,
  error: Color.RED,
  success: Color.GREEN,
};

const darktheme: Theme = {
  primary: '#003366',
  secondary: '#eee',
  text: '#000',
  textLight: '#fff',
  textInversed: '#fff',
  background: '#fff',
  backgroundDarken: '#fff',
  error: '#F80000',
  success: '#F80000',
};

const themes: Record<ThemeType, Theme> = {
  [Themes.dark]: darktheme,
  [Themes.light]: lightTheme,
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default themes;
