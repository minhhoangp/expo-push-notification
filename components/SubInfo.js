import React, {useContext} from "react";
import { View, Image, Text , StyleSheet} from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";
import { RectButton, CircleButton } from './Button';

import { PendingTransContext } from "../helper/Context";

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
    console.log("timer " + timer)

    if (pendingStatus == true){
        return (
            <Text
                style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.secondary,
            }}>
               PENDING TRANS: 0: {timer}
            </Text>
        )
    } else {
        return (
            <Text
                style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.secondary,
            }}>
            </Text>
        )
    }
}

export const BotName = ({botName}) => {
    return (
        <Text
            style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}>
            {botName}
        </Text>
    )
}

export const AssetName = ({assetName}) => {
    return (
        <Text
            style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}>
            {assetName}
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

export const BotInfo = ({botName, assetName, exchangeName, profit, elapsedTime}) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -150}}>

            <View style={{ flexDirection: "row"}}>
                <Image
                    source = {assets[assetName]}
                    resizeMode ="contain"
                    style = {{ width: 70, height: 70 }}
                />

                <View>
                    <BotName botName = {botName}/>
                    <AssetName assetName = {assetName}/>
                    <ExchangeName exchangeName = {exchangeName}/>
                </View>
            </View>

            <View>
                <Text
                    style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    }}
                >
                    {profit}
                </Text>

                <Text
                    style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    }}
                >
                    {elapsedTime}
                </Text>
            </View>
        </View>
    );
}

export const BotDetailedInfo = ({botName, assetName, exchangeName, profit, elapsedTime}) => {
return (
    <View
        style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: "space-between", 
    }}>

        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>

            <View style={{ flexDirection: "row"}}>
                <Image
                    source = {assets[assetName]}
                    resizeMode ="contain"
                    style = {{ width: 70, height: 70 }}
                />

                <View>
                    <BotName botName = {botName}/>
                    <AssetName assetName = {assetName}/>
                    <ExchangeName exchangeName = {exchangeName}/>
                </View>
            </View>

            <View>
                <Text
                    style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    }}
                >
                    {profit}
                </Text>

                <Text
                    style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    }}
                >
                    {elapsedTime}
                </Text>
            </View>
        </View>

    </View>
);
};

const style = StyleSheet.create({
    pendingWidget:{
        backgroundColor: '#ffcc99',
        padding: 15,
        borderRadius: 10,

        flexDirection: "row",
        justifyContent: "space-between"
    },

    botDetail:{
        backgroundColor: 'FFF',
        padding: 15,
        borderRadius: 10
    }, 

    indicator:{
        flexDirection: "row", 
    },

    tickIcon:{
        width: 20, 
        height: 20, 
        backgroundColor: "#55BCF6",
        opacity: 0.4, 
        borderRadius: 5
    }

})

export const IndicatorChecklist = ({checklist}) => {
    return  <React.Fragment>

                {checklist.map(item=>{
                    return  <View style={style.indicator} key = {item.id}>
                                <View style={style.tickIcon}></View>
                                <Text>{item.indicator}</Text>
                            </View>
                })}
        
            </React.Fragment>

}

export const PendingWidget = ({timeRemaining, checklist, transInfo}) => {
    return (
        <React.Fragment>

            <Text>Pending Transaction</Text>

            <View style = {style.pendingWidget}>
                
                <View>
                    <IndicatorChecklist checklist = {checklist}/>
                </View>

                <View>
                    
                

                    <RectButton
                        handlePress={() => console.log("hello")}
                    />
                </View>
                

            </View>

        </React.Fragment>
    )
}