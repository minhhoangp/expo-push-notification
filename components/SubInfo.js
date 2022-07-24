import React, {useContext, useState, useRef, useEffect} from "react";
import { View, Image, Text , StyleSheet} from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";
import { ApprovePendButton, CircleButton } from './Button';

import { PendingTransContext } from "../helper/Context";
import { BlurView } from "expo-blur";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: titleSize,
            color: COLORS.primary,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: subTitleSize,
            color: COLORS.primary,
          }}
        >
          by {subTitle}
        </Text>
      </View>
    );
  };
  
export const EthPrice = ({ price }) => {
return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
    />
    <Text
        style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
        }}
    >
        {price}
    </Text>
    </View>
);
};
  
const ImageCmp = ({ imgUrl, index }) => {
return (
    <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font,
    }}
    />
);
};

export const People = () => {
return (
    <View style={{ flexDirection: "row" }}>
        {[assets.person02, assets.person03, assets.person04].map(
            (imgUrl, index) => (
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
        )}
    </View>
);
};
  
export const EndDate = () => {
return (
    <View
    style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
    }}
    >
    <Text
        style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
        }}
    >
        Ending in
    </Text>
    <Text
        style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        }}
    >
        12h 30m
    </Text>
    </View>
);
};

export const PendingTrans = ({pendingStatus}) => {
    const {timer} = useContext(PendingTransContext)

    if (pendingStatus == true){
        return (
           
            <View style={{                
                borderRadius: SIZES.small,
                borderRadius: SIZES.xs,
                overflow: "hidden"
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
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
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

                <View style={{marginLeft: SIZES.base}}>
                    <AssetName assetName = {assetName} baseCurrency = {baseCurrency}/>
                    <BotName botName = {botName}/>
                </View>
            </View>

            <View style = {{alignItems: 'flex-end'}}>
                <Profit profit = {profit}/>

                <Text
                    style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
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
        <BotInfo 
            botName = {botName}
            assetName = {assetName}
            exchangeName = {exchangeName}
            profit = {profit}
            elapsedTime = {elapsedTime}
            baseCurrency = {baseCurrency}
        />
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

export const PendingWidget = ({timeRemaining, checklist, transInfo}) => {

    const [timer, setTimer] = useState(timeRemaining);

    const intervalRef = useRef(); // Add a ref to store the interval id
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTimer((t) => t - 1);
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
                            
                            <View style={{
                                    flexDirection:'column',
                                    alignItems: 'center'}}>
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
                        

                            <ApprovePendButton
                                handlePress={() => console.log("hello")}
                            />
                        </View>
                        

                    </View>

                </BlurView>
            </View>
        </React.Fragment>
    )
}