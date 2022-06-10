import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MyText } from './MyText';
import GStyles from '../assets/styles/GeneralStyles';

const Header = (props) => {
    const { title } = props
    const { bgWhite, p25, mTop40 } = GStyles
    return (
        <>
            <View style={[bgWhite, p25, mTop40]}>
                <MyText>{title}</MyText>
            </View>
        </>
    )
}
export default Header;

