import React, { useEffect } from 'react';
import { View } from 'react-native';
import GStyles from '../../assets/styles/GeneralStyles';
import CatsRow from '../../components/Cats/CatsRow';
import LikedCatsCards from '../../components/Likes/LikedCatsCard';
import Header from '../../utils/Header';
import { getFaves } from '../../utils/Helper';

const Likes = (props) => {

    const { } = props
    const { flex, bgWhite, pH25, flexRow, alignCenter, flexWrap, justifyBetween } = GStyles


    const getFaveCats = async () => {
        const faves = await getFaves()
        console.log('dd', faves);
    }
    useEffect(() => {
        getFaveCats()
    })

    return (
        <>
            <View style={[flex, bgWhite]}>
                <Header title={'Cats I Like'} />
                <View style={[pH25, flexRow, alignCenter, flexWrap, justifyBetween]}>
                    <LikedCatsCards title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <LikedCatsCards title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <LikedCatsCards title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                    <LikedCatsCards title={'Abyssinian'} img={require('../../assets/images/cat.png')} />
                </View>
            </View>
        </>
    )

}

export default Likes;