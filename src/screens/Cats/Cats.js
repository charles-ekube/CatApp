import React from 'react';
import { View } from 'react-native';
import GStyles from '../../assets/styles/GeneralStyles';
import CatsRow from '../../components/Cats/CatsRow';
import Header from '../../utils/Header';

const Cats = (props) => {
    const { } = props
    const { flex, bgWhite, pH25 } = GStyles
    return (
        <>
            <View style={[flex, bgWhite]}>
                <Header title={'All Cats'} />
                <View style={[pH25]}>
                    <CatsRow title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <CatsRow title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <CatsRow title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <CatsRow title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <CatsRow title={'Abyssinian'} img={require('../../assets/images/cat.png')} />

                </View>
            </View>
        </>
    )
}

export default Cats;