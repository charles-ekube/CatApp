import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cats from '../screens/Cats/Cats';
import Likes from '../screens/Likes/Likes';
import MyTabBar from './TabBarComponent';



const Tab = createBottomTabNavigator();

function Tabs(props) {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{ lazy: true, }}>
            <Tab.Screen name="Cats" component={Cats} options={{ headerShown: false }} />
            <Tab.Screen name="Likes" component={Likes} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default Tabs