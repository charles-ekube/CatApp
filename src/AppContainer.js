import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import GStyles from './assets/styles/GeneralStyles';
import { catsSelector } from './slices/Cats';
import { Error } from './utils/Error';


const AppContainer = (props) => {

    const { flex } = GStyles
    const { hasErrors, errors } = useSelector(catsSelector)


    const renderErrors = () => {
        if (hasErrors) {
            // console.log('jfj', errors)
            return <Error error={errors.message} />
        }
    }

    return (
        <View style={[flex, { width: '100%', height: '100%' }]}>
            {renderErrors()}
            {props.children}
        </View>
    )

}

export default AppContainer;