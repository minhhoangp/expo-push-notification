const dummyData = require('./dummy.js');
const fetch = require("node-fetch");

async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Trading Alert',
      body: 'To the Moon 🌙 Lambo 🏎️ soon 🔥🔥',
      data: dummyData
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