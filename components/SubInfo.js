import React, {useContext, useState, useRef, useEffect} from "react";
import { View, Image, Text , StyleSheet} from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";
import { ApprovePendButton, CircleButton } from './Button';

import { PendingTransContext } from "../helper/Context";
import { BlurView } from "expo-blur";

  
export const PendingTrans = ({pendingStatus}) => {
    const {timer} = useContext(PendingTransContext)

    if (pendingStatus == true){
        return (         
            <View style={{                
                borderRadius: SIZES.xs,
                overflow: "hidden",
                marginLeft: SIZES.xs,
                marginBottom: SIZES.xs
            }}>
                <BlurView
                    blurType="light"
                    blurAmount={100}
                    tint="light"
                    reducedTransparencyFallbackColor="white"
                >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: SIZES.base
                    }}>
                        <Text
                            style={{
                            fontFamily: FONTS.light,
                            fontSize: SIZES.font,
                            color: COLORS.white,
                        }}>
                            Pending request
                        </Text>

                        <Text
                        style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.medium,
                        color: COLORS.white,
                        }}>
                            0:{timer}
                        </Text>
                    </View>
                </BlurView>
            </View>
        )
    } else {
        return (
            <View></View>
        )
    }
}

export const BotName = ({botName}) => {
    return (
        <Text
            style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
            color: COLORS.white,
    
        }}>
            {botName}
        </Text>
    )
}

export const Profit = ({profit}) => {
    if (profit >= 0){
        return (
            <View style = {{borderRadius: SIZES.base, flexDirection: 'row', justifyContent: 'center', backgroundColor: COLORS.green, padding: SIZES.xs }}>
                <Text
                    style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    }}
                >
                    +{profit}%
                </Text>
            </View>
        )

    } else {
        return (
            <View style = {{borderRadius: SIZES.base, flexDirection: 'row', justifyContent: 'center', backgroundColor: COLORS.red ,padding: SIZES.xs }}>

                <Text
                    style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    }}
                >
                    {profit}%
                </Text>
            </View>
        )
    }
}

export const AssetName = ({assetName, baseCurrency}) => {
    return (
        <Text
            style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.white,
        }}>
            {assetName}/{baseCurrency} 
        </Text>
    )
}

export const ExchangeName = ({exchangeName}) => {
    return (
        <Text
            style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.regular,
            color: COLORS.white,
        }}>
            {exchangeName}
        </Text>
    )
}

export const BotInfo = ({botName, assetName, exchangeName, profit, elapsedTime, baseCurrency}) => {
   
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems: 'center', padding: SIZES.base}}>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Image
                    source = {assets[assetName]}
                    resizeMode ="contain"
                    style = {{ width: 70, height: 70 }}
                />

                <View style={{marginLeft: SIZES.small}}>
                    <AssetName assetName = {assetName} baseCurrency = {baseCurrency}/>
                    <View style={{margin: SIZES.xxs}}></View>
                    <BotName botName = {botName}/>
                </View>
            </View>

            <View style = {{alignItems: 'flex-end', margin: SIZES.xxs}}>
                <Profit profit = {profit}/>

                <Text
                    style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginTop: SIZES.xs
                    }}
                >
                    {elapsedTime}
                </Text>
            </View>
        </View>
    );
}

export const BotDetailedInfo = ({botName, assetName, baseCurrency, exchangeName, profit, elapsedTime}) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems: 'center', padding: SIZES.base}}>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Image
                    source = {assets[assetName]}
                    resizeMode ="contain"
                    style = {{ width: 70, height: 70 }}
                />

                <View style={{marginLeft: SIZES.small}}>
                    <AssetName assetName = {assetName} baseCurrency = {baseCurrency}/>
                    <View style={{margin: SIZES.xxs}}></View>
                    <ExchangeName exchangeName = {exchangeName}/>
                </View>
            </View>

            <View style = {{alignItems: 'flex-end', margin: SIZES.xxs}}>
                <Profit profit = {profit}/>

                <Text
                    style={{
                    fontFamily: FONTS.light,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginTop: SIZES.xs
                    }}
                >
                    {elapsedTime}
                </Text>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    pendingWidget:{
        padding: 15,
        borderRadius: 10,

        flexDirection: "row",
        justifyContent: "space-between"
    },

    pendingContainer:{
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: SIZES.font,
    },

    botDetail:{
        backgroundColor: 'FFF',
        padding: 15,
        borderRadius: 10
    }, 

    indicator:{
        flexDirection: "row", 
        margin: SIZES.xxs
    },

    tickIcon:{
        width: 20, 
        height: 20, 
        backgroundColor: "#55BCF6",
        opacity: 0.4, 
        borderRadius: 5,
    },

    widgetTitle:{
        fontFamily: FONTS.semiBold, 
        fontSize: SIZES.medium, 
        color: COLORS.white, 
        marginBottom: SIZES.base,
        marginTop: SIZES.small
    }

})

export const IndicatorChecklist = ({checklist}) => {
    return  (
        <React.Fragment>

            {checklist.map(item=>{
                return  (
                <View style={style.indicator} key = {item.id}>
                    <Image
                        source={assets.tick}
                        resizeMode="contain"
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style = {{
                        fontFamily: FONTS.medium, 
                        fontSize: SIZES.font, 
                        color: COLORS.white, 
                    }}>
                        {item.indicator}</Text>
                </View>)
            })}
    
        </React.Fragment>
    )

}

export const ExpireButton = () => {
    return  (
        <View>
            <Text>EXPIRE</Text>
        </View>
    )
}

export const PendingWidget = ({timeRemaining, checklist, transInfo}) => {

    const [timer, setTimer] = useState(timeRemaining);

    const intervalRef = useRef(); // Add a ref to store the interval id
    const receivedDate = new Date();

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTimer(() => Math.round(timeRemaining - (new Date() - receivedDate )/1000));
    }, 1000);
      return () => clearInterval(intervalRef.current);
    }, []);
  
    // Add a listener to `timeLeft`
    useEffect(() => {
      if (timer <= 0) {
        clearInterval(intervalRef.current);
      }
    }, [timer]);


    return (
        <React.Fragment>

            <Text style = {style.widgetTitle}>Pending Transaction</Text>

            <View style = {style.pendingContainer}>
                <BlurView
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                >

                    <View style = {style.pendingWidget}>
                        
                        <View>
                            <IndicatorChecklist checklist = {checklist}/>
                        </View>

                        <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>

                                <View style= {{ borderRadius: SIZES.xs, overflow: "hidden" }}>
                                    <BlurView
                                        blurType="light"
                                        blurAmount={100}
                                        tint="light"
                                        reducedTransparencyFallbackColor="white"
                                    >
                                        <View  style={{
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            margin: SIZES.xs
                                            }}>
                                            <Text style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.font,
                                                color: COLORS.white
                                            }}> Ending in </Text>

                                            <Text style={{
                                                fontFamily: FONTS.semiBold,
                                                fontSize: SIZES.medium,
                                                color: COLORS.white}}>0:{timer}</Text>
                                        </View>
                                    </BlurView>
                                </View>
                        

                            {timer >= 1 && <ApprovePendButton
                                handlePress={() => console.log("hello")}
                            />}
        
                        </View>
                    </View>

                </BlurView>
            </View>
        </React.Fragment>
    )
}