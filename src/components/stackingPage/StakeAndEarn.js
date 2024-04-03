"use client"
import React, { useMemo, useState, useEffect } from "react";

import ButtonOutline from "../misc/ButtonOutline";
import { motion } from "framer-motion";
// import getScrollAnimation from "../../utils/getScrollAnimation";
import banner from "../../../public/assets/stacking/banner.svg";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Image from "next/image";
import bringing from "../../../public/assets/stacking/11.png"
import flexible from "../../../public/assets/stacking/21.png"
import lowRisk from "../../../public/assets/stacking/31.png"
import { LuBookMarked } from "react-icons/lu";

const StakeAndEarn = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="max-w-screen-xl mt-24 px-18 xl:px-4 mx-auto">
      <div className="flex px-8 pb-6 flex-col justify-center items-start">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-black-600 leading-normal">
            <strong className=" text-black-600">Stake and earn with ease!</strong>
          </h1>
        </div>
        <div
            className="py-6 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
           
          >
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-100">
                <Image src={bringing} width={150} height={150} />
              </div>
              <div className="flex flex-col justify-center px-8">
                <h4 className="text-black-500 text-xl leading-normal py-4">
                  <strong>Bringing together top PoS networks</strong>
                </h4>
                <p>
                  Coinbidex brings together high-quality and industry-recognized PoS networks for staking.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-100">
                <Image src={flexible} width={150} height={150} />
              </div>
              <div className="flex flex-col justify-center px-8">
                <h4 className="text-black-500 text-xl leading-normal py-4">
                  <strong>Flexible redemption times</strong>
                </h4>
                <p>
                Fast and flexible redemption options supported to help optimize your staking strategies.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-100">
                <Image src={lowRisk} width={150} height={150} />
              </div>
              <div className="flex flex-col justify-center px-8">
                <h4 className="text-black-500 text-xl leading-normal py-4">
                  <strong>Low-risk and stable earnings</strong>
                </h4>
                <p>
                Staked assets are directly locked into PoS networks to allow investors to earn returns without running their own validator node.
                </p>
              </div>
            </div>
          </div>
       
      </div>
    </>
  );
};

export default StakeAndEarn;
