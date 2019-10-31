import Intro from '../screen/Intro';
import React from 'react';
import Temp from '../screen/Temp';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfig = {
  Intro: {
    screen: Intro,
    path: 'intro',
  },
  Temp: {
    screen: Temp,
    path: 'temp',
  },
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  defaultNavigationOptions: ({ navigation, screenProps }): object => {
    const { theme } = screenProps;
    return {
      headerTitle: (
        <Text
          style={{
            fontSize: 18,
            color: theme.fontColor,
          }}
        >
          {navigation.state.routeName}
        </Text>
      ),
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTitleStyle: { color: theme.fontColor },
      headerTintColor: theme.tintColor,
    };
  },
  // mode: 'card',
  // headerMode: 'screen',
  // headerMode: 'none',
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default RootStackNavigator;
