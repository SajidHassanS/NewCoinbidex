"use client"
import react,{useEffect} from "react"
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import BuyCrypto from "../components/homePage/BuyCrypto";
import Hero from "../components/homePage/Hero";
import Pricing from "../components/homePage/Pricing";
import Image from "next/image";


export default function Home() {
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
      <SeoHead title="Coinbidex" />
      <Layout >
        <Hero />
        <BuyCrypto />
        <Pricing />
      </Layout>
      <div className="custom-tradingview-widget-containers main-traker fixed bottom-0 " style={{width:"100%"}}>
          <div className="custom-tradingview-widget-containers__widget"></div>
          <div className="custom-tradingview-widget-copyright"></div>
        </div>
    </>
  );
}
