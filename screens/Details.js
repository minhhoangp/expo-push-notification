import React, {useContext} from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants';
import {RectButton, DetailsDesc, TransactionHistory, FocusedStatusBar, CircleButton} from '../components';
import {BotDetailedInfo, PendingWidget, PendingTrans} from '../components/SubInfo'

import { UserContext } from "../helper/Context";
import { PendingTransContext } from "../helper/Context";

const DetailsHeader = ({data, navigation}) => (
  <View style={{width:'100%', height:100}}>

    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: 120 }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10} 
    />

  </View>
)


const Details = ({route, navigation}) => {
  const {data} = route.params;
  console.log("some thing " + data.pendingTrans)

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>

        <PendingTrans pendingStatus = {data.pendingTrans}/>

        <DetailsHeader data = {data} navigation = {navigation}/>

        <BotDetailedInfo
          botName = {data.botName}
          assetName = {data.assetName}
          exchangeName = {data.exchangeName}
          profit = {data.profit}
          elapsedTime = {data.elapsedTime}
        />

        {data.pendingTrans && 
        <PendingWidget 
          timeRemaining = {data.botName}
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