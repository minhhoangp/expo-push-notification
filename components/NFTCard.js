import { View, Text } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { RectButton, CircleButton } from './Button';
import { BotInfo, SubInfo, PendingTrans } from './SubInfo';

const NFTCard = ({data}) => {
  const navigation = useNavigation();

  //console.log(data.pendingTrans)

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>

      <View style={{ width: "100%", height: 100}}>
        <BotInfo 
          botName = {data.botName}
          assetName = {data.assetName}
          exchangeName = {data.exchangeName}
          profit = {data.profit}
          elapsedTime = {data.elapsedTime}
        />
      </View>

      <View
        style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <PendingTrans pendingTrans = {data.pendingTrans}/>
        <RectButton
            right={10} bottom={10}
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
        />

      </View>

    </View>
  )
}

export default NFTCard