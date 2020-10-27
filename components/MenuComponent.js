import React from 'react'
import { Image, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { DISHES } from '../shared/dishes';


export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {

        const image = () => {
            return (
                <Image style={{
                    borderRadius: 200 / 2,
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: 'black'
                }}
                    source={require('./images/uthappizza.png')} />
            );
        }
        const { navigate } = this.props.navigation;

        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem key={index}
                    leftAvatar={image}
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}>
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                        <ListItem.Chevron />
                    </ListItem.Content>
                </ListItem>
            );
        }


        return (
            <FlatList data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()} />
        );
    }
}