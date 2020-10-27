import React from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { SafeAreaView, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Constants } from 'react-native-unimodules';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './HomeComponent';

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator({
    Home: {screen: Home}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
})

const AppMenuNavigator = createAppContainer(MenuNavigator)
const AppMainNavigator = createAppContainer(MainNavigator);

export default function Main() {
    return (
        <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
            <AppMainNavigator />
        </SafeAreaView>
    );
}