import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Icon,
} from '@ui-kitten/components';

import {UsersScreen, OrdersScreen, AnotherScreen} from '../screens';

const BottomTab = createBottomTabNavigator();

//icons

//@ts-ignore
const BottomTabBar = ({navigation, state}) => {
  const onSelect = (index: React.ReactText) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <Layout>
      <SafeAreaView>
        <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
          <BottomNavigationTab title="Home" />
          <BottomNavigationTab title="Cvd19" />
          <BottomNavigationTab title="World" />
        </BottomNavigation>
      </SafeAreaView>
    </Layout>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator
    tabBar={(
      props: JSX.IntrinsicAttributes & {navigation: any; state: any},
    ) => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Users" component={UsersScreen} />
    <BottomTab.Screen name="Orders" component={OrdersScreen} />
    <BottomTab.Screen name="Another" component={AnotherScreen} />
  </BottomTab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
