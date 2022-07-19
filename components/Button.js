import { View, Text } from 'react-native';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, FONTS} from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...SHADOWS.light,
                ...props
            }}

            onPress = {handlePress}
        >


        </TouchableOpacity>
    )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props
            }}
            onPress = {handlePress}
        >

            <Text
                style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: "center",
                }}
            >
                VIEW BOT
            </Text>

        </TouchableOpacity>
    )
}