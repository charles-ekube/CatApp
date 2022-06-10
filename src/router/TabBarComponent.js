import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ms } from 'react-native-size-matters';
import colors from '../../colors';
import GStyles from '../assets/styles/GeneralStyles';
import { MyText } from '../utils/MyText';





function MyTabBar({ state, descriptors, navigation }) {

    const { tabBarContainer, inActiveText, activeText, tabIcon, textSize, tabIconInActive } = styles
    const { justifyCenter, alignCenter, flexRow, flex } = GStyles

    const imageObj = {
        cats: {
            inActive: require('../assets/images/icons/catsActive.png'),
            active: require('../assets/images/icons/catsActive.png'),
        },
        likes: {
            inActive: require('../assets/images/icons/inActiveLike.png'),
            active: require('../assets/images/icons/likesActive.png'),
        }
    }

    return (
        <View style={[tabBarContainer, flexRow, alignCenter, justifyCenter]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[flex, alignCenter, justifyCenter]}
                    >
                        <Image source={isFocused ? imageObj[label.toLowerCase()].active :
                            imageObj[label.toLowerCase()].inActive} resizeMode={'contain'} style={[!isFocused ? tabIconInActive : '', tabIcon]}

                        />
                        <MyText style={[isFocused ? activeText : inActiveText, textSize]}>
                            {label}
                        </MyText>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default MyTabBar


const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.88)', paddingTop: ms(20), paddingBottom: ms(30), paddingHorizontal: ms(20),
        borderTopWidth: 0.5, borderTopColor: 'rgba(0, 0, 0, 0.1)',
    },
    activeText: {
        color: colors.headerBlack
    },
    inActiveText: {
        color: colors.headerBlack, opacity: 0.3,
    },
    tabIcon: {
        width: ms(20), height: ms(20), marginBottom: ms(5)
    },
    tabIconInActive: {
        opacity: 0.3,
    },
    textSize: {
        fontSize: ms(13),
    }

})
