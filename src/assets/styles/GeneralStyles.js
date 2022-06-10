
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import colors from '../../../colors';


const styles = StyleSheet.create({
    HeaderTextColor: {},
    bgWhite: {
        backgroundColor: colors.white
    },
    flex: {
        flex: 1,
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    justifyCenter: {
        justifyContent: 'center',
    },

    alignCenter: {
        alignItems: 'center',
    },
    flexRow: {
        display: 'flex', flexDirection: 'row',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    textH6Style: {
        fontSize: ms(13),
    },
    mb20: {
        marginBottom: ms(20),
    },
    mb25: {
        marginBottom: ms(25),
    },
    p25: {
        padding: ms(25),
    },
    pH25: {
        paddingHorizontal: ms(25),
    },

    mTop40: {
        marginTop: ms(44),
    },



});

export default styles;