import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GStyles from '../../assets/styles/GeneralStyles';
import CatsRow from '../../components/Cats/CatsRow';
import { catsSelector, fetchCats } from '../../slices/Cats';
import Header from '../../utils/Header';
import { MyText } from '../../utils/MyText';

const Cats = (props) => {
    const { } = props
    const { flex, bgWhite, pH25 } = GStyles
    const { cats, loading, hasErrors } = useSelector(catsSelector)
    const dispatch = useDispatch()
    console.log('Cats: ', cats);

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])

    const renderCats = () => {
        if (loading) return <MyText>Loading....</MyText>
        if (hasErrors) return <MyText>Has Error</MyText>

        return cats.map(cat =>
            
            <View key={cat.id}>
                <CatsRow title={cat.name} uri={cat.image?.url} img={!cat?.image ? require('../../assets/images/cat.png') : ''} key={cat.id} />
            </View>
        )
    }


    return (
        <>
            <View style={[flex, bgWhite]}>
                <Header title={'All Cats'} />
                <View style={[pH25]}>
                    <ScrollView>
                        {renderCats()}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Cats;