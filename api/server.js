const fetch = require("node-fetch");

async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Trading Alert',
      body: 'To the Moon 🌙 Lambo 🏎️ soon 🔥🔥',
      data: {req: [
        {
          botName: "BOT 01",
          assetName: "LUNA",
          baseCurrency: "USDT",
          exchangeName: "Binance",
          profit: 2.3,
          elapsedTime: "02h 22m",
          pendingTrans: true,
          historyicalRecord: true,
          transHistory: [
            {
              id: "4",
              type: "single",
      
              contract1: "buy",
              position1: 2,
              price1: 70.68,
              time1:"1:50:21 PM",
            },
            {
              id: "1",
              type: "complete",
      
              contract1: "buy",
              position1: 2,
              price1: 70.68,
              time1:"1:50:21 PM",
      
              contract2: "sell",
              position2: 2,
              price2: 72.68,
              time2:"1:51:21 PM",
            },
            {
              id: "2",
              type: "rejected",
      
              contract1: "buy",
              position1: 2,
              price1: 70.68,
              time1:"1:50:21 PM",
            },
            {
              id: "3",
              type: "complete",
      
              contract1: "sell",
              position1: 3,
              price1: 77.23,
              time1:"12:10:01 PM",
      
              contract2: "buy",
              position2: 3,
              price2: 72.13,
              time2: "01:00:59 PM"
            }
          ],
      
          pendingInfo:{
            checklist: [
              {indicator: "20 Moving Avarage", id: 1},
              {indicator: "RSI", id: 2},
              {indicator: "On-Balance Volume", id: 3},
              {indicator: "Tailored", id: 4}
            ],
            timeRemaining: 39,
          },
      
      
          id: "NFT-01",
        },
        {
          botName: "BOT 02",
          assetName: "BTC",
          baseCurrency: "USDT",
          exchangeName: "BINANCE",
          profit: -2.9,
          elapsedTime: "01h 31m",
          pendingTrans: false,
          historyicalRecord: true,
          transHistory: [
            {
              id: "1",
      
              contract1: "buy",
              position1: 2,
              price1: 70.68,
              time1:"1:50:21 PM",
      
              type: "single"
            },
          ],
      
          pendingInfo: null,
      
          id: "NFT-02",
        },
        {
          botName: "BOT 03",
          assetName: "DOGE",
          baseCurrency: "USDT",
          exchangeName: "BINANCE",
          profit: 3.6,
          elapsedTime: "05h 12m",
          pendingTrans: false,
          historyicalRecord: true,
          transHistory: [
            {
              id: "1",
      
              contract1: "buy",
              position1: 2,
              price1: 70.68,
              time1:"1:50:21 PM",
      
              type: "single"
            },
            {
              id: "2",
      
              contract1: "sell",
              position1: 3,
              price1: 77.23,
              time1:"12:10:01 PM",
      
              contract2: "buy",
              position2: 3,
              price2: 72.13,
              time2: "01:00:59 PM",
      
              type: "complete"
            },
          ],
          
          pendingInfo: null,
      
          id: "NFT-03",
        },
        {
          botName: "BOT 04",
          assetName: "eth",
          baseCurrency: "USDT",
          exchangeName: "BILO",
          profit: -4.7,
          elapsedTime: "1h31m",
          pendingTrans: true,
          historyicalRecord: true,
          transHistory: [
            {
              id: "1",
      
              contract1: "buy",
              position1: 2,
              price1: 70.68,
              time1:"1:50:21 PM",
      
              type: "single"
      
            },
            {
              id: "2",
      
              contract1: "sell",
              position1: 3,
              price1: 77.23,
              time1:"12:10:01 PM",
      
              contract2: "buy",
              position2: 3,
              price2: 72.13,
              time2: "01:00:59 PM",
      
              type: "complete"
            },
          ],
      
          pendingInfo:{
            checklist: [
              {indicator: "20 Moving Avarage", id: 1},
              {indicator: "RSI", id: 2},
              {indicator: "On-Balance Volume", id: 3}
            ],
            timeRemaining: 59
          },
      
          id: "NFT-04",
        },
        {
          botName: "BOT 05",
          assetName: "eth",
          baseCurrency: "USDT",
          exchangeName: "BINANCE",
          profit: 0,
          elapsedTime: "1h31m",
          pendingTrans: false,
          historyicalRecord: false,
          transHistory: [
            null
          ],
          id: "NFT-05",
        }
      ]}
    };
  
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
}

console.log("sending data")
sendPushNotification("ExponentPushToken[7QuEmtIstv6oQ8nJQv9QXI]")
console.log("sent")