import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import Sidebar from './Sidebar';
import { TimeTableScreen } from '../../screens/TimeTable';
import { LunchScreen } from '../../screens/LunchScreen';

const DrawerNavigator = createDrawerNavigator(
  {
    TimeTableScreen : {
      screen : TimeTableScreen,
      navigationOptions : {
        title: "시간표",
      }
    },
    LunchScreen : {
      screen : LunchScreen,
      navigationOptions : {
        title: "오늘의 점심",
      }
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />,

    drawerWidth: Dimensions.get('window').width * 0.7,

    contentOptions: {
      activeBackgroundColor: '#EEE',
      activeTintColor: '#000000',
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemstyle: {
        borderRadius: 4,
      }
    }
  }
);

const Drawer = createAppContainer(DrawerNavigator);

export default function DrawerNavigation() {
  return (
    <Drawer/>
  );
};