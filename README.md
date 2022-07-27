
## Trading Alert
![ezgif com-gif-maker](https://user-images.githubusercontent.com/88297894/181256562-9a4bb1a8-e82c-4129-9483-a13f15ee7346.gif)


![ezgif com-gif-maker](https://user-images.githubusercontent.com/88297894/181257744-96383111-54c0-4158-93f3-ad399a6c5a8b.gif)
![2463835591160709341_AdobeExpress](https://user-images.githubusercontent.com/88297894/181257865-e3feb8cf-e184-4b56-a1c2-7b9e00e1924b.gif)

Trading bots are meant to function without human supervision; however, a "work in progress" bot may act aggressively and go on a losing streak. Trading Alert was created to allow traders to closely monitor the performance of their bots at any time. A push notification will be sent to user's mobile device every time the trading bot spots a trading opportunity that waits on user's approval to execute the trade. 


### Built With

* React Native
* Expo
* Nodejs 
* Expo Push notifications tool
* Github (hosts API)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The project requires Node.js and Expo to be installed. 

* Node.js : [https://www.pluralsight.com/guides/getting-started-with-nodejs]

* Expo : [https://docs.expo.dev/get-started/installation/]



### Installation

1. Clone the repo
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

Run the program using either  
 ```sh
   npm start
   ```
or 
 ```sh
   expo start
   ```

Use your mobile device with Expo application installed to scan the QR code on your compiler's terminal. 

Use `Node server.js` to send dummy push notifications to the mobile device. 

> **_NOTE:_**: user needs to tap on the notification instead of manually opening/switching back to the application from background as Expo's event listener for background activities is only fired from user tapping the notification.

<!-- ROADMAP -->
## Roadmap

- [x] Implement push notifications 
- [x] Show past transactions made by trading bots
- [ ] Send POST request from mobile device to server using Github  
- [ ] UI improvement (eg: fetch new data while backgrounded without notification interection, ..)


<!-- CONTACT -->
## Contact

Hoang - minhhoangp30@gmail.com


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Push trading strategy notifications](https://medium.com/bitfinex/tutorial-push-trading-strategy-notifications-to-your-mobile-b2f725a2d4c7)
* [React native NFT marketplace](https://github.com/adrianhajdin/react-native-nft-marketplace)
* [Push Notifications Expo](https://docs.expo.dev/push-notifications/overview/)
* [README template](https://github.com/othneildrew/Best-README-Template)
