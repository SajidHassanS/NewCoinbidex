"use client"
import { GoGift } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import icon3 from "../../assets/images/flags/germany.jpg";
import icon4 from "../../assets/images/flags/italy.jpg";
import icon5 from "../../assets/images/flags/russia.jpg";

import icon6 from "../../assets/images/icon/svg-1.svg";
import icon7 from "../../assets/images/icon/svg-4.svg";
import icon8 from "../../assets/images/icon/svg-6.svg";
import icon9 from "../../assets/images/icon/svg-5.svg";
import icon10 from "../../assets/images/icon/discovery.png";
import ico11 from "../../assets/images/icon/manager.png";
import icon12 from "../../assets/images/icon/users.png";
import icon13 from "../../assets/images/icon/Lock.png";
import icon14 from "../../assets/images/icon/smartphone.png";
import cash from "../../assets/images/menu_icons/cash.png";
import margin from "../../assets/images/menu_icons/margin.png";
import leveraged from "../../assets/images/menu_icons/leveraged.png";
import quick from "../../assets/images/menu_icons/quick.png";
import buy from "../../assets/images/menu_icons/buy.png";

// import Button from '../button';

///coin icons
import ada from "../../assets/images/coin/ada.png";
import bnd from "../../assets/images/coin/bnb.png";
import btc from "../../assets/images/coin/btc.png";
import eth from "../../assets/images/coin/eth.png";
import avax from "../../assets/images/coin/avax.png";
import coin from "../../assets/images/icon/icon-01.png";
import bakreycoin from "../../assets/images/icon/bakeryswap.svg";
import poocoin from "../../assets/images/icon/poocoin-1.svg";
import pancake from "../../assets/images/icon/pancake.svg";
import coingeckogo from "../../assets/images/logo/coingeckogo.webp";
//  links

import markets from "../../pages/Markets"
import earn from "../../pages/Earn"
import p2p from "../../pages/p2p/P2p"
import commerce from "../SwipPage/index"
import copytrading from "../../pages/CopyTrading"

 const menus = [
    {
      id: 1,
      name: "MARKETS ",
      links: '/markets',
  
     
    },
    {
      id: 2,
      name: "TRADE",
      links: "#",
      namesub: [
        {
          id: 1,
          sub: "P2P",
          links: "/p2p",
          icon: cash,
        },
        {
          id: 2,
          sub: "Margin Trading",
          icon: margin,
        },
        {
          id: 3,
          sub: "Crypto Pricing",
          links: "https://price.coinbidex.com/",
          icon: leveraged,
        },
        {
          id: 4,
          sub: "Quick Buy & Swap",
          links:"https://swap.coinbidex.com/",
          icon: quick,
        },
        {
          id: 5,
          sub: "Buy Crypto Via 3rd Party",
          icon: buy,
        },
       
      ],
    },
    {
      id: 3,
      name: "Coinbidex Commerce",
      links: "/commerce",
    },
    {
      id: 4,
      name: "COPY TRADING",
      links: "/copytrading",
    },
    {
      id: 5,
      name: "EARN",
      links: "/earn",
    },

    {
      id: 6,
      name: "LEARN ",
      links: "#",
      namesub: [
        {
          id: 1,
          sub: "Discover",
          links: "#",
          icon: icon6,
        },
        {
          id: 2,
          sub: "Digest",
          links: "#",
          icon: icon7,
        },
       
      ],
    },
{
  icon1:GoGift,
  icon2: GoQuestion,
  btn1: "SIGN IN",
  btn2:"REGISTER"
}
  
  ];

  export default menus;