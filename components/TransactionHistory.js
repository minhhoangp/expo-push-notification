import { View, Text } from 'react-native'
import React from 'react'

const TransactionHistory = ({transHistory}) => {
  return (
    <View>
      <Text>TransactionHistory</Text>
      <Text>contract1 is {transHistory.contract1}</Text>
      <Text>contract2 is {transHistory.contract2}</Text>
    </View>
  )
}

export default TransactionHistory