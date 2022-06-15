import React, { useState } from 'react';
import { View } from 'react-native';
import GStyles from '../assets/styles/GeneralStyles';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ms } from 'react-native-size-matters';


const MiniSkeleton = () => {

    const { justifyBetween, alignCenter, flexRow, mb25 } = GStyles;

    return (
        <SkeletonPlaceholder>
            <View style={[flexRow, alignCenter, justifyBetween, mb25]} >
                <View style={[flexRow, alignCenter]}>
                    <View style={{ height: ms(40), width: ms(40), borderRadius: ms(10) }} />
                    <View style={{ marginLeft: ms(15), width: ms(200), height: ms(20), borderRadius: 4 }} />
                </View>
                <View style={{ height: ms(20), width: ms(20), borderRadius: ms(50) }} />
            </View>
            <View style={[flexRow, alignCenter, justifyBetween, mb25]} >
                <View style={[flexRow, alignCenter]}>
                    <View style={{ height: ms(40), width: ms(40), borderRadius: ms(10) }} />
                    <View style={{ marginLeft: ms(15), width: ms(200), height: ms(20), borderRadius: 4 }} />
                </View>
                <View style={{ height: ms(20), width: ms(20), borderRadius: ms(50) }} />
            </View>
            <View style={[flexRow, alignCenter, justifyBetween, mb25]} >
                <View style={[flexRow, alignCenter]}>
                    <View style={{ height: ms(40), width: ms(40), borderRadius: ms(10) }} />
                    <View style={{ marginLeft: ms(15), width: ms(200), height: ms(20), borderRadius: 4 }} />
                </View>
                <View style={{ height: ms(20), width: ms(20), borderRadius: ms(50) }} />
            </View>
        </SkeletonPlaceholder>
    )
}

export default MiniSkeleton