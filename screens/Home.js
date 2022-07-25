import React, { useState } from "react";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

import { COLORS, NFTData, assets} from "../constants";
import { View, Text, SafeAreaView, ScrollView, Image} from "react-native";

const Home = () => {

    return (
        <SafeAreaView style={{flex : 1}}>
             
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
                source={ assets.bg09} />   
            </View>

            <ScrollView>

                <FocusedStatusBar background={COLORS.primary} />

                <HomeHeader/>

                {NFTData.map(item=>{
                    return  <NFTCard data = {item} key = {item.id}/>
                })}

            </ScrollView>

        </SafeAreaView>
    )
};

export default Home;