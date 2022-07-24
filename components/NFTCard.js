import { View, Image, Text, StyleSheet } from 'react-native';
import React, { useState, useRef, useEffect, useContext, createContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NavigationContext} from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { RectButton, CircleButton } from './Button';
import { BotInfo, SubInfo, PendingTrans } from './SubInfo';

import { PendingTransContext } from '../helper/Context';
import { BlurView } from "expo-blur";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});


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
          borderRadius: SIZES.font,
          marginBottom: SIZES.extraLarge,
          margin: SIZES.base,
          ...SHADOWS.dark,
          overflow: 'hidden'
        }}>
          <BlurView
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          >

            <BotInfo 
                botName = {data.botName}
                assetName = {data.assetName}
                exchangeName = {data.exchangeName}
                profit = {data.profit}
                elapsedTime = {data.elapsedTime}
                baseCurrency = {data.baseCurrency}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: SIZES.base
              }}
            >

              <PendingTrans pendingStatus = {data.pendingTrans}/>
              
              
              <RectButton
                  fontSize={SIZES.font}
                  handlePress={() => navigation.navigate("Details", { data, timer })}
              />

            </View>
          </BlurView>
        </View>
    </PendingTransContext.Provider>

  )
}

export default NFTCard
