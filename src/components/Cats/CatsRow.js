import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MyText } from '../../utils/MyText';
import GStyles from '../../assets/styles/GeneralStyles';
import { ms } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import { setFaves } from '../../utils/Helper';

const CatsRow = (props) => {

    const { title, uri, onPress, isLiked } = props
    const { flexRow, alignCenter, justifyBetween, mb20 } = GStyles
    const { imageStyle, iconStyle, imageContainer } = styles
    const [state, setState] = useState({
        loading: false, index: '', faves: [], favorites: []
    })

    // const selectedCat = faves.find(item => item.id === obj.id)
    // const getCat = () => {
    //     // const { faves } = state
    //     // let faveCats
    //     // console.log(obj)
    //     // const newArray = faves.push(obj)
    //     // console.log(faves)
    //     // const selectedCat = faves.find(item => item.id === obj.id)
    //     // console.log('dd', selectedCat);
    //     // setState({ ...state, selected: selectedCat })
    //     // if (selectedCat) {
    //     //     faveCats = faves.filter(item => item.name !== obj.name);
    //     // } else {
    //     //     faveCats = [...favorites, obj]
    //     // }
    //     const { faves, favorites } = state
    //     let faveCats;
    //     if()
    // }


    // let index = cats.find(item => item.id === cat.id);
    // console.log(index)

    // const toggleFave = () => {
    //     let newFaveCats;
    //     if (index) newFaveCats = cats.filter(item => item.name !== cat.name);
    //     else newFaveCats = [...cats, cat];
    //     console.log(newFaveCats)
    //     const newArray = state.favorites.push(newFaveCats)
    //     // setFaves(newFaveCats);
    //     // console.log(state.favorites)

    // }

    // const toggleLike = () => {
    //     const { faves, favorites } = state
    //     let faveCats;
    //     let newArray;
    //     if (selectedCat) {
    //         faveCats = faves.filter(item => item.name !== cat.name);
    //     } else {
    //         faveCats = [...favorites, cat]
    //         faveCats.map(item => {
    //             newArray = faves.push(item)
    //             console.log()
    //         })
    //         // const newArray = favorites.push(cat);
    //         // console.log(faveCats)
    //         setFaves(faves);
    //     }
    //     setState((prevState) => ({ ...prevState, favorites: faveCats }))
    //     // console.log('me', favorites)
    // }


    const renderImage = () => {
        return (
            <View style={[imageContainer]}>
                <FastImage source={!uri ? require('../../assets/images/brokenImage.png') : { uri }} style={[imageStyle]}
                    defaultSource={require('../../assets/images/brokenImage.png')} resizeMode="cover" />
            </View>

        )
    }

    const renderLikeIcon = () => {
        if (isLiked) {
            return (
                <FastImage source={require('../../assets/images/icons/liked.png')} style={[iconStyle]}
                    defaultSource={require('../../assets/images/icons/liked.png')} resizeMode="contain" />
            )
        } else {
            return (

                <FastImage source={require('../../assets/images/icons/inActiveLike.png')} style={[iconStyle]}
                    defaultSource={require('../../assets/images/icons/inActiveLike.png')} resizeMode="contain" />
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