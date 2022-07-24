import React, {useContext} from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants';
import {RectButton, DetailsDesc, TransactionHistory, FocusedStatusBar, CircleButton} from '../components';
import {BotDetailedInfo, PendingWidget, PendingTrans} from '../components/SubInfo'

import { UserContext } from "../helper/Context";
import { PendingTransContext } from "../helper/Context";

const DetailsHeader = ({data, navigation}) => (
  <View style={{width:'100%', height:50}}>

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={0} 
    />

    <View style = {{flexDirection:'row', justifyContent: 'center', zIndex: -1}}>
      <Text style = {{
        fontFamily: FONTS.bold, 
        fontSize: SIZES.midLarge, 
        color: COLORS.white, }}>
          {data.botName}
      </Text>
    </View>

  </View>
)

const style = StyleSheet.create({
  container:{
    padding: SIZES.font,
  }
})


const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>

      <View
        style={{
          position: "absolute",
          zIndex: -1,
          flex: 1,
          alignSelf: 'center',
          height: 900 // TODO: ??
        }}
      >                
        <Image 
          style={{
              alignSelf: 'center',
              flex: 1,
              resizeMode: 'contain'
          }}
          source={ assets.bg02 } />   
      </View>

      <ScrollView style = {style.container}>

        <DetailsHeader data = {data} navigation = {navigation}/>

        <BotDetailedInfo
          botName = {data.botName}
          assetName = {data.assetName}
          baseCurrency = {data.baseCurrency}
          exchangeName = {data.exchangeName}
          profit = {data.profit}
          elapsedTime = {data.elapsedTime}
        />

        {data.pendingTrans && 
        <PendingWidget 
          timeRemaining = {route.params.timer}
          checklist = {data.pendingInfo.checklist}
          transInfo = {data.exchangeName}
        />}


        {data.historyicalRecord && 
        <TransactionHistory 
          transHistory = {data.transHistory}
        />}


      </ScrollView>

    </SafeAreaView>
  );
};

export default Details;