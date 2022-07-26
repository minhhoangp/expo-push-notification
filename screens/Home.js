import React, { useState, useRef, useEffect} from "react";
import { BotCard, HomeHeader } from "../components";

import { COLORS, assets, FONTS, SIZES,} from "../constants";
import { View, Text, SafeAreaView, ScrollView, Image} from "react-native";

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});


const Home = () => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        //   console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);


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

                <HomeHeader/>
                
                
                {notification && (notification.request.content.data.req).map(item=>{
                    return  <BotCard data = {item} key = {item.id}/>
                })}

                {!notification && <BlankNotiScreen/>}

            </ScrollView>

        </SafeAreaView>
    )
};

export default Home;

const BlankNotiScreen = ({}) => {
    return (

        <View
        style={{
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Image
                source={assets.tick2}
                resizeMode="contain"
                style={{
                    
                    
                }}
            />
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.large,
            color: COLORS.white
        }}> No notices right now! </Text>

        </View>


    );
};
  

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }