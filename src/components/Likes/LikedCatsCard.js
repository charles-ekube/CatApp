import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MyText } from '../../utils/MyText';
import GStyles from '../../assets/styles/GeneralStyles';
import { ms } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

const LikedCatsCards = (props) => {

    const { title, img } = props
    const { flexRow, alignCenter, justifyBetween, mb25 } = GStyles
    const { imageStyle, iconStyle, textContainer } = styles

    const renderImage = () => {
        return (
            <FastImage source={img} style={[imageStyle]}
                defaultSource={require('../../assets/images/cat2.png')} resizeMode="contain" />
        )
    }

    const renderLikeIcon = () => {
        return (
            <FastImage source={require('../../assets/images/icons/liked.png')} style={[iconStyle]}
                defaultSource={require('../../assets/images/icons/liked.png')} resizeMode="contain" />
        )

    }

    return (
        <View style={[mb25]}>
            <View>
                {renderImage()}
            </View>
            <View style={[flexRow, alignCenter, justifyBetween, textContainer]}>
                <MyText>{title}</MyText>
                {renderLikeIcon()}
            </View>
        </View>
    )
}

export default LikedCatsCards;

const styles = StyleSheet.create({

    imageStyle: {
        height: ms(150), width: ms(150),
    },
    iconStyle: {
        height: ms(20), width: ms(20), borderRadius: ms(6),
    },
    textContainer: {
        marginTop: ms(10),
    }
});