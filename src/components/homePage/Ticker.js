"use client"
import React from "react";
import Ticker from "react-ticker";
import { GrAnnounce } from "react-icons/gr";


const TickerNews = () => {
  // Define an array of news headlines
  const headlines = [
    "Introducing Minimum Notional Value Requirement for Derivatives Trading",
    "Derivatives Welcome Gift: Collect 100 Points to Earn 100 USDT in Coupons",
    "MEME Ecosystem Coinbidex: Trade and Share 2,130,000,000 PEPE Prize Pool & More!",
    "Coinbidex: 1,025,000 XAI Airdrop Extravaganza",
    "P2P 2nd Anniversary Rekindle: Earn Up to 115 USDT in P2P Coupons",
    // Add more headlines as needed
  ];

  return (
    <div className="d-flex justify-center align-middle ">
  <div className=" absolute left-80 " > <GrAnnounce color="white"/></div>

      <div
        className=" max-w-screen-xl text-white-300   px-18 xl:px-8 mx-auto"
        style={{ whiteSpace: "nowrap" }}
      >
       
       
     
        <Ticker speed={6}>
          {({ index }) => (
            <div>
              {headlines.map((headline, i) => (
                <span
                  key={i}
                  className={index === i ? "ticker-active" : "ticker-inactive"}
                  style={{ marginRight: "30px" }}
                >
                  {headline}
                </span>
              ))}
            </div>
          )}
        </Ticker>
      </div>
    
    </div>
  );
};

export default TickerNews;
