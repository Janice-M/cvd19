import React from 'react';
import {ImageProps, ImageStyle, StyleSheet} from 'react-native';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import AppProvider from './providers';

const HeartIcon = (style: ImageStyle): React.ReactElement<ImageProps> => (
  <Icon {...style} name="heart" />
);

const App = (): React.ReactFragment => {
  const AppLayout = () => (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to UI Kitten 😻
      </Text>
      <Text style={styles.text} category="s1">
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by simply changing an import
      </Text>
      <Button style={styles.likeButton} icon={HeartIcon}>
        LIKE
      </Button>
    </Layout>
  );

  return (
    <>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default App;
