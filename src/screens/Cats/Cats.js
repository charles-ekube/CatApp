import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GStyles from '../../assets/styles/GeneralStyles';
import CatsRow from '../../components/Cats/CatsRow';
import { catsSelector, fetchCats } from '../../slices/Cats';
import Header from '../../utils/Header';
import MiniSkeleton from '../../utils/MiniCardSkeleton';


const Cats = (props) => {
    const { } = props
    const { flex, bgWhite, pH25 } = GStyles
    const { cats, loading, } = useSelector(catsSelector)
    // console.log(cats)
    // console.log(cats.length)
    const dispatch = useDispatch()

    const [state, setState] = useState({
        faves: [], liked: false, refreshing: false, selected: null,
    })

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])


    const onRefresh = useCallback(() => {
        dispatch(fetchCats());
    }, [dispatch]);




    const renderCats = () => {
        if (loading) {
            return (
                <MiniSkeleton />
            )
        }
        if (cats && cats.length !== 0) {
            return (cats.map((cat, i) =>
                <View key={cat.id}>
                    <CatsRow title={cat.name} uri={cat?.image?.url} />
                </View>
            )
            )
        }
    }


    return (
        <>
            <View style={[flex, bgWhite]}>
                <Header title={'All Cats'} />
                <View style={[pH25]}>
                    <ScrollView
                        refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={loading} colors={'#000000'}
                            progressBackgroundColor={'#FFFFFF'} />} style={{ height: '100%' }} >
                        {renderCats()}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Cats;
