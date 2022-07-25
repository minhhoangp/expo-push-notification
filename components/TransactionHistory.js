import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

import { BlurView } from "expo-blur";

const style = StyleSheet.create({
  
  completeContainer:{
    borderRadius: 10,
    marginBottom: SIZES.font,
    overflow: "hidden"
  },

  completeContract1:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  completeContract2:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  single:{
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  singleContainer:{
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: SIZES.font,
    overflow: "hidden",    
  },

  rejectContainer:{
    borderRadius: 10,
    marginBottom: SIZES.font,
    overflow: "hidden"
  },

  reject:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  widgetTitle:{
    fontFamily: FONTS.semiBold, 
    fontSize: SIZES.medium, 
    color: COLORS.white, 
    marginBottom: SIZES.base,
    marginTop: SIZES.small,
  },

  historyText:{
    color: COLORS.white,
  },

  rejectText:{
    color: COLORS.white,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },

  redWrapper:{
    padding: SIZES.xs, 
    backgroundColor: COLORS.red, 
    borderRadius: SIZES.base
  },

  greenWrapper:{
    padding: SIZES.xs, 
    backgroundColor: COLORS.green, 
    borderRadius: SIZES.base
  },

  tableTitle:{
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginLeft: SIZES.extraLarge
  }
})


const Item = ({data}) => {

  var wrapperTextStyle1 = style.greenWrapper 
  var wrapperTextStyle2 = style.greenWrapper 
  if (data.contract1 == 'sell'){ wrapperTextStyle1 = style.redWrapper }
  if (data.contract2 == 'sell'){ wrapperTextStyle2 = style.redWrapper }

  if (data.type == 'single'){

    return (
      <View style = {style.singleContainer}>
        <BlurView
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <View style={style.single}>

            <Text style={style.historyText}>{data.time1}</Text>
            <View style={wrapperTextStyle1}><Text style={style.historyText}>{data.contract1}</Text></View>
            <Text style={style.historyText}>{data.price1}</Text>
            <Text style={style.historyText}>{data.position1}</Text>
            <Text style={style.historyText}>-${data.price1*data.position1}</Text>  

          </View>
        </BlurView>
      </View>
    )

  } else if (data.type == 'complete'){

    return (
      <View style={style.completeContainer}>
        <BlurView
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <View style = {style.completeContract1}>
            <Text style={style.historyText}>{data.time1}</Text>
            <View style={wrapperTextStyle1}><Text style={style.historyText}>{data.contract1}</Text></View>
            <Text style={style.historyText}>{data.price1}</Text>
            <Text style={style.historyText}>{data.position1}</Text>
            <Text style={style.historyText}>+${data.price1*data.position1}</Text>  
          </View>

          <View style = {style.completeContract2}>
            <Text style={style.historyText}>{data.time2}</Text>
            <View style={wrapperTextStyle2}><Text style={style.historyText}>{data.contract2}</Text></View>
            <Text style={style.historyText}>{data.price2}</Text>
            <Text style={style.historyText}>{data.position2}</Text>
            <Text style={style.historyText}>-${data.price2*data.position2}</Text>     
          </View>
        </BlurView>
      </View>
    )

  } else {

    return (
      <View style={style.rejectContainer}>
        <BlurView
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <View style={style.reject}>
            <Text style={style.rejectText}>{data.time1}</Text>
            <View style={wrapperTextStyle1}><Text style={style.rejectText}>{data.contract1}</Text></View>
            <Text style={style.rejectText}>{data.price1}</Text>
            <Text style={style.rejectText}>{data.position1}</Text>
            <Text style={style.rejectText}>${data.price1*data.position1}</Text>  
          </View>
        </BlurView>
      </View>
    )

  }
} 

const TransactionHistory = ({transHistory}) => {
  return (
    <React.Fragment>
      
      <Text style = {style.widgetTitle}>Past Transactions</Text>

      {/* <View style = {style.tableTitle}>
        <Text style={style.historyText}>Time</Text>
        <Text style={style.historyText}>Side</Text>
        <Text style={style.historyText}>Price</Text>
        <Text style={style.historyText}>Unit</Text>
        <Text style={style.historyText}>Amount</Text>
      </View> */}

      {<FlatList
        data={transHistory}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3}}
      />}

    </React.Fragment>
  )
}

export default TransactionHistory