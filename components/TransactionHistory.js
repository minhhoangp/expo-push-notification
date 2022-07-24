import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

const style = StyleSheet.create({
  
  complete:{
    borderRadius: 10,
    marginBottom: SIZES.font,
  },

  completeContract1:{
    backgroundColor: '#ffcc99',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  completeContract2:{
    backgroundColor: '#00FF00',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  single:{
    backgroundColor: '#00FF00',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    marginBottom: SIZES.font,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  reject:{
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 15,
    marginBottom: SIZES.font,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  widgetTitle:{
    fontFamily: FONTS.semiBold, 
    fontSize: SIZES.medium, 
    color: COLORS.primary, 
    marginBottom: SIZES.base,
    marginTop: SIZES.small,


  }

})



const Item = ({data}) => {
  if (data.type == 'single'){

    return (
      <View style={style.single}>
        <Text>{data.time1}</Text>
        <Text>{data.contract1}</Text>
        <Text>{data.price1}</Text>
        <Text>{data.position1}</Text>
        <Text>-${data.price1*data.position1}</Text>  
      </View>
    )

  } else if (data.type == 'complete'){

    return (
      <View style={style.complete}>

        <View style = {style.completeContract1}>
          <Text>{data.time1}</Text>
          <Text>{data.contract1}</Text>
          <Text>{data.price1}</Text>
          <Text>{data.position1}</Text>
          <Text>+${data.price1*data.position1}</Text>  
        </View>

        <View style = {style.completeContract2}>
          <Text>{data.time2}</Text>
          <Text>{data.contract2}</Text>
          <Text>{data.price2}</Text>
          <Text>{data.position2}</Text>
          <Text>-${data.price2*data.position2}</Text>     
        </View>

      </View>
    )

  } else {

    return (
      <View style={style.reject}>
        <Text>{data.time1}</Text>
        <Text>{data.contract1}</Text>
        <Text>{data.price1}</Text>
        <Text>{data.position1}</Text>
        <Text>${data.price1*data.position1}</Text>  
      </View>
    )

  }
} 



const TransactionHistory = ({transHistory}) => {
  return (
    <React.Fragment>
      
      <Text style = {style.widgetTitle}>Past Transactions</Text>

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