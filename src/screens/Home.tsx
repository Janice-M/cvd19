import React from 'react';
import {Layout, Text} from '@ui-kitten/components';

const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Stay Home Please!</Text>
    </Layout>
  );
};

export default HomeScreen;
