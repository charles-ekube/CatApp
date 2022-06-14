import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { ms } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import GStyles from '../../assets/styles/GeneralStyles';
import CatsRow from '../../components/Cats/CatsRow';
import { catsSelector, fetchCats } from '../../slices/Cats';
import Header from '../../utils/Header';
import Loading from '../../utils/Loading';
import { MyText } from '../../utils/MyText';

const Cats = (props) => {
    const { } = props
    const { flex, bgWhite, pH25, justifyCenter, alignCenter } = GStyles
    const { cats, loading, hasErrors } = useSelector(catsSelector)
    const dispatch = useDispatch()

    const [state, setState] = useState({
        faves: [], liked: false,
    })

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])


    const renderLoading = () => {
        if (loading) {
            return <Loading />
        }
    }
    const renderErrors = () => {
        if (hasErrors) {
            return <MyText>Has Error</MyText>
        }
    }

    const likeCats = (obj) => {
        const { liked } = state
        console.log(obj)
        // cats.forEach(cat => {
        //     setState({ ...state, liked: true })
        // });
    }

    const renderCats = () => {
        if (cats.length !== 0) {
            return (cats.map(cat =>
                <View key={cat.id}>
                    <CatsRow title={cat.name} uri={cat?.image?.url} img={!cat?.image ? require('../../assets/images/brokenImage.png') : ''}
                        onPress={() => likeCats(cat)} liked={state.liked}
                    />
                </View>
            )
            )
        } else {
            return (
                <View style={[justifyCenter, alignCenter, { borderWidth: 1 }]}>
                    <MyText>No Cats Available</MyText>
                </View>
            )
        }

    }


    return (
        <>
            <View style={[flex, bgWhite]}>
                <Header title={'All Cats'} />
                {renderLoading()}
                <View style={[pH25]}>
                    <ScrollView >
                        {renderCats()}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Cats;
