import React from 'react';
import {light, dark} from '@eva-design/eva';
import {cvdTheme} from './cvd19-theme';
/**
 * theme types
 */
export type Ttheme = 'light' | 'dark' | 'kenti';

//app themes
export const Themes = {
  light: light,
  dark: dark,
  cvd19: cvdTheme,
};
/**
 * provides theme and toggleTheme handler
 */
export const ThemeContext = React.createContext({toggleTheme: () => {}});
