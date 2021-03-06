import React from 'react'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform, SafeAreaView } from 'react-native';
import { Constants } from 'react-native-unimodules';
import Home from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUsComponent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Menu"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Dishdetail" component={Dishdetail} />
        </Stack.Navigator>
    );
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff'
        }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

const AboutUsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff'
        }}>
            <Stack.Screen name="AboutUs" component={AboutUs} />
        </Stack.Navigator>
    );
}

const ContactUsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff'
        }}>
            <Stack.Screen name="ContactUs" component={ContactUs} />
        </Stack.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{ backgroundColor: '#D1C4E9' }}>
                <Drawer.Screen name='Home' options={{
                    title: 'Home',
                    drawerLabel: 'Home'
                }} component={HomeNavigator} />
                <Drawer.Screen name="AboutUs" options={{
                    title: 'AboutUs',
                    drawerLabel: 'About Us'
                }} component={AboutUsNavigator} />
                <Drawer.Screen name='Menu' options={{
                    title: 'Menu',
                    drawerLabel: 'Menu'
                }} component={MenuNavigator} />

                <Drawer.Screen name="ContactUs" options={{
                    title: 'ContactUs',
                    drawerLabel: 'Contact Us'
                }} component={ContactUsNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default function Main() {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <MainNavigator />
        </View>
    );
}