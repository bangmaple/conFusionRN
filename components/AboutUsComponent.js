import React, { useState } from 'react'
import { Image, Text, View } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { LEADERS } from '../shared/leaders';


const RenderOurHistory = () => {
    return (
        <Card>
            <Card.Title>Our History</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
                Started in 2010, Ristorante con Fusion
                quickly established itself as a culinary icon
                par excellence in Hong Kong. With its unique brand
                of world fusion cuisine that can be found nowhere
                else, it enjoys patronage from the A-list clientele
                in Hong Kong.  Featuring four of the best three-star
                Michelin chefs in the world, you never know what will
                arrive on your plate the next time you visit us.
        </Text>
            <Text style={{ marginBottom: 10 }}>
                The restaurant traces its humble beginnings to The Frying Pan,
                a successful chain started by our CEO, Mr. Peter Pan, that featured
                for the first time the world's best cuisines in a pan.
        </Text>
        </Card>
    );
}

const RenderCorporateLeadership = () => {
    const [leaders] = useState(LEADERS);
    return (
        <Card>
            <Card.Title>
                Corporate Leadership
        </Card.Title>
            <Card.Divider />
            <RenderLeaders leaders={leaders} />
        </Card>
    );
}

const renderEachLeader = ({ item, index }) => {
    return (
        <ListItem key={index}>
            <Avatar rounded source={{uri: 'https://www.flaticon.com/svg/static/icons/svg/147/147144.svg'}} iconStyle={{left: true}}/>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{ color: 'gray' }}>
                    {item.description}
                </ListItem.Subtitle>
                <ListItem.Chevron />
            </ListItem.Content>
        </ListItem>
    );
}

const RenderLeaders = ({ leaders }) => {
    return (
        <FlatList data={leaders} renderItem={renderEachLeader}
            keyExtractor={leader => leader.id.toString()} />
    );
}

export default function AboutUs() {
    return (
        <View style={{ flex: 1 }}>
            <RenderOurHistory />
            <RenderCorporateLeadership />
        </View>
    );
}