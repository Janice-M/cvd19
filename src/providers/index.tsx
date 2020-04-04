import React, {Children} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping} from '@eva-design/eva';
import {ThemeContext, themes} from '../themes';

const AppProvider = () => {
  const [theme, setTheme] = React.useState(themes.cvd19);

  const toggleTheme = () => {
    theme === themes.cvd19 ? setTheme(themes.light) : setTheme(themes.cvd19);
  };

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider mapping={mapping} theme={theme}>
          {Children}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default AppProvider;
