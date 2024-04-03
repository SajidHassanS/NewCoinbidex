"use client"
import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";

import ButtonOutline from "../misc/ButtonOutline";
import Maps from "../../../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import UnlockPotential from "./UnlockPotential";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full my-10 "
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
     
        <div className="flex flex-col w-full my-16" id="testimoni">
        
          <div className="w-full flex flex-col py-12">
            <div variants={scrollAnimation}>
              <UnlockPotential />
            </div>
          </div>
          <div className="relative w-full mt-16 ">
            <div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="hidden absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full lg:flex flex-col sm:flex-row justify-between items-center z-10 bg-blue-800 rounded-large">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-white-500 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p className="text-white-300 pt-4">Let's subscribe with us and find the fun.</p>
                </div>
                <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full
     capitalize hover:bg-blue-200 hover:text-white-500 transition-all hover:shadow-blue-200 ">Get Started</button>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
