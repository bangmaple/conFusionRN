import React from 'react';
import { Text, View } from 'react-native';



export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        );
    }
}