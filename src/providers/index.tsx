import React, {Children} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping} from '@eva-design/eva';
import {ThemeContext, themes} from '../themes';
import {AssetIconsPack} from './CustomIconRegistry';

type ProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({children}: ProviderProps) => {
  const [theme, setTheme] = React.useState(themes.cvd19);

  const toggleTheme = () => {
    theme === themes.cvd19 ? setTheme(themes.light) : setTheme(themes.cvd19);
  };

  return (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider mapping={mapping} theme={theme}>
          {children}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default AppProvider;
