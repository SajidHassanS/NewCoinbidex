"use client"
import React, { useMemo, useState, useEffect } from "react";

import ButtonOutline from "../misc/ButtonOutline";
import { motion } from "framer-motion";
// import getScrollAnimation from "../../utils/getScrollAnimation";
import banner from "../../../public/assets/stacking/banner.svg";
// import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Image from "next/image";
import { LuBookMarked } from "react-icons/lu";

const Banner = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="max-w-screen-xl  mt-24 px-18 xl:px-4 mx-auto">
      
          <div
            className="grid grid-cols-1 sm:grid-cols-2  py-6 sm:py-16"
           
          >
            <div className="flex px-8 flex-col justify-center items-start">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl text-black-600 leading-normal">
                <strong className="text-black-600">Staking</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Earn profits daily without risking your principal
              </p>
              <div className="flex items-center gap-2 mb-6">
              <LuBookMarked />
              <p className="text-black-500 ">
                
                Beginner's guides
              </p>
              </div>
              <ButtonOutline>Log in to check profit</ButtonOutline>
            </div>
            <div className="mt-8 ">
              <div className="flex justify-center w-100 ">
                <img src="assets/stacking/banner.svg" />
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Banner;
