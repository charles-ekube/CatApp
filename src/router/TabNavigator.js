import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cats from '../screens/Cats/Cats';
import Likes from '../screens/Likes/Likes';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Cats" component={Cats} />
            <Tab.Screen name="Likes" component={Likes} />
        </Tab.Navigator>
    );
}

export default Tabs