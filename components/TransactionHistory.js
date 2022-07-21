import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

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

const TransactionHistory = ({transHistory}) => {
  return (
    <View style={style.historyPair}>

      <View style = {style.contract1}>
        <Text>contract1 is {transHistory.contract1}</Text>
      </View>

      <View style = {style.contract2}>
        <Text>contract2 is {transHistory.contract2}</Text>
      </View>
  
    </View>
  )
}

export default TransactionHistory