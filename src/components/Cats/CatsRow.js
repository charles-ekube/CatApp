import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MyText } from '../../utils/MyText';
import GStyles from '../../assets/styles/GeneralStyles';
import { ms } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

const CatsRow = (props) => {

    const { title, img, uri } = props
    const { flexRow, alignCenter, justifyBetween, mb20 } = GStyles
    const { imageStyle, iconStyle } = styles
    const [state, setState] = useState({
        loading: false, liked: false,
    })

    const renderImage = () => {
        return (
            
      
            <Image source={ uri || img  } style={[imageStyle]}/>
        )
    }

    const renderLikeIcon = () => {
        const { liked } = state
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
            <TouchableOpacity>
                {renderLikeIcon()}
            </TouchableOpacity>
        </View>
    )
}

export default CatsRow;

const styles = StyleSheet.create({
    imageStyle: {
        height: ms(40), width: ms(40), borderRadius: ms(10), marginRight: ms(15),
    },
    iconStyle: {
        height: ms(20), width: ms(20), borderRadius: ms(6),
    },
});