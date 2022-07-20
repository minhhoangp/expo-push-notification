import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants';
import {RectButton, DetailsDesc, TransactionHistory, FocusedStatusBar, CircleButton} from '../components';
import {BotDetailedInfo, PendingWidget } from '../components/SubInfo'

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

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >

        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />

      </View>

      <FlatList
          data={data.transHistory}
          renderItem={({ item }) => <TransactionHistory transHistory={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: SIZES.extraLarge * 3,
          }}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader data = {data} navigation = {navigation}/>
              <BotDetailedInfo
                botName = {data.botName}
                assetName = {data.assetName}
                exchangeName = {data.exchangeName}
                profit = {data.profit}
                elapsedTime = {data.elapsedTime}
              />

              <PendingWidget 
                timeRemaining = {data.botName}
                checklist = {data.assetName}
                transInfo = {data.exchangeName}
              />

            </React.Fragment>
          )}
      />

    </SafeAreaView>
  );
};

export default Details;