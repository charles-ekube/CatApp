import React, { useEffect } from 'react';
import { View, StyleSheet,  Dimensions, Animated, Easing } from 'react-native';
import { ms } from 'react-native-size-matters';


const SCREEN_HEIGHT = Dimensions.get('screen').height

export default function Loading(props) {
    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => startImageRotateFunction());
    };
    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const { containerStyles, imgStyle, } = styles;
    const { wrapperStyles } = props;

    useEffect(() => {
        startImageRotateFunction()
    }, [])


    return (
        <View style={[containerStyles, { height: SCREEN_HEIGHT }, wrapperStyles]}>
                <Animated.Image source={require('../assets/images/loading.png')} resizeMode="contain" style={[imgStyle, { transform: [{ rotate: rotateData }] }]} />
        </View>
    );

}


const styles = StyleSheet.create({
    containerStyles: {
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000, top: 0,
    },
    imgStyle: {
        width: ms(40),
        height: ms(40),
    },
});

export { Loading };
