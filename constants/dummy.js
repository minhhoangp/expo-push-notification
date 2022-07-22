import assets from "./assets";

const NFTData = [
  {
    botName: "BOT 01",
    assetName: "luna2",
    exchangeName: "BINANCE",
    profit: "+2.3%",
    elapsedTime: "1h31m",
    pendingTrans: true,
    historyicalRecord: true,
    transHistory: [
      {
        id: "1",

        contract1: "long",
        position1: 2,
        price1: 70.68,
        time1:"1:50:21 PM",

        contract2: null,
        position2: null,
        price2: null,
        time2: null
      },
      {
        id: "2",

        contract1: "short",
        position1: 3,
        price1: 77.23,
        time1:"12:10:01 PM",

        contract2: "short",
        position2: 3,
        price2: 72.13,
        time2: "01:00:59 PM"
      },
    ],

    pendingInfo:{
      checklist: [
        {indicator: "20 Moving Avarage", id: 1},
        {indicator: "RSI", id: 2},
        {indicator: "On-Balance Volume", id: 3}
      ],
      timeRemaining: 39
    },


    id: "NFT-01",
    name: "Abstracto #312",
    creator: "Putri Intan",
    price: 4.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.binanceLogo,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    botName: "BOT 02",
    assetName: "bitcoin",
    exchangeName: "BINANCE",
    profit: "+2.3%",
    elapsedTime: "1h31m",
    pendingTrans: false,
    historyicalRecord: true,
    transHistory: [
      {
        id: "1",

        contract1: "long",
        position1: 2,
        price1: 70.68,
        time1:"1:50:21 PM",

        contract2: null,
        position2: null,
        price2: null,
        time2: null
      },
    ],

    pendingInfo: null,

    id: "NFT-02",
    name: "Green Coins",
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.bybitLogo,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    botName: "BOT 03",
    assetName: "doge",
    exchangeName: "BINANCE",
    profit: "+2.3%",
    elapsedTime: "1h31m",
    pendingTrans: false,
    historyicalRecord: true,
    transHistory: [
      {
        id: "1",

        contract1: "long",
        position1: 2,
        price1: 70.68,
        time1:"1:50:21 PM",

        contract2: null,
        position2: null,
        price2: null,
        time2: null
      },
      {
        id: "2",

        contract1: "short",
        position1: 3,
        price1: 77.23,
        time1:"12:10:01 PM",

        contract2: "short",
        position2: 3,
        price2: 72.13,
        time2: "01:00:59 PM"
      },
    ],
    
    pendingInfo: null,

    id: "NFT-03",
    name: "NFT coins race",
    creator: "Elisabeth aho",
    price: 95.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.huobiLogo,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    botName: "BOT 04",
    assetName: "eth",
    exchangeName: "BILO",
    profit: "-4.7%",
    elapsedTime: "1h31m",
    pendingTrans: true,
    historyicalRecord: true,
    transHistory: [
      {
        id: "1",

        contract1: "long",
        position1: 2,
        price1: 70.68,
        time1:"1:50:21 PM",

        contract2: null,
        position2: null,
        price2: null,
        time2: null
      },
      {
        id: "2",

        contract1: "short",
        position1: 3,
        price1: 77.23,
        time1:"12:10:01 PM",

        contract2: "short",
        position2: 3,
        price2: 72.13,
        time2: "01:00:59 PM"
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
    name: "Nifty NFT",
    creator: "Putri Intan",
    price: 54.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    botName: "BOT 05",
    assetName: "eth",
    exchangeName: "BINANCE",
    profit: "+2.3%",
    elapsedTime: "1h31m",
    pendingTrans: false,
    historyicalRecord: false,
    transHistory: [
      null
    ],


    id: "NFT-05",
    name: "Colorful circles",
    creator: "David doe",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
];

export { NFTData };
