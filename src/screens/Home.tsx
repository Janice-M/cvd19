import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {InfectionPie} from '../components';

const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Stay Home Please!</Text>
      <InfectionPie />
    </Layout>
  );
};

export default HomeScreen;
