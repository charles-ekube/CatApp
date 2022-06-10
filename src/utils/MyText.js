import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';


const MyText = (props) => {
    const { textStyles } = styles;
    return (

        <Text onPress={props.onPress} style={[textStyles, props.style]}>{props.children}</Text>

    )
}


const styles = StyleSheet.create({
    textStyles: {
        // fontFamily: 'Lato-Regular',

        fontSize: ms(16)
    },
});

export { MyText };
