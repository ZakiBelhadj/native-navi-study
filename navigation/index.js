import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { DrawerActions, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

// StackNavigator screens
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Barcode from '../components/Barcode';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';


const StackNavi1 = createStackNavigator(
  {
    Home1: {
      screen: Home1,
      navigationOptions: {
        title: 'List'
      }
    },
    Page1: {
      screen: Page1,
      navigationOptions: {
        title: 'Page 1'
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: 'Page 2'
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        title: 'Page 3'
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        title: 'Page 4'
      }
    },
  },
  {
    initialRouteName: 'Home1',
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{marginRight:30}}
          title="menu"
          >
          <Ionicons name="ios-menu" size={40} color="#333" />
        </TouchableOpacity>
      ),
    }),
  }
)

const StackNavi2 = createStackNavigator(
  {
    Home2: {
      screen: Home2,
      navigationOptions: {
        title: 'Options'
      }
    },
    Page1: {
      screen: Page1,
      navigationOptions: {
        title: 'Page 1'
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: 'Page 2'
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        title: 'Page 3'
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        title: 'Page 4'
      }
    },
  },
  {
    initialRouteName: 'Home2',
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{marginRight:30}}
          title="menu"
          >
          <Ionicons name="ios-menu" size={40} color="#333" />
        </TouchableOpacity>
      )
    }),
  }
)

const StackNavi3 = createStackNavigator(
  {
    Barcode: {
      screen: Barcode,
      navigationOptions: {
        title: 'Barcode'
      }
    },
  },
  {
    initialRouteName: 'Barcode',
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{marginRight:30}}
          title="menu"
          >
          <Ionicons name="ios-menu" size={40} color="#333" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      // headerLeft: (
      //   <TouchableOpacity
      //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      //     style={{marginLeft:30}}
      //     >
      //     <Ionicons name="ios-cog" size={30} color="#fff" />
      //   </TouchableOpacity>
      // )
    }),
  }
)

const TabNavi = createBottomTabNavigator(
  {
    List: StackNavi1,
    Options: StackNavi2,
    Barcode: StackNavi3,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'List') {
          iconName = `ios-apps${focused ? '' : '-outline'}`;
        } else if (routeName === 'Options') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Barcode') {
          iconName = `ios-barcode${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export const DrawerNavi = createDrawerNavigator(
  {
    Home: {
      screen: TabNavi,
    },
    Page1: {
      screen: Page1,
    }
  },
  {
    drawerPosition: 'right',
  }
)
