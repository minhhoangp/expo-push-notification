import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";


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

export const PendingTrans = (props) => {
    if (props.pendingTrans == true){
        return (
            <Text
                style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.secondary,
            }}>
                1 PENDING TRANSACTION!
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -150
        }}>

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


export const SubInfo = () => {
return (
    <View
        style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: "space-between",
    }}>
        <BotInfo />
    </View>
);
};