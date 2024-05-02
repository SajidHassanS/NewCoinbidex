import React, { useState } from "react";

// import "./p2p.css";

const BuySell = () => {
    const [isBuyActive, setIsBuyActive] = useState(true);
    const [isSellActive, setIsSellActive] = useState(false);

    const handleBuyClick = () => {
        setIsBuyActive(true);
        setIsSellActive(false);
      };
    
      const handleSellClick = () => {
        setIsBuyActive(false);
        setIsSellActive(true);
      };
  return (
    <div className="bg-white-300 p-1 bg-white-300 rounded-full m-3">
          <button
            style={{
              backgroundColor: isBuyActive ? "rgb(74 222 128)" : "#F8F8F8",
              color: "black",
              padding: "6px 20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              borderRadius:"30px"
            }}
            onClick={handleBuyClick}
          >
            Buy
          </button>
          <button
            style={{
              backgroundColor: isSellActive ? "rgb(244 63 94)" : "#F8F8F8",
              color: "black",
              padding: "6px 20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              borderRadius:"30px"
            }}
            onClick={handleSellClick}
          >
            Sell
          </button>
        </div>
  )
}

export default BuySell