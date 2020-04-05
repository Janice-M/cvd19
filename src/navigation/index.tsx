import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
} from '@ui-kitten/components';
import {HomeScreen, CvdScreen, InfoScreen} from '../screens';
import {Icon} from '../components';

const BottomTab = createBottomTabNavigator();

//@ts-ignore
const BottomTabBar = ({navigation, state}) => {
  const onSelect = (index: React.ReactText) => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
    <Layout>
      <SafeAreaView>
        <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
          <BottomNavigationTab title="Home" icon={Icon.Home} />
          <BottomNavigationTab title="Cvd-19" icon={Icon.Virus} />
          <BottomNavigationTab title="Info" icon={Icon.Stats} />
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
    <BottomTab.Screen name="Home" component={HomeScreen} />
    <BottomTab.Screen name="Cvd19" component={CvdScreen} />
    <BottomTab.Screen name="Info" component={InfoScreen} />
  </BottomTab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
