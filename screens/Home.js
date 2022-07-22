import React, { useState } from "react";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

import { COLORS, NFTData,  } from "../constants";
import { View, Text, SafeAreaView, FlatList, ScrollView} from "react-native";

const Home = () => {

    return (
        <SafeAreaView style={{flex : 1}}>
            <ScrollView>

            <FocusedStatusBar background={COLORS.primary} />


                <HomeHeader/>

                {NFTData.map(item=>{
                    return  <NFTCard data = {item} key = {item.id}/>
                })}

            </ScrollView>


            <View
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                
                <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                
            </View>

        </SafeAreaView>
    )
};

export default Home;