import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ms } from 'react-native-size-matters';
import { MyText } from './MyText';


const Error = (props) => {

    const { error } = props
    const { container, textStyle } = styles

    if (error) {
        return (
            <SafeAreaView style={[container]}>
                < MyText style={[textStyle]} > {error}</MyText >
            </SafeAreaView >
        )
    }

}

export { Error }


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E57373', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        borderRadius: ms(6), zIndex: 3000, top: ms(40), position: 'absolute', elevation: 1,
        left: ms(10), right: ms(10), height: ms(40)
    },
    textStyle: {
        color: '#ffffff', fontSize: ms(16)
    }
})