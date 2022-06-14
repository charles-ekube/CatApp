import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MyText } from '../../utils/MyText';
import GStyles from '../../assets/styles/GeneralStyles';
import { ms } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

const CatsRow = (props) => {

    const { title, img, uri, onPress, liked } = props
    const { flexRow, alignCenter, justifyBetween, mb20 } = GStyles
    const { imageStyle, iconStyle, imageContainer } = styles
    const [state, setState] = useState({
        loading: false,
    })

    const renderImage = () => {
        return (
            <View style={[imageContainer]}>
                {/* <Image source={ uri || img} style={[imageStyle]} /> */}
                <FastImage source={{ uri }} style={[imageStyle]}
                    defaultSource={require('../../assets/images/brokenImage.png')} resizeMode="cover" />
            </View>

        )
    }

    const renderLikeIcon = () => {
        if (!liked) {
            return (
                <FastImage source={require('../../assets/images/icons/inActiveLike.png')} style={[iconStyle]}
                    defaultSource={require('../../assets/images/icons/inActiveLike.png')} resizeMode="contain" />
            )
        } else {
            return (
                <FastImage source={require('../../assets/images/icons/liked.png')} style={[iconStyle]}
                    defaultSource={require('../../assets/images/icons/liked.png')} resizeMode="contain" />
            )
        }
    }


    return (
        <View style={[flexRow, alignCenter, justifyBetween, mb20]} >
            <View style={[flexRow, alignCenter]}>
                {renderImage()}
                <MyText>{title}</MyText>
            </View>
            <TouchableOpacity onPress={onPress}>
                {renderLikeIcon()}
            </TouchableOpacity>
        </View>
    )
}

export default CatsRow;

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%', height: '100%', borderRadius: ms(10)
    },
    iconStyle: {
        height: ms(20), width: ms(20), borderRadius: ms(6),
    },
    imageContainer: {
        height: ms(40), width: ms(40), borderRadius: ms(10), marginRight: ms(15),
    }
});