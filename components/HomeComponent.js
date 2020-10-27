import React from 'react';
import { Image, Text, View } from 'react-native';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

function RenderItem(props) {
    const item = props.item;
    if (item != null) {
        return (
            <Card>
                <Card.FeaturedTitle>
                    {item.name}
                </Card.FeaturedTitle>
                <Card.FeaturedSubtitle>
                    {item.designation}
                </Card.FeaturedSubtitle>
                <Card.Image source={require('./images/uthappizza.png')} />
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    } else {
        return (
            <View>
                <Text>Currently null</Text>
            </View>
        );
    }
}


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {
        return (
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />

            </ScrollView>
        );
    }
}