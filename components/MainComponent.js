import React from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { SafeAreaView, View, Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Constants } from 'react-native-unimodules';
import Home from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import Test from './TestComponent';

const Stack = createStackNavigator();
const NewMenuNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu"
             screenOptions={{headerStyle: {
                 backgroundColor: '#512DA8'
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
                 color: '#fff'
             }}}>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Dishdetail" component={Dishdetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
/*const MenuNavigator = createStackNavigator(
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
);*/

/*const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
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
});*/

const Drawer = createDrawerNavigator();

/*
   <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
*/
const NewMainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{ backgroundColor: '#D1C4E9' }}>
                <Drawer.Screen name='Home' options={{ drawerLabel: 'hi' }}
                    component={Home} />
                <Drawer.Screen name='Menu'
                    component={Menu} />
            </Drawer.Navigator>
        </NavigationContainer>);
}

/*const MainNavigator = createDrawerNavigator({
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
})*/

const AppMenuNavigator = createAppContainer(NewMenuNavigator)
const AppMainNavigator = createAppContainer(NewMainNavigator);

export default function Main() {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <NewMenuNavigator />
        </View>
    );
}