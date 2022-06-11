import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Animated, Easing } from 'react-native';
import GeneralStyles from '../assets/styles/GeneralStyles';
import colors from '../../colors';
import { MyText } from './MyText';
import {  ms } from 'react-native-size-matters';


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
    const { containerStyles, imgStyle, container, imgContainerStyle } = styles;
    const { textBrandColor, textH3Style, textBold, textH5Style, textDarkBlue, textCenter, textBlackTint } = GeneralStyles;
    const { wrapperStyles } = props;

    useEffect(() => {
        startImageRotateFunction()
        // return () => {

        // }
    }, [])

    const renderText = () => {
        if (props.message) {
            return (
                <MyText style={[textH5Style, textBlackTint, textCenter, { marginTop: ms(10), paddingHorizontal: ms(5) }]}>{props.message}</MyText>
            )
        }
    }

    return (
        <View style={[containerStyles, { height: SCREEN_HEIGHT }, wrapperStyles]}>
            <View style={container}>
                <Animated.Image source={require('../assets/images/logo/logo.png')} resizeMode="contain" style={[styles.imgStyle, { transform: [{ rotate: rotateData }] }]} />
                {renderText()}
            </View>
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
        backgroundColor: 'rgba(0,0,0,.5)',
        zIndex: 2000, top: 0,
        // elevation: 2
    },
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white,
        height: ms(150), width: ms(150), borderRadius: ms(20), elevation: 3
    },
    imgStyle: {
        width: ms(40),
        height: ms(40),
    },
    imgContainerStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { Loading };
