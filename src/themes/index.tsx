import React from 'react';
import {light, dark} from '@eva-design/eva';
import {cvdTheme as cvd19} from './cvd19-theme';

export const themes = {
  light,
  dark,
  cvd19,
};
/**
 * provides theme and toggleTheme handler
 */
export const ThemeContext = React.createContext({
  theme: 'cvd19',
  toggleTheme: () => {},
});
