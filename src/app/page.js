"use client"
import react, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

import BuyCrypto from "../components/homePage/BuyCrypto";
import Hero from "../components/homePage/Hero";
import Pricing from "../components/homePage/Pricing";
import Image from "next/image";
import TitleChart from "../components/homePage/TitleChart";
import { useMarketDataStore } from "@/store/marketDataStore";
import axios from "axios";


export default function Home() {
  const { marketData, updateMarketData } = useMarketDataStore()
  const [pair, setPair] = useState("USDT")
  const fetchMarketData = async () => {
    try {
      const coins = ["BTC", "ETH", "BNB", "SOL", "XRP", "DOGE", "ADA", "AVAX", "SHIB", "DOT", "TRX", "MATIC", "LINK", "ETC", "ATOM", "ARB", "BCH"];
      const comingData = await Promise.all(coins.map(async (coin) => {
        const res = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}USDT`);
        return {
          ...res.data,
          logo: `https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${coin.toLowerCase()}.png`,
          useSymbol: coin,
        };
      }));
      console.log(comingData);
      updateMarketData(comingData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch market data initially
    fetchMarketData();

    // Fetch market data every 3 minutes
    const intervalId = setInterval(fetchMarketData, 30 * 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    const config = {
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    };

    script.text = `{
          "symbols": ${JSON.stringify(config.symbols)},
          "showSymbolLogo": ${config.showSymbolLogo},
          "isTransparent": ${config.isTransparent},
          "displayMode": "${config.displayMode}",
          "colorTheme": "${config.colorTheme}",
          "locale": "${config.locale}"
        }`;

    const container = document.querySelector(
      ".custom-tradingview-widget-containers__widget"
    );
    container.innerHTML = "";
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);
  return (
    <>
      {/* <SeoHead title="Coinbidex" /> */}
      <Layout >
        <Hero />
        <BuyCrypto />
        <TitleChart />
        <Pricing />
      </Layout>
      <div className="custom-tradingview-widget-containers main-traker fixed bottom-0 z-50 " style={{ width: "100%" }}>
        <div className="custom-tradingview-widget-containers__widget"></div>
        <div className="custom-tradingview-widget-copyright"></div>
      </div>
    </>
  );
}
