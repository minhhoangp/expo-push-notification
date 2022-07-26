import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const HomeHeader = ({}) => {
  return (
    <View
      style={{
        padding: SIZES.font,
      }}
    >
      <View style={{ }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.regular,
            color: COLORS.white,
          }}
        >
          Welcome to Trading Alert 🤙🤖💸🤑
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Get notified about every trading opportunity
        </Text>
      </View>

    </View>
  );
};

export default HomeHeader