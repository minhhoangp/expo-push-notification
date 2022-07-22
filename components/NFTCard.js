import { View, Image, Text } from 'react-native';
import React, { useState, useRef, useEffect, useContext, createContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NavigationContext} from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { RectButton, CircleButton } from './Button';
import { BotInfo, SubInfo, PendingTrans } from './SubInfo';

import { PendingTransContext } from '../helper/Context';


const NFTCard = ({data}) => {
  const navigation = useNavigation();
  
  const [timer, setTimer] = useState(data.pendingTrans ? data.pendingInfo.timeRemaining : 0);

  const intervalRef = useRef(); // Add a ref to store the interval id

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Add a listener to `timeLeft`
  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [timer]);


  return (

    <PendingTransContext.Provider value={{timer}}>

      <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
      }}>

        <View style={{ width: "100%", height: 100}}>
          <Image
              source={data.image}
              resizeMode="cover"
              style={{
                width: "80%",
                height: "150%",
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
                marginLeft: 35
              }}
          />


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

        <PendingTrans pendingStatus = {data.pendingTrans}/>
        
        
        <RectButton
            right={10} bottom={10}
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
        />

        </View>

      </View>

    </PendingTransContext.Provider>

  )
}

export default NFTCard
