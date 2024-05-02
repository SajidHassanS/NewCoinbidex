"use client"
import React, { useEffect, useRef, memo } from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Layout/Header';

function CopyTrading() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "container_id": "analytics-platform-chart-demo",
          "width": "100%",
          "height": "100%",
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "exchange",
          "theme": "light",
          "style": "0",
          "withdateranges": true,
          "allow_symbol_change": true,
          "save_image": false,
          "details": true,
          "hotlist": true,
          "calendar": true
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <>
    <Header/>
 
<div className='copyTrading' >
<style>
          {`
    @media only screen and (max-width: 767px) {
      .copyTrading{
        height: 90vh;
        margin-top:100px;
      }
   
    }
    @media only screen and (min-width: 768px) {
      .copyTrading{
        height: 850px;
        margin-top:150px;
      }
     
    }
    
  `}
        </style>
<div className="tradingview-widget-container " ref={container} style={{ height: "800px", width: "100vw" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"></a></div>
    </div>
    </div>


    </>
   
   
  );
}

export default memo(CopyTrading);
