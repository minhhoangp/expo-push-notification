import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

const style = StyleSheet.create({
  
  historyPair:{
      backgroundColor: '#ffcc99',
      borderRadius: 10
  },

  contract1:{
    backgroundColor: '#ffcc99',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  contract2:{
    padding: 15,
    backgroundColor: '#000080',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

})



const Pair = ({pairData}) => {
  return (
    <React.Fragment>
      <View style={style.historyPair}>

      <View style = {style.contract1}>
        <Text>contract1 is {pairData.contract1}</Text>
      </View>

      <View style = {style.contract2}>
        <Text>contract2 is {pairData.contract2}</Text>
      </View>

      </View>

    </React.Fragment>
  )
} 



const TransactionHistory = ({transHistory}) => {
  return (
    <React.Fragment>
      
      <Text>Past Transactions</Text>

      {<FlatList
        data={transHistory}
        renderItem={({ item }) => <Pair pairData={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3}}
      />}

    </React.Fragment>
  )
}

export default TransactionHistory