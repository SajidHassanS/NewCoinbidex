"use client"
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";

import ButtonOutline from "../misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import TickerNews from "./Ticker";
import UnlockPotential from "./UnlockPotential";

import MyTabs from "./MyTabs";
import MobileTab from "./MobileTab";
import { useMarketDataStore } from "@/store/marketDataStore";

const Hero = ({ }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { marketData, updateMarketData } = useMarketDataStore()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 520); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>



      <div className="bg-blue-100 mt-24 px-18 xl:px-4 ">

        <div
          className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2  py-6 sm:py-16"

        >
          <div className="flex px-3  grid-cols-7 flex-col justify-center lg:justify-start lg:mt-24 items-start">
            <h1 className="text-3xl   py-4 lg:text-4xl xl:text-6xl text-black-600 leading-relaxed">
              Buy & Sell Digital<br /> Assets on
              <span className="text-blue-800 font-extrabold"> Coinbidex</span>.
            </h1>
            <p className="text-black-500 py-8">
              Coinbidex is the easiest, safest and fastest way to buy & sell
              crypto assets.
            </p>
            <div className="my-4"> <ButtonOutline>Get Started</ButtonOutline></div>

          </div>
          <div className="mt-8 grid-cols-5 ">
            <div className="flex justify-center lg:justify-end mx-5 xl:mx-2  ">


              {/* <iframe
                className="banner__image rounded-large "
                width="500"
                height="600"
                allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
                src="https://flooz.xyz/embed/trade?swapDisabled=false&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=true&onRampTokenAddress=0xd16Cb89F621820bC19DAE1C29c9DB6D22813b01D&onRampLockToken=true&stakeDisabled=true&network=bsc&lightMode=true&primaryColor=%230052fe&backgroundColor=transparent&roundedCorners=32&padding=40&refId=pMRL54"
                scrolling="no"
                frameBorder="0"
              ></iframe> */}
              <iframe width="400" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapNetwork=eth&swapLockToToken=false&onRampDisabled=false&onRampNetwork=eth&onRampAsDefault=false&onRampTokenAddress=eth&onRampLockToken=true&network=eth&lightMode=true&backgroundColor=transparent" ></iframe>
              {/* <iframe width="400" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=true&swapNetwork=eth&swapLockToToken=false&onRampDisabled=false&onRampNetwork=eth&onRampAsDefault=false&onRampTokenAddress=eth&network=eth&lightMode=true&backgroundColor=transparent" ></iframe> */}
            </div>
          </div>
        </div>



      </div>
      <div className="bg-gradient-to-r py-2 d-flex grid-cols-12 flex-col from-blue-800 to-blue-200">
        {/* <div className="sm:mx-80   col-span-2">
          <HiSpeakerphone color="white" size={25} />
        </div> */}
        <div className="py-3 col-span-8">
          <TickerNews />
        </div>
        {/* <div className="sm:mx-80  col-span-2" style={{float:"right"}}>
          <BsArrowRightShort color="white" size={25} />
        </div> */}
      </div>
      <div className="bg-white-300 mt-5">
        <div className="sm:hidden block max-w-screen-xl py-16 px-2 sm:px-8  mx-auto">
          <MobileTab />
        </div>

        <div className="hidden sm:block max-w-screen-xl py-16 px-2 sm:px-8  mx-auto">
          <MyTabs data={marketData} />
        </div>

      </div>
    </>
  );
};

export default Hero;
